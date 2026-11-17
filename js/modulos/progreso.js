// ==========================================
<<<<<<< HEAD
// Módulo 4: Progreso y Récord (Contrato v3)
// ==========================================
// Gestiona el puntaje, penalización por pistas, historial detallado por pregunta,
// preguntas falladas y persistencia del récord en localStorage.
=======
// Módulo 4: Progreso y Récord (Contrato v2)
// ==========================================
// main.js llama a registrar() una vez por pregunta, 
// registrarPista() cuando se usa una pista, y obtenerResumen() al finalizar.
>>>>>>> origin/develop

const CLAVE_RECORD = "alcaravan_record"; // Clave fija exigida para localStorage
const PUNTOS_PRIMER_INTENTO = 10;        // Puntos base si acierta al 1er intento
const PUNTOS_SEGUNDO_INTENTO = 5;        // Puntos base si acierta al 2do intento
const PENALIZACION_PISTA = 2;            // Puntos que resta cada pista usada

<<<<<<< HEAD
let puntaje = 0;             // Acumulador del puntaje de la partida actual
let aciertos = 0;            // Contador de respuestas correctas
let pistasActuales = 0;      // Conteo de pistas usadas en la pregunta en curso
let esNuevoRecord = false;   // Bandera para indicar si se rompió el récord
let historialPreguntas = []; // Historial detallado por pregunta
=======
let puntaje = 0;      // Acumulador del puntaje de la partida actual
let aciertos = 0;     // Contador de respuestas correctas
let pistasActuales = 0; // Conteo de pistas usadas en la pregunta en curso
let esNuevoRecord = false; // Bandera para indicar si se rompió el récord en la partida
>>>>>>> origin/develop

/**
 * Inicializa o reinicia el módulo al comenzar una partida o nivel.
 * @param {Object} app - Objeto compartido de la aplicación.
 */
export function iniciar(app) {
    puntaje = 0;
    aciertos = 0;
    pistasActuales = 0;
    esNuevoRecord = false;
<<<<<<< HEAD
    historialPreguntas = [];
=======
>>>>>>> origin/develop
    app.puntaje = 0;
    app.aciertos = 0;
}

/**
 * Registra que el usuario ha solicitado una pista para la pregunta actual.
 * @param {Object} app - Objeto compartido de la aplicación.
 */
export function registrarPista(app) {
    pistasActuales++;
}

/**
 * Obtiene el récord guardado en el navegador de forma persistente.
 * Si no existe o hay restricciones (ej. modo incógnito), devuelve 0.
 * @returns {number} Récord actual.
 */
export function obtenerRecord() {
    try {
        const valor = Number(localStorage.getItem(CLAVE_RECORD));
        return Number.isFinite(valor) ? valor : 0;
    } catch (error) {
        return 0; // Seguridad ante fallos de almacenamiento
    }
}

/**
 * Guarda un nuevo récord en el navegador de forma segura.
 * @param {number} valor - El puntaje récord a almacenar.
 */
function guardarRecord(valor) {
    try {
        localStorage.setItem(CLAVE_RECORD, String(valor));
    } catch (error) {
        console.warn("No se pudo guardar el récord:", error);
    }
}

/**
<<<<<<< HEAD
 * Registra el resultado de la pregunta actual, calcula puntos con penalización por pistas,
 * almacena el historial y evalúa si se rompió el récord.
 * @param {Object} app - Objeto compartido.
=======
 * Registra el resultado de la pregunta actual, actualiza el puntaje 
 * aplicando penalización por pistas y evalúa si se rompió el récord.
 * @param {Object} app - Objeto compartido (usa app.indice para detectar juegos nuevos).
>>>>>>> origin/develop
 * @param {Object} resultado - Contiene { ok, valida, mensaje, intentos }.
 * @param {Object} pregunta - Datos de la pregunta evaluada.
 */
export function registrar(app, resultado, pregunta) {
<<<<<<< HEAD
=======
    // Si estamos en la primera pregunta (indice 0), reiniciamos contadores de la partida.
>>>>>>> origin/develop
    if (app.indice === 0) {
        puntaje = 0;
        aciertos = 0;
        esNuevoRecord = false;
<<<<<<< HEAD
        historialPreguntas = [];
    }

    let puntosPregunta = 0;
    const intentosUsados = resultado && resultado.intentos ? resultado.intentos : 1;
    const fueExitosa = resultado && resultado.ok;

    if (fueExitosa) {
        aciertos++;
        const puntosBase = (intentosUsados <= 1) ? PUNTOS_PRIMER_INTENTO : PUNTOS_SEGUNDO_INTENTO;
        const descuentoPistas = pistasActuales * PENALIZACION_PISTA;
        puntosPregunta = Math.max(0, puntosBase - descuentoPistas);
        puntaje += puntosPregunta;
    }

    // Almacenamos el detalle de esta pregunta en el historial
    historialPreguntas.push({
        pregunta: pregunta,
        intentos: intentosUsados,
        pistas: pistasActuales,
        puntos: puntosPregunta,
        ok: fueExitosa
    });

    // Reiniciamos el contador de pistas para la siguiente pregunta
    pistasActuales = 0;

    // Actualizamos las propiedades globales de la app
=======
    }

    // Si la respuesta fue correcta (ok: true)
    if (resultado && resultado.ok) {
        aciertos++;
        
        // Seleccionamos puntos base según los intentos
        const puntosBase = (resultado.intentos <= 1) ? PUNTOS_PRIMER_INTENTO : PUNTOS_SEGUNDO_INTENTO;
        
        // Calculamos la penalización por pistas (no puede restar más de los puntos ganados ni bajar de 0)
        const descuentoPistas = pistasActuales * PENALIZACION_PISTA;
        const puntosPregunta = Math.max(0, puntosBase - descuentoPistas);
        
        puntaje += puntosPregunta;
    }

    // Reiniciamos el contador de pistas para la siguiente pregunta
    pistasActuales = 0;

    // Actualizamos las propiedades globales de la app para la interfaz
>>>>>>> origin/develop
    app.puntaje = puntaje;
    app.aciertos = aciertos;

    // Evaluamos si se rompió el récord
    const recordActual = obtenerRecord();
    if (puntaje > recordActual) {
        guardarRecord(puntaje);
        esNuevoRecord = true;
    }
}

/**
<<<<<<< HEAD
 * Devuelve un resumen detallado del desempeño al terminar la partida,
 * incluyendo historial por pregunta, preguntas falladas y estado del récord.
 * @param {Object} app - Objeto compartido de la aplicación.
 * @returns {Object} { puntaje, aciertos, total, record, nuevoRecord, historial, falladas }
 */
export function obtenerResumen(app) {
    const total = (app.preguntas && Array.isArray(app.preguntas)) ? app.preguntas.length : historialPreguntas.length;
    const falladas = historialPreguntas.filter(h => !h.ok).map(h => h.pregunta);

=======
 * Devuelve un resumen detallado del desempeño al terminar la partida.
 * @param {Object} app - Objeto compartido de la aplicación.
 * @returns {Object} { puntaje, aciertos, total, record, nuevoRecord }
 */
export function obtenerResumen(app) {
    const total = (app.preguntas && Array.isArray(app.preguntas)) ? app.preguntas.length : 10;
>>>>>>> origin/develop
    return {
        puntaje: puntaje,
        aciertos: aciertos,
        total: total,
        record: obtenerRecord(),
<<<<<<< HEAD
        nuevoRecord: esNuevoRecord,
        historial: [...historialPreguntas],
        falladas: falladas
=======
        nuevoRecord: esNuevoRecord
>>>>>>> origin/develop
    };
}