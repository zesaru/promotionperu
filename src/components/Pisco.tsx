export default function Pisco() {
  return (
    <div>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: 1600,
          height: "32rem",
          backgroundImage:
            'url("https://peru.info/archivos/banner/banner-home-pisco-spirit-peru.jpg")',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide">
            <h1 className="text-white text-4xl lg:text-5xl my-4">Pisco</h1>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="#"
          >
            About
          </a>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur
            <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vel risus commodo
            viverra maecenas accumsan lacus vel facilisis volutpat. Vitae
            aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis
            mattis aliquam. In est ante in nibh mauris. Egestas congue quisque
            egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam
            aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
            faucibus turpis in. Hac habitasse platea dictumst quisque. In
            aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac
            auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit
            egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo
            sed egestas egestas fringilla. Vitae congue eu consequat ac.
          </p>
        </div>
        <section className="bg-white py-4">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <div className="w-full md:w-1/2 xl:w-1/2 p-6 flex flex-col">
              <div className="relative">
                <a href="#">
                  <img
                    className="hover:grow hover:shadow-lg w-auto"
                    src="https://xvzasgijcvsgewwwmlhn.supabase.co/storage/v1/object/public/images/PiscoisPeru.jpg"
                  />
                </a>
                <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                  Recetas sobre pisco
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-6 flex flex-col">
              <div className="relative">
                <a href="#">
                  <img
                    className="hover:grow hover:shadow-lg w-auto"
                    src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
                  />
                </a>
                <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
                  Lugares donde adquirir pisco
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
