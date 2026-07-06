import { groq } from "next-sanity";

export const allPost = groq`
  *[_type == "post"]{
    __i18n_lang,
    _id,
    title,
    content,
    menu,
  }
`;
export interface Post {
  _id: string;
  __i18n_lang?: string;
  title?: string;
  content?: any;
  menu?: string;
}

export const allNewsArticles = groq`
  *[_type == "newsArticle"] | order(publishedAt desc){
    _id,
    titleEs,
    titleJp,
    "slug": slug.current,
    year,
    publishedAt,
    "coverImage": coverImage.asset->url,
    coverImageAltEs,
    coverImageAltJp,
    excerptEs,
    excerptJp,
    bodyEs,
    bodyJp,
    gallery[]{
      "src": image.asset->url,
      altEs,
      altJp,
      captionEs,
      captionJp
    }
  }
`;

export const newsArticleByYearAndSlug = groq`
  *[_type == "newsArticle" && year == $year && slug.current == $slug][0]{
    _id,
    titleEs,
    titleJp,
    "slug": slug.current,
    year,
    publishedAt,
    "coverImage": coverImage.asset->url,
    coverImageAltEs,
    coverImageAltJp,
    excerptEs,
    excerptJp,
    bodyEs,
    bodyJp,
    gallery[]{
      "src": image.asset->url,
      altEs,
      altJp,
      captionEs,
      captionJp
    }
  }
`;

export const newsArticlesByYear = groq`
  *[_type == "newsArticle" && year == $year] | order(publishedAt desc){
    _id,
    titleEs,
    titleJp,
    "slug": slug.current,
    year,
    publishedAt,
    "coverImage": coverImage.asset->url,
    coverImageAltEs,
    coverImageAltJp,
    excerptEs,
    excerptJp,
    gallery[]{
      "src": image.asset->url,
      altEs,
      altJp,
      captionEs,
      captionJp
    }
  }
`;

export interface NewsGalleryItem {
  src: string;
  altEs?: string;
  altJp?: string;
  captionEs?: string;
  captionJp?: string;
}

export interface NewsArticle {
  _id: string;
  titleEs: string;
  titleJp: string;
  slug: string;
  year: number;
  publishedAt: string;
  coverImage?: string;
  coverImageAltEs?: string;
  coverImageAltJp?: string;
  excerptEs: string;
  excerptJp: string;
  bodyEs?: any;
  bodyJp?: any;
  gallery?: NewsGalleryItem[];
}

export const allCities = groq`
  *[_type == "cities"]{
      _id,
      city,
      title,
      "image": image.asset->url,
    }
`;

export const allRecipes = groq`
  *[_type == "recipes"]{
      "id": _id,
      title,
      slug,
      ingredients,
      preparation,
      "image": image.asset->url,
    }
`;

export const Recipebyslug = groq`
    *[_type == "recipes" && slug == $slug ] {
      _id,
      title,
      ingredients,
      preparation,      
      "image": image.asset->url,
    }
`;
