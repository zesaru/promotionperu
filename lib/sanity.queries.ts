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
      _id,
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