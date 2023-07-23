import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-07-20',
  useCdn: true,
  token: process.env.REACT_APP__SANITY_PROJECT_TOKEN
})

const builder = imageUrlBuilder(client);

const urlFor = ((source) => {
  return builder.image(source).auto('format').fit('max').url()
})

export { urlFor, client }