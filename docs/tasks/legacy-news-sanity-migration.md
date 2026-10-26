# Noticias de inversión en Sanity

Las noticias se publican únicamente en japonés por defecto. Solo se activa otra
lengua cuando el usuario lo pide expresamente. Los campos españoles son opcionales
y `spanishEnabled` debe activarse explícitamente para mostrarlos.

## Archivo migrado

`src/lib/legacy-news.json` conserva la copia comprobada de las 39 noticias de
2025 y 2026, incluidas las que no estaban en el índice local. Contiene todos los
textos, enlaces, 52 referencias a imágenes y dos tablas. Las imágenes conservan
sus direcciones originales en Cloudinary o en `public/`.

`scripts/prepare-legacy-news.js` reconstruye esa copia desde la revisión anterior
a la migración (`34c1d62`). Comprueba que no se pierda ni se reordene ningún
carácter visible, enlace o imagen durante la conversión a Portable Text.

## Importación

```bash
node scripts/migrate-legacy-news.mjs           # Revisar sin escribir
node scripts/migrate-legacy-news.mjs --pilot   # Importar y comprobar dos artículos: tabla y galería
node scripts/migrate-legacy-news.mjs --publish # Importar y comprobar los 39
node scripts/migrate-legacy-news.mjs --verify  # Comparar el contenido guardado con la copia local
node scripts/verify-news-migration.mjs        # Revisar las 39 páginas públicas y sus listados
```

La escritura usa la configuración existente de `.env` y la sesión del CLI de
Sanity o un token de escritura del entorno. No se guardan credenciales en estos
archivos. Los IDs son estables y `createIfNotExists` evita reemplazar posteriores
ediciones realizadas desde Studio. Si existe una diferencia, la comprobación
falla para que se revise antes de sobrescribir contenido editorial.

La importación también desactiva la presentación en español de las cuatro
noticias de octubre y les asigna su fecha de publicación original. Los campos
españoles ya existentes se conservan en el CMS.

## Rutas y fechas

- `legacyPath` conserva la URL anterior, que ahora consulta Sanity cada 60 segundos.
- La copia local se conserva para respaldo y auditoría. Tras completar la carga, las páginas anteriores consultan únicamente Sanity; retirar una noticia del CMS también retira su página pública tras la revalidación.
- Las URLs alternativas `/news/<año>/<slug>` redirigen a la URL anterior para evitar duplicados.
- El archivo `/news` y sus páginas por año reúnen todas las noticias.
- El año del archivo corresponde a la publicación, aunque la URL anterior use otra carpeta anual.
- `publicationDate` conserva el día editorial. Cuando falta, la fecha se interpreta en `America/Lima`.
- La portada de inversión obtiene sus seis noticias más recientes de Sanity.

## Comprobaciones

Ejecutar `pnpm test -- --runInBand`, `pnpm lint` y `pnpm build` antes de publicar.
Comprobar las dos noticias piloto en sus URLs anteriores y en el archivo por año
antes de importar las restantes. El listado y las noticias usan ISR de 60 segundos.
