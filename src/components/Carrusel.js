export default function Carrusel() {
  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: 1600 }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked="checked"
        />
        <div
          className="carousel-item absolute opacity-0"	
          style={{ height: "50vh" }}
        >
          <div
            className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            style={{
              backgroundImage:
                'url("https://peru.info/archivos/categoria/banner-gastronomia%20(1).jpg")',
            }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-2xl my-4 text-white">
                  Slide
                </p>
                <a
                  className="text-xl text-white inline-block no-underline border-b border-white leading-relaxed hover:text-white hover:border-black"
                  href="#"
                >
                  more details
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>
      </div>
    </div>
  );
}
