import { useRouter } from "next/router";

export default function Wellcome() {

  const { locale } = useRouter();
  return (
   <div className="container py-8 px-6 mx-auto">
    <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
       { locale==="en" ? "WELCOME TO PERU"  : "ペルー料理ガイドへようこそ。"} 
    </div>
  </div>
  );
}
