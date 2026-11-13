// js/modulos/banco.js
// Módulo 1: Banco de preguntas
// Contrato: ver docs/contratos.md
// Todos los textos matemáticos van en LaTeX. En JavaScript la barra
// invertida se escribe doble: "\\frac", "\\text".

const PREGUNTAS = [
  {
    id: "n1-01",
    nivel: 1,
    tipo: "evaluar",
    enunciado: "\\text{Si } $f(x)=3x+2$, \\text{ calcula } $f(4)$",
    solucion: "14",
    funcionApoyo: "3x+2",
    pista: "Sustituye x por 4 en la función.",
    explicacion: "$f(4)=3\\cdot4+2=12+2=14.$"
  },
  {
    id: "n1-02",
    nivel: 1,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } $(x+1)^2$",
    solucion: "x^2+2x+1",
    funcionApoyo: "(x+1)^2",
    pista: "Recuerda que $(a+b)^2=a^2+2ab+b^2$.",
    explicacion: "$(x+1)^2=x^2+2\\cdot x\\cdot1+1^2=x^2+2x+1.$"
  },
  {
    id: "n1-03",
    nivel: 1,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza: } x^2-1",
    solucion: "(x-1)(x+1)",
    funcionApoyo: "x^2-1",
    pista: "Es una diferencia de cuadrados: $a^2-b^2=(a-b)(a+b)$.",
    explicacion: "$x^2-1=x^2-1^2=(x-1)(x+1).$"
  },
  {
    id: "n2-01",
    nivel: 2,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza el trinomio: } x^2+5x+6",
    solucion: "(x+2)(x+3)",
    funcionApoyo: "x^2+5x+6",
    pista: "Busca dos números que sumados den 5 y multiplicados den 6.",
    explicacion: "Los números 2 y 3 cumplen: 2+3=5 y 2·3=6. Por tanto, x² + 5x + 6 = (x+2)(x+3)."
  },
  {
    id: "n2-02",
    nivel: 2,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica la expresión: } (x+2)(x-3)",
    solucion: "x^2-x-6",
    funcionApoyo: "(x+2)(x-3)",
    pista: "Aplica la propiedad distributiva: multiplica cada término del primer paréntesis por los del segundo.",
    explicacion: "(x+2)(x-3) = x(x) - 3(x) + 2(x) - 6 = x² - x - 6."
  },
  {
    id: "n2-03",
    nivel: 2,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza: } 9x^2-16",
    solucion: "(3x-4)(3x+4)",
    funcionApoyo: "9x^2-16",
    pista: "Es una diferencia de cuadrados donde a=3x y b=4. Recuerda que a² - b² = (a-b)(a+b).",
    explicacion: "9x² - 16 = (3x)² - 4² = (3x-4)(3x+4)."
  },
  {
    id: "n2-04",
    nivel: 2,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } \\frac{2x^2+4x}{2x}",
    solucion: "x+2",
    funcionApoyo: "\\frac{2x^2+4x}{2x}",
    pista: "Extrae el factor común 2x en el numerador y luego cancela con el denominador.",
    explicacion: "Se extrae factor común: 2x(x+2) / 2x = x+2."
  },
  {
    id: "n2-05",
    nivel: 2,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza el trinomio cuadrado perfecto: } 4x^2+12x+9",
    solucion: "(2x+3)^2",
    funcionApoyo: "4x^2+12x+9",
    pista: "Comprueba si es el cuadrado de un binomio (a+b)². La raíz del primer término es 2x y del tercero es 3.",
    explicacion: "Como 2(2x)(3) = 12x, se trata de (2x+3)²."
  },
  {
    id: "n2-06",
    nivel: 2,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } 3x^2 - 5x + 2 - (x^2 - 2x + 1)",
    solucion: "2x^2-3x+1",
    funcionApoyo: "3x^2 - 5x + 2 - (x^2 - 2x + 1)",
    pista: "Cambia los signos de los términos dentro del segundo paréntesis (por el signo menos) y suma términos semejantes.",
    explicacion: "3x² - 5x + 2 - x² + 2x - 1 = (3-1)x² + (-5+2)x + (2-1) = 2x² - 3x + 1."
  },
  {
    id: "n2-07",
    nivel: 2,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza extrayendo el factor común: } 3x^3+6x^2",
    solucion: "3x^2(x+2)",
    funcionApoyo: "3x^3+6x^2",
    pista: "El factor común de los números es 3. Para las letras, toma la de menor exponente (x²).",
    explicacion: "3x³ + 6x² = 3x²(x) + 3x²(2) = 3x²(x+2)."
  },
  {
    id: "n2-08",
    nivel: 2,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica aplicando leyes de exponentes: } \\frac{(x^3)^2 \\cdot x^4}{x^5}",
    solucion: "x^5",
    funcionApoyo: "\\frac{(x^3)^2 \\cdot x^4}{x^5}",
    pista: "Potencia de una potencia se multiplican (3x2=6). Al multiplicar bases iguales suma exponentes, al dividir réstalos.",
    explicacion: "x⁶ · x⁴ / x⁵ = x¹⁰ / x⁵ = x⁵."
  },
  {
    id: "n2-09",
    nivel: 2,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza: } 2x^2+7x+3",
    solucion: "(2x+1)(x+3)",
    funcionApoyo: "2x^2+7x+3",
    pista: "Usa el método de aspa simple o descompón el término central. 7x se puede escribir como 6x + x.",
    explicacion: "2x² + 6x + x + 3 = 2x(x+3) + 1(x+3) = (2x+1)(x+3)."
  },
  {
    id: "n2-10",
    nivel: 2,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } 2x(x^2 - 3x + 4)",
    solucion: "2x^3-6x^2+8x",
    funcionApoyo: "2x(x^2 - 3x + 4)",
    pista: "Multiplica el término 2x por cada uno de los elementos dentro del paréntesis (propiedad distributiva).",
    explicacion: "2x(x²) - 2x(3x) + 2x(4) = 2x³ - 6x² + 8x."
  }
];

export function iniciar(app) {
  // Por ahora no necesita preparar nada.
}

export function obtenerPreguntas(nivel) {
  // Devuelve copias para que nadie modifique el banco original.
  return PREGUNTAS.filter((p) => p.nivel === nivel).map((p) => ({ ...p }));
}