# Contratos de funciones

`app` es el objeto compartido que crea main.js:
{ ce, board, pregunta, nivel }

## banco.js (Banco de preguntas)
- iniciar(app)
- obtenerPreguntas(nivel) -> Array<Pregunta>

Pregunta = { id, nivel, tipo, enunciado, solucion, funcionApoyo, pista, explicacion }
tipo = "evaluar" | "simplificar" | "factorizar" | "pendiente"
(enunciado, solucion y funcionApoyo van en LaTeX)

## correccion.js (Corrección)
- corregir(ce, latexEstudiante, latexCorrecta, tipo) -> { ok, valida, mensaje }
  - valida=false: no se descuenta intento

## grafica.js (Gráfica)
- iniciar(app)
- mostrarPregunta(app, pregunta)
- mostrarRespuesta(app, respuesta, resultado)

## progreso.js (Progreso)
- iniciar(app)
- registrar(app, resultado, pregunta)
- obtenerRecord() -> number
- Clave de localStorage: "alcaravan_record"

## Reglas
- Cada módulo exporta SOLO estas funciones.
- Nadie edita el archivo de otro módulo.
- Cambiar un contrato exige avisar al líder y actualizar este archivo.

## Decisiones técnicas (líder)
- Las librerías están en `vendor/` y se usan sin internet. Compute Engine es la versión 0.173.0.
- Importar Compute Engine en `correccion.js` así:
  `import { compile } from "../../vendor/compute-engine/compute-engine.js";`
- Los intentos (máximo 2) los controla `main.js`. Se llama a `registrar(app, resultado, pregunta)` UNA sola vez por pregunta, con `resultado.intentos`.
- La API de la versión 0.173.0 puede diferir de la del documento (0.153): probar `expr.unknowns`, `expr.isValid` y `compile` antes de asumir.
- Probar la app con `python3 -m http.server 8000`, no con doble clic.

## Contrato v2 (semana 2)

### banco.js
- obtenerPreguntas(nivel) devuelve las preguntas en orden aleatorio y sin repetir.

### progreso.js
- registrarPista(app): cuenta una pista usada en la pregunta actual. main.js la llama al pulsar "Pista".
- registrar(app, resultado, pregunta): descuenta 2 puntos por pista usada, sin bajar de 0 los puntos de esa pregunta.
- obtenerResumen(app) -> { puntaje, aciertos, total, record, nuevoRecord }

## Contrato v2 (semana 2)

### banco.js
- obtenerPreguntas(nivel) devuelve las preguntas en orden aleatorio y sin repetir.

### progreso.js
- registrarPista(app): cuenta una pista usada en la pregunta actual. main.js la llama al pulsar "Pista".
- registrar(app, resultado, pregunta): descuenta 2 puntos por pista usada, sin bajar de 0 los puntos de esa pregunta.
- obtenerResumen(app) -> { puntaje, aciertos, total, record, nuevoRecord }
