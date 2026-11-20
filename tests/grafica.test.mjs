import assert from "node:assert/strict";
import test from "node:test";
import { ComputeEngine } from "../vendor/compute-engine/compute-engine.js";
import { obtenerPreguntas } from "../js/modulos/banco.js";
import * as grafica from "../js/modulos/grafica.js";

function crearEntorno() {
  const elementos = {
    "leyenda-apoyo": {
      value: "",
      setValue(value) {
        this.value = value;
      },
    },
    "leyenda-respuesta": {
      value: "",
      setValue(value) {
        this.value = value;
      },
    },
    "leyenda-respuesta-fila": { hidden: true },
  };
  const anteriores = globalThis.document;
  globalThis.document = {
    getElementById(id) {
      return elementos[id] || null;
    },
  };

  const tablero = {
    objetos: [],
    create(tipo, parametros, atributos) {
      const objeto = { tipo, parametros, atributos };
      this.objetos.push(objeto);
      return objeto;
    },
    removeObject(objeto) {
      this.objetos = this.objetos.filter((actual) => actual !== objeto);
    },
  };

  return {
    app: { board: tablero, ce: new ComputeEngine() },
    elementos,
    tablero,
    restaurarDocumento() {
      if (anteriores === undefined) delete globalThis.document;
      else globalThis.document = anteriores;
    },
  };
}

test("dibuja las funciones de las 20 preguntas disponibles sin fallos de evaluación", () => {
  const entorno = crearEntorno();
  try {
    const preguntas = [1, 2].flatMap(obtenerPreguntas);
    assert.equal(preguntas.length, 20);

    for (const pregunta of preguntas) {
      grafica.mostrarPregunta(entorno.app, pregunta);
      const curva = entorno.tablero.objetos.at(-1);
      assert.equal(curva.tipo, "functiongraph", pregunta.id);

      for (const x of [-10, -1, 0, 1, 10]) {
        assert.doesNotThrow(() => curva.parametros[0](x), `${pregunta.id} en x=${x}`);
      }
    }
  } finally {
    entorno.restaurarDocumento();
  }
});

test("grafica las rectas de las preguntas de pendiente", () => {
  const entorno = crearEntorno();
  try {
    const pendientes = [1, 2].flatMap(obtenerPreguntas).filter((pregunta) => pregunta.tipo === "pendiente");
    const valoresEsperados = {
      "n1-07": [0, 2],
      "n1-10": [-3, 2],
    };

    for (const pregunta of pendientes) {
      grafica.mostrarPregunta(entorno.app, pregunta);
      const curva = entorno.tablero.objetos.at(-1).parametros[0];

      assert.deepEqual([curva(0), curva(1)], valoresEsperados[pregunta.id]);
    }
  } finally {
    entorno.restaurarDocumento();
  }
});

test("omite valores fuera del dominio de raíces y fracciones", () => {
  const entorno = crearEntorno();
  try {
    grafica.mostrarPregunta(entorno.app, {
      tipo: "evaluar",
      funcionApoyo: String.raw`\sqrt{x}`,
    });
    const curvaRaiz = entorno.tablero.objetos.at(-1).parametros[0];
    assert.ok(Number.isNaN(curvaRaiz(-1)));
    assert.equal(curvaRaiz(4), 2);

    grafica.mostrarPregunta(entorno.app, {
      tipo: "evaluar",
      funcionApoyo: String.raw`\frac{1}{x}`,
    });
    const curvaFraccion = entorno.tablero.objetos.at(-1).parametros[0];
    assert.ok(Number.isNaN(curvaFraccion(0)));
    assert.equal(curvaFraccion(1), 1);
  } finally {
    entorno.restaurarDocumento();
  }
});

test("actualiza y limpia la leyenda junto con las curvas", () => {
  const entorno = crearEntorno();
  try {
    const pregunta = obtenerPreguntas(1)[0];
    grafica.mostrarPregunta(entorno.app, pregunta);
    assert.equal(entorno.elementos["leyenda-apoyo"].value, pregunta.funcionApoyo);
    assert.equal(entorno.elementos["leyenda-respuesta-fila"].hidden, true);

    grafica.mostrarRespuesta(entorno.app, "not a function", { valida: false });
    assert.equal(entorno.tablero.objetos.length, 1);
    assert.equal(entorno.elementos["leyenda-respuesta-fila"].hidden, true);

    grafica.mostrarRespuesta(entorno.app, "x", { valida: true });
    assert.equal(entorno.elementos["leyenda-respuesta"].value, "x");
    assert.equal(entorno.elementos["leyenda-respuesta-fila"].hidden, false);

    const respuestaAnterior = entorno.tablero.objetos[1];
    const preguntaSiguiente = obtenerPreguntas(1)[1];
    grafica.mostrarPregunta(entorno.app, preguntaSiguiente);
    assert.equal(entorno.tablero.objetos.length, 1);
    assert.ok(!entorno.tablero.objetos.includes(respuestaAnterior));
    assert.equal(entorno.elementos["leyenda-respuesta-fila"].hidden, true);
    assert.equal(entorno.elementos["leyenda-respuesta"].value, "");
    assert.equal(entorno.elementos["leyenda-apoyo"].value, preguntaSiguiente.funcionApoyo);
  } finally {
    entorno.restaurarDocumento();
  }
});
