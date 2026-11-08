// Módulo 4: Progreso y Récord

// main.js llama a registrar() una vez por pregunta cuando el usuario responde o agota sus intentos.

const CLAVE_RECORD = "alcaravan_record"; // Clave fija exigida para localStorage
const PUNTOS_PRIMER_INTENTO = 10;        // Puntos si acierta al 1er intento
const PUNTOS_SEGUNDO_INTENTO = 5;        // Puntos si acierta al 2do intento

let puntaje = 0; // Acumulador del puntaje de la partida actual

/**
 * Inicializa o reinicia el módulo al comenzar una partida o nivel.
 * @param {Object} app - Objeto compartido de la aplicación.
 */
export function iniciar(app) {
    puntaje = 0;
    app.puntaje = 0;
}

/**
 * Obtiene el récord guardado en el navegador de forma persistente.
 * Si no existe o hay restricciones (ej. modo incógnito), devuelve 0
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
 * Registra el resultado de la pregunta actual, actualiza el puntaje 
 * y evalúa si se rompió el récord.
 * @param {Object} app - Objeto compartido (usa app.indice para detectar juegos nuevos).
 * @param {Object} resultado - Contiene { ok, valida, mensaje, intentos }.
 * @param {Object} pregunta - Datos de la pregunta evaluada.
 */
export function registrar(app, resultado, pregunta) {
    // Si estamos en la primera pregunta (indice 0), reiniciamos el puntaje de la partida.
    if (app.indice === 0) {
        puntaje = 0;
    }

    // Si la respuesta fue correcta (ok: true), sumamos puntos según los intentos usados
    if (resultado && resultado.ok) {
        if (resultado.intentos <= 1) {
            puntaje += PUNTOS_PRIMER_INTENTO;
        } else {
            puntaje += PUNTOS_SEGUNDO_INTENTO;
        }
    }

    // Actualizamos la propiedad global de la app para que la interfaz la muestre
    app.puntaje = puntaje;

    // Si el puntaje actual supera el récord almacenado, lo actualizamos
    if (puntaje > obtenerRecord()) {
        guardarRecord(puntaje);
    }
}