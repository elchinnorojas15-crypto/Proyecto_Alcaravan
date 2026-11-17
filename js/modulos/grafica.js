import { compile } from "../../vendor/compute-engine/compute-engine.js";

const curvasPorTablero = new WeakMap();

function obtenerTablero(app) {
  if (!app || !app.board) {
    throw new Error("grafica.js requiere un tablero JSXGraph inicializado.");
  }
  return app.board;
}

export function iniciar(app) {
  obtenerTablero(app);
}

export function mostrarPregunta(app, pregunta) {
  const tablero = obtenerTablero(app);
  const curvaAnterior = curvasPorTablero.get(tablero);
  if (curvaAnterior) {
    tablero.removeObject(curvaAnterior);
    curvasPorTablero.delete(tablero);
  }

  if (!pregunta || typeof pregunta.funcionApoyo !== "string") {
    throw new Error("La pregunta debe incluir una función de apoyo en LaTeX.");
  }

  const expresion = app.ce.parse(pregunta.funcionApoyo);
  if (!expresion.isValid) {
    throw new Error(`Función de apoyo no válida: ${pregunta.funcionApoyo}`);
  }
  const funcion = compile(expresion);
  const curva = tablero.create(
    "functiongraph",
    [
      (x) => {
        const valor = funcion.run({ x });
        return typeof valor === "number" && Number.isFinite(valor) ? valor : NaN;
      },
      -10,
      10,
    ],
    { strokeColor: "#2563eb", strokeWidth: 3 },
  );
  curvasPorTablero.set(tablero, curva);
}

export function mostrarRespuesta(app, respuesta, resultado) {
  // La respuesta del estudiante no modifica la curva de apoyo.
}
