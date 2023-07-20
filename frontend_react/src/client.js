import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '8wxt0drv',
  dataset: 'production',
  apiVersion: '2023-07-20',
  useCdn: true,
  token: 'skq8GUn1uLnDWhGcz0y7DgKYWoxNe16FNJy5VkFrLVDeWDGAesoOgrSclHCpEyc68pRVokJsTdrWD7CgRc0kShfib67NOnkBpupDTz9uthSahwAXyURrh7ZJK2sckDi2wKPZGVI3V7pwZfJ7jPEONNSx45dSpSBFb1x5Fl4GDleAqQvYnUiR'
})