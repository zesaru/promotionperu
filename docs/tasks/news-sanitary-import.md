# Importar noticia de ejemplo en Sanity

El repositorio ya incluye un documento de ejemplo listo para importar:

- `scripts/import-news-article-2026.json`

Comando:

```bash
pnpm exec sanity login
pnpm exec sanity documents create scripts/import-news-article-2026.json --replace
```

Notas:

- El documento usa el schema `newsArticle`.
- Todas las imágenes del carrusel apuntan a Cloudinary.
- Si el documento ya existe, `--replace` actualiza el contenido.
- Mientras no haya login en Sanity, el sitio usa un fallback local con el mismo artículo para que `/news/2026/peru-en-japon-agenda-cultural-inversion-2026` ya funcione.
