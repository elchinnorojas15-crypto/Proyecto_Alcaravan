// js/main.js — lo escribe el líder. Conecta los módulos según docs/contratos.md
import { ComputeEngine } from "../vendor/compute-engine/compute-engine.js";
import * as banco from "./modulos/banco.js";
import * as correccion from "./modulos/correccion.js";
import * as grafica from "./modulos/grafica.js";
import * as progreso from "./modulos/progreso.js";

const MAX_INTENTOS = 2;
const $ = (id) => document.getElementById(id);

// Objeto compartido por todos los módulos
const app = {
  ce: new ComputeEngine(),
  board: null,       // se crea al entrar al ejercicio (el div debe estar visible)
  nivel: 1,
  preguntas: [],
  indice: 0,
  pregunta: null,
  intentos: 0,
  aciertos: 0,
  falladas: [],
};

let graficaIniciada = false;

function mostrarPantalla(nombre) {
  for (const p of ["inicio", "ejercicio", "resultados"]) {
    $(`pantalla-${p}`).hidden = p !== nombre;
  }
}

function feedback(tipo, texto) {
  const iconos = { ok: "✔", error: "✖", aviso: "⚠" };
  const el = $("feedback");
  el.className = `feedback ${tipo}`;
  el.textContent = `${iconos[tipo]} ${texto}`;
  el.hidden = false;
}

function empezar(nivel) {
  app.nivel = nivel;
  $("aviso-nivel").hidden = true;
  app.preguntas = banco.obtenerPreguntas(nivel);
  app.indice = 0;
  app.aciertos = 0;
  app.falladas = [];
  app.puntaje = 0;
  if (!app.preguntas.length) {
    $("aviso-nivel").textContent = "⚠ Este nivel aún no tiene preguntas. Prueba con otro nivel.";
    $("aviso-nivel").hidden = false;
    return;
  }
  mostrarPantalla("ejercicio");
  if (!graficaIniciada) {
    app.board = JXG.JSXGraph.initBoard("box", {
      boundingbox: [-10, 10, 10, -10], axis: true, showCopyright: false, showNavigation: false,
    });
    grafica.iniciar(app);
    graficaIniciada = true;
  }
  cargarPregunta();
}

function actualizarEstado(fin = false) {
  $("puntaje").textContent = app.puntaje ?? 0;
  $("intento").textContent = fin
    ? `${app.intentos} de ${MAX_INTENTOS} intentos usados`
    : `Intento ${Math.min(app.intentos + 1, MAX_INTENTOS)} de ${MAX_INTENTOS}`;
}

function cargarPregunta() {
  const total = app.preguntas.length;
  if (app.indice === 0) app.historial = [];
  app.pregunta = app.preguntas[app.indice];
  app.vista = app.indice;
  app.intentos = 0;

  $("contador").textContent = `Pregunta ${app.indice + 1} de ${total}`;
  const pct = (app.indice / total) * 100;
  $("barra-progreso").style.width = `${pct}%`;
  document.querySelector(".progreso").setAttribute("aria-valuenow", Math.round(pct));

  $("tipo").textContent = app.pregunta.tipo;
  $("enunciado").setValue(app.pregunta.enunciado);
  $("respuesta").setValue("");
  $("respuesta").disabled = false;
  $("comprobar").disabled = true;
  $("pista").disabled = false;
  $("pista-texto").hidden = true;
  $("feedback").hidden = true;
  $("solucion").hidden = true;
  $("anterior").hidden = true;
  $("siguiente").hidden = true;

  actualizarEstado();
  grafica.mostrarPregunta(app, app.pregunta);
  $("respuesta").focus();
}

function terminarPregunta(resultado, latex) {
  progreso.registrar(app, { ...resultado, intentos: app.intentos }, app.pregunta);
  app.historial[app.indice] = { respuesta: latex, ok: resultado.ok, intentos: app.intentos, resultado };
  actualizarEstado(true);
  $("comprobar").disabled = true;
  $("respuesta").disabled = true;
  $("siguiente").textContent = app.indice === app.preguntas.length - 1 ? "Ver resultados →" : "Siguiente →";
  $("anterior").hidden = app.indice === 0;
  $("siguiente").hidden = false;
  $("siguiente").focus();
}

