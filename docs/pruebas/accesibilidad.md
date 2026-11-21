# Informe de Pruebas de Accesibilidad — Quiz Alcaraván

- **Responsable:** Daniela Racine (`@dcrv2000`)
- **Issue:** #16
- **Rama evaluada:** `develop` + ajustes de contraste y foco (`#15`)
- **Entorno:** Navegador de escritorio (`http://localhost:8000`), navegación por teclado y DevTools

## Resultados de la lista de verificación

| Criterio de rúbrica | Estado | Evidencia / Observación |
|---|---|---|
| **Foco visible en todos los controles** | Cumple | Todos los botones (`.btn`), el enlace de marca (`.marca`) y el campo matemático (`math-field`) muestran contorno de foco claro (`outline` / `box-shadow` de 3 px) al navegar con `Tab` y `Shift + Tab` en Inicio, Ejercicio y Resultados. |
| **`Enter` comprueba la respuesta** | Cumple | Al escribir una respuesta en `math-field` y presionar `Enter`, la aplicación ejecuta la validación de inmediato sin requerir uso del ratón. |
| **Contraste AA (≥ 4.5:1)** | Cumple | La paleta base (`#08325a`, `#05203c`, `#025cb4` sobre `#fcfbf7` / `#fff`) supera 4.5:1. Con `--accent-dark: #c94300` (`#15`), el estado hover del botón principal alcanza 4.91:1 con texto blanco. |
| **Correcto e incorrecto con color, ícono y texto** | Cumple | El contenedor `.feedback` combina color semántico (verde con `✓` en acierto y rojo con `×` en error) más mensaje textual explícito.|

## Defectos detectados

- Ningún defecto bloqueante pendiente tras los ajustes de contraste y foco del issue #15.