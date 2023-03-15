import Card from "./Card";

const cities = [
  {
    "name": "Tokyo",
    "image": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  },
  {
    "name": "Kanagawa",
    "image": "https://images.unsplash.com/photo-1529921879218-f99546d03a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  },
  {
    "name": "Gunma",
    "image": "https://images.unsplash.com/photo-1583599589740-f0a60591d8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  },
  {
    "name": "Tochigi",
    "image": "https://images.unsplash.com/photo-1651417426620-318be8167e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  },
  {
    "name": "Shizuoka",
    "image": "https://plus.unsplash.com/premium_photo-1673698463068-78886b3a7081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  },
  {
    "name": "Aichi",
    "image": "https://images.unsplash.com/photo-1596628889205-f92ba59fd2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  },
  {
    "name": "Osaka",
    "image": "https://images.unsplash.com/photo-1589451765662-547fb5445bb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80a"
  },
  {
    "name": "Hiroshima",
    "image": "https://images.unsplash.com/photo-1559998551-19a349e9677b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
  }
]



export default function Restaurants() {
  return (
    <div>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: 1600,
          height: "32rem",
          backgroundImage:
            'url("https://peru.info/img/20.restaurantes-del-mundo/logo-banner.jpg")',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide">
            <h1 className="text-white text-4xl lg:text-5xl my-4">
              RESTAURANTS
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {
            cities.map((city) => (
              <Card name={city.name} key={city.name} image={city.image} city={city.name.toLowerCase()}/>
            ))
          }
          
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
      </section>
    </div>
  );
}
