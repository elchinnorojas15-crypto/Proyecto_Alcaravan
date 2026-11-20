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

function crearCurva(tablero, expresion, atributos) {
  const funcion = compile(expresion);
  return tablero.create(
    "functiongraph",
    [
      (x) => {
        const valor = funcion.run({ x });
        return typeof valor === "number" && Number.isFinite(valor) ? valor : NaN;
      },
      -10,
      10,
    ],
    atributos,
  );
}

export function mostrarPregunta(app, pregunta) {
  const tablero = obtenerTablero(app);
  const curvasAnteriores = curvasPorTablero.get(tablero);
  if (curvasAnteriores) {
    if (curvasAnteriores.apoyo) tablero.removeObject(curvasAnteriores.apoyo);
    if (curvasAnteriores.respuesta) tablero.removeObject(curvasAnteriores.respuesta);
    curvasPorTablero.delete(tablero);
  }

  if (!pregunta || typeof pregunta.funcionApoyo !== "string") {
    throw new Error("La pregunta debe incluir una función de apoyo en LaTeX.");
  }

  const expresion = app.ce.parse(pregunta.funcionApoyo);
  if (!expresion.isValid) {
    throw new Error(`Función de apoyo no válida: ${pregunta.funcionApoyo}`);
  }
  const apoyo = crearCurva(
    tablero,
    expresion,
    { strokeColor: "#2563eb", strokeWidth: 3 },
  );
  curvasPorTablero.set(tablero, { apoyo, respuesta: null });
}

export function mostrarRespuesta(app, respuesta, resultado) {
  if (!resultado || resultado.valida !== true || typeof respuesta !== "string") return;

  const tablero = obtenerTablero(app);
  let expresion;
  try {
    expresion = app.ce.parse(respuesta);
  } catch {
    return;
  }
  if (!expresion.isValid) return;

  const curvas = curvasPorTablero.get(tablero) || { apoyo: null, respuesta: null };
  if (curvas.respuesta) tablero.removeObject(curvas.respuesta);

  curvas.respuesta = crearCurva(
    tablero,
    expresion,
    { strokeColor: "#d97706", strokeWidth: 3, dash: 2 },
  );
  curvasPorTablero.set(tablero, curvas);
}
