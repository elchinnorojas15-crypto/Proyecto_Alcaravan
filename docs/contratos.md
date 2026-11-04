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
