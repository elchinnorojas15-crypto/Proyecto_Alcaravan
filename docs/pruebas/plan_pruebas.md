# Plan de Pruebas por Módulo

## Módulo 1: Banco de Preguntas
| Caso de Prueba | Resultado Esperado | Resultado Obtenido |
|---|---|---|
| Cargar preguntas de Nivel 1 | Se muestran 3 preguntas y el LaTeX se renderiza correctamente. | Éxito |
| Verificación de campos | Cada pregunta tiene id, nivel, tipo, enunciado, solucion, funcionApoyo, pista y explicacion. | Éxito |

## Módulo 2: Corrección
| Caso de Prueba | Resultado Esperado | Resultado Obtenido |
|---|---|---|
| Simplificar: `x^2+2x+1` | El sistema acepta la expresión como equivalente a `(x+1)^2`. | Éxito |
| Factorizar: `x^2-1` | El sistema verifica que sea un producto y valida los valores numéricos. | Éxito |
| Respuesta equivalente | El sistema evalúa el valor matemático y lo marca correcto aunque la respuesta difiera visualmente de la pista. | Éxito |

## Módulo 3: Gráfica
| Caso de Prueba | Resultado Esperado | Resultado Obtenido |
|---|---|---|
| Cargar pregunta con `funcionApoyo` | JSXGraph dibuja la curva correspondiente en el tablero. | Pendiente |
| Cambiar de pregunta | La curva anterior se borra y se dibuja solo la nueva. | Pendiente |

## Módulo 4: Progreso
| Caso de Prueba | Resultado Esperado | Resultado Obtenido |
|---|---|---|
| Acierto al primer intento | Suma 10 puntos al puntaje actual. | Éxito |
| Acierto al segundo intento | Suma 5 puntos al puntaje actual. | Éxito |
| Récord al recargar la página | El número mayor guardado en `localStorage` no se borra ni reinicia tras presionar F5. | Éxito |