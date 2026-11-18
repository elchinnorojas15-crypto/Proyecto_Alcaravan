// js/modulos/correccion.js — Módulo 2: Corrección
//
// Contrato (docs/contratos.md):
//   corregir(ce, latexEstudiante, latexCorrecta, tipo) -> { ok, valida, mensaje }
//
//   ok     : la respuesta es correcta.
//   valida : la respuesta se pudo evaluar. Si valida=false, main.js NO descuenta
//            intento (vacía, mal escrita o con otra variable). Los 2 intentos
//            los controla main.js, no este módulo.
//   mensaje: texto que se le muestra al estudiante.
//
// Cómo corrige: compara por VALORES, no por texto. Evalúa la respuesta del
// estudiante y la solución en varios puntos de x y las acepta si coinciden.
// Así (x+1)^2 y x^2+2x+1 se tratan como la misma respuesta, y las fracciones
// y los decimales equivalentes también (\frac{1}{2} = 0.5).
//
// Tipos de pregunta que maneja (contrato v2):
//   "evaluar"     : la solución es un número. Se compara por valor.
//   "simplificar" : cualquier forma equivalente se acepta.
//   "factorizar"  : además del valor, se exige forma de producto (ver esProducto).
//   "pendiente"   : la solución es un número (la pendiente). Se compara por valor.
//
// Compute Engine es la versión 0.173.0 de vendor/ y funciona sin internet.
import { compile } from "../../vendor/compute-engine/compute-engine.js";

// Puntos de x donde se comparan las dos expresiones. Son decimales "feos" a
// propósito: así dos funciones distintas no coinciden por casualidad.
const PUNTOS = [-2.7, -1.3, -0.4, 0.6, 1.9, 3.2, 4.5];

// Tolerancia RELATIVA al comparar valores, para absorber el error de redondeo
// de los decimales. OJO: el documento del proyecto traía 1e6 por error.
const TOLERANCIA = 1e-6;

// Mínimo de puntos que deben compararse para dar un veredicto. Los puntos
// fuera del dominio de la solución (por ejemplo una división por cero) se
// saltan; si quedan menos de estos, no se arriesga un resultado.
const MINIMO_COMPARADOS = 3;

// ¿La respuesta está escrita como un producto? Se usa solo en las preguntas de
// tipo "factorizar", donde x^2-1 vale lo mismo que (x-1)(x+1) pero no cumple la
// consigna. En la forma canónica de Compute Engine 0.173 se comprobó que:
//   (x-1)(x+1), (x+2)(x+3), (3x-4)(3x+4), 3x^2(x+2)  ->  "Multiply"
//   (2x+3)^2                                          ->  "Power"
//   x^2-1, x^2+5x+6, 9x^2-16, 3x^3+6x^2 (expandidas)  ->  "Add"
// Un menos delante envuelve todo en "Negate", así que se baja un nivel con op1.
function esProducto(expr) {
  if (!expr) return false;
  if (expr.operator === "Negate") return esProducto(expr.op1);
  return expr.operator === "Multiply" || expr.operator === "Power";
}

export function corregir(ce, latexEstudiante, latexCorrecta, tipo) {
  // 1. Respuesta vacía
  if (!latexEstudiante || !latexEstudiante.trim()) {
    return { ok: false, valida: false, mensaje: "Escribe una respuesta." };
  }

  try {
    // 2. Mal escrita
    const expr = ce.parse(latexEstudiante);
    if (!expr.isValid) {
      return { ok: false, valida: false, mensaje: "La expresión no está bien escrita." };
    }

    // 3. Otra variable distinta de x
    const otras = (expr.unknowns || []).filter((v) => v !== "x");
    if (otras.length) {
      return {
        ok: false,
        valida: false,
        mensaje: `Solo puedes usar la variable x (usaste ${otras.join(", ")}).`,
      };
    }

    // 4. Comparar valores en varios puntos
    const fe = compile(expr);
    const fc = compile(ce.parse(latexCorrecta));
    let comparados = 0;

    for (const x of PUNTOS) {
      const c = fc.run({ x });
      if (typeof c !== "number" || !Number.isFinite(c)) continue; // fuera del dominio

      // Cambio respecto al documento: se usa Number.isFinite porque, con NaN,
      // la resta da NaN, la comparación es falsa y la respuesta pasaría como correcta.
      const e = fe.run({ x });
      if (!Number.isFinite(e) || Math.abs(e - c) > TOLERANCIA * Math.max(1, Math.abs(c))) {
        return {
          ok: false,
          valida: true,
          mensaje: "No es correcta. Compara tu respuesta en la gráfica.",
        };
      }
      comparados++;
    }

    if (comparados < MINIMO_COMPARADOS) {
      return { ok: false, valida: false, mensaje: "No se pudo comprobar la respuesta." };
    }

    // 5. Factorizar: además del valor, la respuesta debe estar en forma de producto
    if (tipo === "factorizar" && !esProducto(expr)) {
      return {
        ok: false,
        valida: true,
        mensaje: "Tu expresión es equivalente, pero falta factorizarla.",
      };
    }

    return { ok: true, valida: true, mensaje: "¡Correcto!" };
  } catch (error) {
    console.warn("corregir():", error);
    return { ok: false, valida: false, mensaje: "No se pudo comprobar la respuesta." };
  }
}
