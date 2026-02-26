# Tarea Repetible: Nueva Noticia en `investing-in-peru/2026`

Usar este checklist cada vez que se agregue una noticia nueva en `src/pages/investing-in-peru/2026/`.

## Pasos
1. Crear página nueva en `src/pages/investing-in-peru/2026/<slug>.tsx` copiando el diseño base de una noticia existente.
2. Definir `slug` en inglés, largo pero descriptivo (kebab-case).
3. Configurar SEO en `Layout`:
   - `title` específico
   - `description` específica (no usar la genérica del sitio)
4. Usar `Banner` con `alt` descriptivo (no genérico tipo "Investment guide 2022").
5. Agregar la noticia en `src/lib/investing-news-index-2026.ts`:
   - `slug`
   - `title`
   - `date` (`YYYY-MM-DD`)
   - `category`
   - `excerpt`
6. Verificar orden cronológico en el arreglo (más reciente primero).
7. Revisar la URL local:
   - `http://localhost:3003/investing-in-peru/2026/<slug>`
8. Validar lint:
   - `pnpm exec eslint src/pages/investing-in-peru/2026/*.tsx src/lib/investing-news-index-2026.ts`

## Limpieza opcional recomendada
- Quitar imports no usados (`Link`, etc.).
- Homogeneizar encabezados repetidos si el usuario pide ocultarlos en una página específica.

## Convención de commit sugerida
- `feat: add 2026 investing news page for <tema>`
- `chore: add repeatable checklist for 2026 investing news pages`
