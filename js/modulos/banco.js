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
    pista: "Recuerda que (a+b)² = a² + 2ab + b².",
    explicacion: "$(x+1)^2=x^2+2\\cdot x\\cdot1+1^2=x^2+2x+1.$"
  },
  {
    id: "n1-03",
    nivel: 1,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza: } x^2-1",
    solucion: "(x-1)(x+1)",
    funcionApoyo: "x^2-1",
    pista: "Es una diferencia de cuadrados: a² - b² = (a-b)(a+b).",
    explicacion: "$x^2-1=x^2-1^2=(x-1)(x+1).$"
  },
  {
    id: "n1-04",
    nivel: 1,
    tipo: "evaluar",
    enunciado: "\\text{Si } $g(x)=x^2-5$, \\text{ calcula } $g(3)$",
    solucion: "4",
    funcionApoyo: "x^2-5",
    pista: "Sustituye x por 3 y eleva al cuadrado antes de restar.",
    explicacion: "$g(3)=3^2-5=9-5=4.$"
  },
  {
    id: "n1-05",
    nivel: 1,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } 2(x+3)-4",
    solucion: "2x+2",
    funcionApoyo: "2(x+3)-4",
    pista: "Aplica la propiedad distributiva primero.",
    explicacion: "$2(x+3)-4=2x+6-4=2x+2.$"
  },
  {
    id: "n1-06",
    nivel: 1,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza: } x^2-4",
    solucion: "(x-2)(x+2)",
    funcionApoyo: "x^2-4",
    pista: "Diferencia de cuadrados con 4, que es 2².",
    explicacion: "$x^2-4=x^2-2^2=(x-2)(x+2).$"
  },
  {
    id: "n1-07",
    nivel: 1,
    tipo: "pendiente",
    enunciado: "\\text{Halla la pendiente de la recta que pasa por } (1,2) \\text{ y } (3,6)",
    solucion: "2",
    funcionApoyo: "\\frac{y_2-y_1}{x_2-x_1}",
    pista: "Usa la fórmula de pendiente: m = (y2 - y1) / (x2 - x1).",
    explicacion: "$m = \\frac{6-2}{3-1} = \\frac{4}{2} = 2.$"
  },
  {
    id: "n1-08",
    nivel: 1,
    tipo: "evaluar",
    enunciado: "\\text{Si } $h(x)=\\frac{10}{x}$, \\text{ calcula } $h(2)$",
    solucion: "5",
    funcionApoyo: "\\frac{10}{x}",
    pista: "Sustituye x por 2 en el denominador.",
    explicacion: "$h(2)=\\frac{10}{2}=5.$"
  },
  {
    id: "n1-09",
    nivel: 1,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } (x-2)^2",
    solucion: "x^2-4x+4",
    funcionApoyo: "(x-2)^2",
    pista: "Cuadrado de un binomio: (a-b)² = a² - 2ab + b².",
    explicacion: "$(x-2)^2=x^2-2(x)(2)+2^2=x^2-4x+4.$"
  },
  {
    id: "n1-10",
    nivel: 1,
    tipo: "pendiente",
    enunciado: "\\text{Halla la pendiente de la recta } y = 5x - 3",
    solucion: "5",
    funcionApoyo: "y = mx + b",
    pista: "Identifica el número que multiplica a la letra x.",
    explicacion: "En la ecuación de la recta $y = mx + b$, $m$ es la pendiente. Así, $m = 5.$"
  }
];

export function iniciar(app) {
  // Por ahora no necesita preparar nada.
}

export function obtenerPreguntas(nivel) {
  // Filtra por nivel y crea copias de los objetos
  const preguntasNivel = PREGUNTAS.filter((p) => p.nivel === nivel).map((p) => ({ ...p }));
  
  // Mezcla el arreglo de forma aleatoria antes de devolverlo
  return preguntasNivel.sort(() => Math.random() - 0.5);
}