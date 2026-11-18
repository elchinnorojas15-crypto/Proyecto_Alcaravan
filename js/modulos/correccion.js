// js/modulos/correccion.js — Módulo 2: Corrección
// Contrato: corregir(ce, latexEstudiante, latexCorrecta, tipo) -> { ok, valida, mensaje }
// Compara por VALORES, no por texto: (x+1)^2 y x^2+2x+1 son la misma respuesta.
// valida=false significa que la respuesta no se pudo evaluar y no gasta intento.
import { compile } from "../../vendor/compute-engine/compute-engine.js";

const PUNTOS = [-2.7, -1.3, -0.4, 0.6, 1.9, 3.2, 4.5];
const TOLERANCIA = 1e-6; // relativa. OJO: el documento traía 1e6 por error.
const MINIMO_COMPARADOS = 3;

// En la forma canónica de Compute Engine 0.173, (x-1)(x+1) da "Multiply",
// (x+1)^2 da "Power" y x^2-1 da "Add". El signo menos delante se ignora.
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
