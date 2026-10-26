# Noticias de octubre de 2026 en Sanity

Las cuatro noticias del boletín se publican como documentos `newsArticle` en el
proyecto y dataset configurados en `.env`. No requieren páginas TSX individuales.

- `scripts/news-october-2026.json`: texto japonés proporcionado, fuentes, fechas y slugs.
- `scripts/news-october-2026-es.json`: traducción española del japonés para la plantilla bilingüe existente. Las declaraciones de la cuarta noticia se expresan en estilo indirecto para no presentarlas como citas originales en español.
- `scripts/import-news-october-2026.mjs`: validación, carga de imágenes, creación y comprobación del contenido publicado.

Las imágenes se leen de una carpeta indicada por argumento, con los nombres
`1.png`, `2.png`, `3.png` y `4.png`, en el mismo orden que las noticias.
Se alojan en Sanity y se usan como portada y como imagen de la galería.
Las horas de publicación se interpretan en la zona horaria del Perú (UTC−05:00).

## Validar sin escribir en Sanity

```bash
node scripts/import-news-october-2026.mjs --images-dir "/ruta/a/las/imagenes"
```

## Publicar

Se utiliza `SANITY_API_WRITE_TOKEN`, `SANITY_AUTH_TOKEN` o la sesión existente
del CLI de Sanity. No se guardan credenciales en los archivos del boletín.

```bash
node scripts/import-news-october-2026.mjs --publish --images-dir "/ruta/a/las/imagenes"
```

La creación usa IDs deterministas y `createIfNotExists`: una segunda ejecución
conserva los documentos existentes y las ediciones realizadas desde Studio.
El script comprueba el contenido completo después de la carga y avisa si difiere
de los archivos locales; no sobrescribe esas diferencias.

## Comprobar contenido publicado

```bash
node scripts/import-news-october-2026.mjs --verify
```

La sección `/news` y el archivo `/news/2026` consultan Sanity con revalidación
de 60 segundos. La caché puede servir una versión anterior en la petición que
dispara la regeneración; una petición posterior muestra el listado actualizado.

Las rutas de las noticias son:

1. `/news/2026/peru-exports-grow-34-percent-january-august-2026`
2. `/news/2026/minem-mining-exports-grow-55-percent-first-half-2026`
3. `/news/2026/midagri-fruit-vegetable-exports-near-4-billion-2026`
4. `/news/2026/proinversion-infracon-2026-27-billion-financing-since-2023`
