# Informe Final de Pruebas Integrales — Quiz Alcaraván

- **Responsable:** Daniela Racine (`@dcrv2000`)
- **Issue:** #17
- **Rama evaluada:** `develop` (integración completa con ajustes UX/UI `#15`)
- **Entorno:** Servidor local (`http://localhost:8000`), Chrome DevTools (Console, Responsive 360 px y modo Offline)

## Resultados de la verificación de extremo a extremo

| Prueba | Estado | Evidencia / Observación |
|---|---|---|
| **Niveles disponibles** | Cumple (N1 y N2) | Se ejecutó el flujo completo (*Inicio → Ejercicio → Resultados*) en **Nivel 1 (Básico)** y **Nivel 2 (Intermedio)**, validando respuestas, gráfica JSXGraph y guardado de récord en `localStorage` (`75 pts`). En **Nivel 3 (Avanzado)**, el banco aún no tiene preguntas cargadas y la app muestra el aviso controlado *"Este nivel aún no tiene preguntas. Prueba con otro nivel."* sin bloquearse. |
| **360 px y laptop** | Cumple | En viewport móvil (`360 px`) los elementos se apilan en columna única sin desbordamiento horizontal. En pantalla de laptop (`≥ 1024 px`) las tarjetas de nivel, el área de ejercicio y la gráfica lateral se visualizan alineadas y con foco visible. |
| **Sin internet (Offline)** | Cumple | Una vez cargada la aplicación desde el servidor local, al activar el modo *Offline* en DevTools y resolver ejercicios, todas las librerías locales (`MathLive`, `Compute Engine`, `JSXGraph` en `vendor/`) operan sin peticiones externas. *(Nota: al recargar con `F5` en modo Offline de DevTools, Chrome bloquea `localhost` por ausencia de Service Worker).* |
| **Consola limpia** | Cumple | Cero errores de ejecución en los módulos de la aplicación durante todo el recorrido (únicamente se observa el `404` esperado por ausencia de `favicon.ico`). |

## Conclusión

- Flujo integral verificado sin errores en la lógica de interfaz ni en consola.