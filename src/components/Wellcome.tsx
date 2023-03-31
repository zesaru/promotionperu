import { useRouter } from "next/router";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import PortableText from "react-portable-text"

interface Props {
  post: any;
  
}

export default function Wellcome(posts: any) {
  const { locale } = useRouter();
  return (
   <div className="container py-8 px-6 mx-auto">
    <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
      { locale=== posts.post[1].__i18n_lang  ? "WELCOME TO PERU"  : "ペルー料理ガイドへようこそ。"} 
      </div>
    <PortableText 
    content={ locale=== posts.post[1].__i18n_lang ? posts.post[1].content :posts.post[0].content}       
    serializers={{
      normal: (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => <p className="mt-8 mb-8">{props.children}</p>,
      }}/>
      
  </div>

  );
}
