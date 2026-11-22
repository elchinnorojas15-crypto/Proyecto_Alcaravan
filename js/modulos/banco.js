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
  },
  {
    id: "n3-01",
    nivel: 3,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza completamente: } 2x^3-18x",
    solucion: "2x(x-3)(x+3)",
    funcionApoyo: "2x^3-18x",
    pista: "Primero extrae el factor común 2x; luego aplica diferencia de cuadrados al binomio restante.",
    explicacion: "2x³ - 18x = 2x(x² - 9) = 2x(x - 3)(x + 3)."
  },
  {
    id: "n3-02",
    nivel: 3,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica la expresión racional: } \\frac{2x^2+5x-3}{x+3}",
    solucion: "2x-1",
    funcionApoyo: "\\frac{2x^2+5x-3}{x+3}",
    pista: "Factoriza el trinomio del numerador y cancela el factor común con el denominador.",
    explicacion: "2x² + 5x - 3 = (2x - 1)(x + 3). Al dividir entre (x + 3) queda 2x - 1."
  },
  {
    id: "n3-03",
    nivel: 3,
    tipo: "evaluar",
    enunciado: "\\text{Si } f(x)=2x^3-3x^2+4x-1, \\text{ calcula } f(-2)",
    solucion: "-37",
    funcionApoyo: "2x^3-3x^2+4x-1",
    pista: "Sustituye x por -2 cuidando los signos: (-2)³ = -8 y (-2)² = 4.",
    explicacion: "f(-2) = 2(-8) - 3(4) + 4(-2) - 1 = -16 - 12 - 8 - 1 = -37."
  },
  {
    id: "n3-04",
    nivel: 3,
    tipo: "pendiente",
    enunciado: "\\text{Halla la pendiente de la recta } 6x + 2y - 10 = 0",
    solucion: "-3",
    funcionApoyo: "-3x+5",
    pista: "Despeja la variable y para llevar la ecuación a la forma y = mx + b.",
    explicacion: "2y = -6x + 10, por lo tanto y = -3x + 5. La pendiente es m = -3."
  },
  {
    id: "n3-05",
    nivel: 3,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza completamente: } x^4-16",
    solucion: "(x-2)(x+2)(x^2+4)",
    funcionApoyo: "x^4-16",
    pista: "Aplica diferencia de cuadrados dos veces seguidas, ya que x⁴ - 16 = (x²)² - 4².",
    explicacion: "x⁴ - 16 = (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4)."
  },
  {
    id: "n3-06",
    nivel: 3,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica completamente: } (2x+3)^2 - (2x-1)^2",
    solucion: "16x+8",
    funcionApoyo: "(2x+3)^2-(2x-1)^2",
    pista: "Desarrolla ambos binomios al cuadrado y distribuye el signo negativo al segundo resultado.",
    explicacion: "(4x² + 12x + 9) - (4x² - 4x + 1) = 4x² + 12x + 9 - 4x² + 4x - 1 = 16x + 8."
  },
  {
    id: "n3-07",
    nivel: 3,
    tipo: "evaluar",
    enunciado: "\\text{Si } g(x)=\\frac{x^2-4x+3}{x+1}, \\text{ calcula } g(-3)",
    solucion: "-12",
    funcionApoyo: "\\frac{x^2-4x+3}{x+1}",
    pista: "Evalúa primero el numerador y el denominador por separado sustituyendo x por -3.",
    explicacion: "Numerador: (-3)² - 4(-3) + 3 = 9 + 12 + 3 = 24. Denominador: -3 + 1 = -2. Resultado: 24 / (-2) = -12."
  },
  {
    id: "n3-08",
    nivel: 3,
    tipo: "pendiente",
    enunciado: "\\text{Halla la pendiente de la recta que pasa por } (-3, 10) \\text{ y } (1, -6)",
    solucion: "-4",
    funcionApoyo: "-4x-2",
    pista: "Usa m = (y2 - y1) / (x2 - x1) prestando atención al doble signo negativo en el denominador.",
    explicacion: "m = (-6 - 10) / (1 - (-3)) = -16 / 4 = -4."
  },
  {
    id: "n3-09",
    nivel: 3,
    tipo: "factorizar",
    enunciado: "\\text{Factoriza el trinomio: } 3x^2-11x-4",
    solucion: "(3x+1)(x-4)",
    funcionApoyo: "3x^2-11x-4",
    pista: "Descompón el término central -11x como -12x + x y factoriza por agrupación.",
    explicacion: "3x² - 12x + x - 4 = 3x(x - 4) + 1(x - 4) = (3x + 1)(x - 4)."
  },
  {
    id: "n3-10",
    nivel: 3,
    tipo: "simplificar",
    enunciado: "\\text{Simplifica: } (x-2)(x^2+2x+4) + 8",
    solucion: "x^3",
    funcionApoyo: "(x-2)(x^2+2x+4)+8",
    pista: "Multiplica el binomio por el trinomio (o reconoce la identidad de diferencia de cubos a³ - b³).",
    explicacion: "(x - 2)(x² + 2x + 4) + 8 = (x³ - 8) + 8 = x³."
  }
];

export function iniciar(app) {
  // Por ahora no necesita preparar nada.
}

export function obtenerPreguntas(nivel) {
  // Devuelve copias para que nadie modifique el banco original.
  return PREGUNTAS.filter((p) => p.nivel === nivel).map((p) => ({ ...p }));
}