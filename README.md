# Quiz Alcaraván · Álgebra y Funciones

Quiz interactivo de práctica matemática que se corrige solo. El estudiante escribe con MathLive, Compute Engine corrige comparando valores y JSXGraph muestra la gráfica.

Proyecto 4 del curso de Matemática interactiva con Git. Pensado para presentarse al Parque Tecnológico y a Alcaraván de Fragata.

## Equipo

| Integrante | Usuario | Rol y módulo |
|---|---|---|
| Leandro Rojas | `elchinnorojas15-crypto` | Líder: interfaz, integración (`index.html`, `main.js`) y revisión |
| Radimir Alessandro Castillo Giraldo | `Radi-castillo` | Módulo 1: Banco de preguntas |
| Enmanuel Osuna | `osunacode` | Módulo 2: Corrección y pruebas |
| José Chávez | `Dragosus` | Módulo 3: Gráfica |
| Franklin Andrés Yépez López | `Franklin05-x` | Módulo 4: Progreso |
| Daniela Racine | `dcrv2000` | Módulo 5: UX/UI y testing |

## Módulos

| Módulo | Archivo | Qué hace |
|---|---|---|
| 1. Banco de preguntas | `js/modulos/banco.js` | Preguntas por nivel y tipo |
| 2. Corrección | `js/modulos/correccion.js` | Compara la respuesta con Compute Engine |
| 3. Gráfica | `js/modulos/grafica.js` | Dibuja funciones con JSXGraph |
| 4. Progreso | `js/modulos/progreso.js` | Puntaje y récord guardado |
| 5. UX/UI y testing | `css/styles.css`, `docs/pruebas/` | Estilos y plan de pruebas |

## Cómo ejecutarlo

1. `git clone https://github.com/elchinnorojas15-crypto/Proyecto_Alcaravan.git`
2. `cd Proyecto_Alcaravan`
3. `python3 -m http.server 8000`
4. Abrir `http://localhost:8000` (no funciona con doble clic en `index.html`).

Funciona sin internet: las librerías están en `vendor/`.

## Flujo de trabajo

- Ramas: `main` → `develop` → `feature/XX/dev/N` (XX = iniciales, N = número de issue).
- Nadie hace push directo a `main` ni a `develop`: todo entra por Pull Request con 1 aprobación.
- Cada PR lleva el título `#N — descripción` y `Closes #N` en la descripción.
- Cada integrante edita solo los archivos de su módulo.
- Contratos de funciones: [`docs/contratos.md`](docs/contratos.md).

## Commits

Formato `[TAG] Descripción`:

`[ADD]` agregar · `[FIX]` corregir · `[UPD]` actualizar · `[REM]` eliminar · `[MRG]` merge · `[REF]` refactorizar · `[DOC]` documentación

## Tecnologías

HTML, CSS y JavaScript puro · MathLive · Compute Engine 0.173.0 · JSXGraph
