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
      image,
    }
`;
