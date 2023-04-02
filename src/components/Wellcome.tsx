import { useRouter } from "next/router";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
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
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => <p className="mt-8 mb-8">{props.children}</p>,
        }}
      />
    </div>
  );
}
