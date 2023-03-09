import  Header  from "./Header";
import  Footer  from "./Footer";

export default function Layout ({ children }) {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
