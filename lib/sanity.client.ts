import { dataset, projectId } from 'lib/sanity.api'
import { createClient, groq } from 'next-sanity'

const clientConfig = {
    projectId,
    dataset,
    useCdn: false,
  };


  function getCities() {
    return createClient(clientConfig).fetch(groq`
      *[_type == "cities"]{
        _id,
        name,
        image,
      }
    `);
  }