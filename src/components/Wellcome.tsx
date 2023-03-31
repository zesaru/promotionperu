import { useRouter } from "next/router";
import PortableText from "react-portable-text"


export default function Wellcome(posts: any) {
  console.log("post", posts)
  const { locale } = useRouter();
  return (
   <div className="container py-8 px-6 mx-auto">
    <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
      { locale=== posts.post[1].__i18n_lang  ? "WELCOME TO PERU"  : "ペルー料理ガイドへようこそ。"} 
      </div>
    <PortableText 
    content={ locale=== posts.post[1].__i18n_lang ? posts.post[1].content :posts.post[0].content}       
    serializers={{
      normal: (props) => <p className="mt-8 mb-8">{props.children}</p>,
      }}/>
      
  </div>

  );
}
