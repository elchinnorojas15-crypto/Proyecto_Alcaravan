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
  }
];

export function iniciar(app) {
  // Por ahora no necesita preparar nada.
}

export function obtenerPreguntas(nivel) {
  // Devuelve copias para que nadie modifique el banco original.
  return PREGUNTAS.filter((p) => p.nivel === nivel).map((p) => ({ ...p }));
}