import Image from "next/image";

interface Props {
  alt: string;
  src: string;
}

const Banner: React.FC<Props> = (props) => {
  const { alt, src } = props;
  return (
    <>
      <section className="flex justify-center align-middle ">
        <div>
          <Image
            alt={alt}
            src={src}
            width={1500}
            height={660}
            className="hidden md:block md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl rounded-3xl shadow-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
