import { useRouter } from "next/router";
import {
  JSXElementConstructor,
  ReactElement,
  ReactPortal,
} from "react";
import PortableText from "react-portable-text";

export default function Wellcome(posts: any) {
  const { locale,route } = useRouter();

  const data = posts.post.filter(
    (post: { menu: string; }) => post.menu === 'home'
  );
  
  return (
    <div className="container py-8 px-6 mx-auto">
      
      <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
      <span className="pr-1 w-1 h-8 bg-red-500 border border-red-600 mr-2"></span>
        {locale === data[0].__i18n_lang
          ? data[0].title
          : data[1].title}
      </div>
      <PortableText
        content={
          locale === data[0].__i18n_lang
            ? data[0].content
            : data[1].content
        }
        serializers={{
          normal: (props: {
            children:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactPortal
              | null
              | undefined;
          }) => <p className="mt-8 mb-8">{props.children}</p>,
        }}
      />
      {locale === data[0].__i18n_lang 
      ?<p className="mt-8 mb-8">お問い合わせ <a className="text-blue-600" href="https://m.me/embajadadelperuenjapon">https://m.me/embajadadelperuenjapon</a> または  <a className="text-blue-600" href="mailto:embtokyo@embperujapan.org">embtokyo@embperujapan.org</a></p>
      :<p className="mt-8 mb-8">Contact us <a className="text-blue-600" href="https://m.me/embajadadelperuenjapon">https://m.me/embajadadelperuenjapon</a> or  <a className="text-blue-600" href="mailto:embtokyo@embperujapan.org">embtokyo@embperujapan.org</a></p>
      }
      
    </div>
  );
}
