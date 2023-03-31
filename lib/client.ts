import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'ol6mit4s',
    dataset: 'production',
    apiVersion: '2023-03-30',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client); 

export const urlFor = (source: any) => builder.image(source);