function comprobar() {
  if ($("comprobar").disabled) return;
  const latex = $("respuesta").value;
  const r = correccion.corregir(app.ce, latex, app.pregunta.solucion, app.pregunta.tipo);

  // Respuesta no válida: se avisa y NO cuenta como intento
  if (!r.valida) { feedback("aviso", r.mensaje); return; }

  app.intentos++;
  grafica.mostrarRespuesta(app, latex, r);

  if (r.ok) {
    app.aciertos++;
    feedback("ok", r.mensaje);
    terminarPregunta(r, latex);
  } else if (app.intentos >= MAX_INTENTOS) {
    app.falladas.push(app.pregunta);
    feedback("error", "Sin intentos. Esta es la solución:");
    $("solucion-latex").setValue(app.pregunta.solucion);
    $("explicacion").textContent = app.pregunta.explicacion || "";
    $("solucion").hidden = false;
    terminarPregunta(r, latex);
  } else {
    feedback("error", `${r.mensaje} Te queda ${MAX_INTENTOS - app.intentos} intento.`);
    actualizarEstado();
  }
}

// Modo repaso: muestra una pregunta ya contestada sin puntuar ni registrar nada
function mostrarRevision(i) {
  const total = app.preguntas.length;
  const p = app.preguntas[i];
  const reg = app.historial[i];
  app.vista = i;

  $("contador").textContent = `Pregunta ${i + 1} de ${total}`;
  const pct = (i / total) * 100;
  $("barra-progreso").style.width = `${pct}%`;
  document.querySelector(".progreso").setAttribute("aria-valuenow", Math.round(pct));

  $("tipo").textContent = p.tipo;
  $("enunciado").setValue(p.enunciado);
  $("respuesta").setValue(reg.respuesta);
  $("respuesta").disabled = true;
  $("comprobar").disabled = true;
  $("pista").disabled = true;
  $("pista-texto").hidden = true;
  $("intento").textContent = `${reg.intentos} de ${MAX_INTENTOS} intentos usados`;

  if (reg.ok) {
    feedback("ok", "¡Correcto!");
    $("solucion").hidden = true;
  } else {
    feedback("error", "No acertaste esta pregunta. Esta es la solución:");
    $("solucion-latex").setValue(p.solucion);
    $("explicacion").textContent = p.explicacion || "";
    $("solucion").hidden = false;
  }

  $("anterior").hidden = i === 0;
  $("siguiente").textContent = i === total - 1 ? "Ver resultados →" : "Siguiente →";
  $("siguiente").hidden = false;

  grafica.mostrarPregunta(app, p);
  grafica.mostrarRespuesta(app, reg.respuesta, reg.resultado);
}

function anterior() {
  if (app.vista <= 0) return;
  mostrarRevision(app.vista - 1);
  ($("anterior").hidden ? $("siguiente") : $("anterior")).focus();
}

function siguiente() {
  // Repasando preguntas ya contestadas: avanza sin puntuar
  if (app.vista < app.indice) {
    mostrarRevision(app.vista + 1);
    $("siguiente").focus();
    return;
  }
  app.indice++;
  if (app.indice >= app.preguntas.length) return mostrarResultados();
  cargarPregunta();
}

function mostrarResultados() {
  $("res-aciertos").textContent = app.aciertos;
  $("res-total").textContent = app.preguntas.length;
  $("res-record").textContent = progreso.obtenerRecord();
  const lista = $("lista-falladas");
  lista.innerHTML = "";
  for (const p of app.falladas) {
    const li = document.createElement("li");
    const mf = document.createElement("math-field");
    mf.setAttribute("read-only", "");
    li.appendChild(mf);
    mf.setValue(p.enunciado);
    lista.appendChild(li);
  }
  mostrarPantalla("resultados");
}

function volverInicio() {
  $("record-inicio").textContent = progreso.obtenerRecord();
  mostrarPantalla("inicio");
}

// --- Arranque y eventos ---
if (window.MathfieldElement) MathfieldElement.soundsDirectory = null; // sin sonidos (evita 404 offline)
banco.iniciar(app);
progreso.iniciar(app);
volverInicio();

document.querySelectorAll(".nivel").forEach((b) =>
  b.addEventListener("click", () => empezar(Number(b.dataset.nivel))));
$("comprobar").addEventListener("click", comprobar);
$("anterior").addEventListener("click", anterior);
$("siguiente").addEventListener("click", siguiente);
$("reiniciar").addEventListener("click", volverInicio);
$("marca").addEventListener("click", volverInicio);
$("pista").addEventListener("click", () => {
  $("pista-texto").textContent = `💡 ${app.pregunta.pista || "Sin pista para esta pregunta."}`;
  $("pista-texto").hidden = false;
});
$("respuesta").addEventListener("input", () => {
  $("comprobar").disabled = $("respuesta").value.trim() === "";
});
$("respuesta").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); comprobar(); }
});
