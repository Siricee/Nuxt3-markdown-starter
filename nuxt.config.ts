import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.0/build/styles/atom-one-dark.min.css',
      }
    ],
    style: [
      {
        children: `
          .container {
            padding-top: 80px !important;
          }
        `,
      }
    ]
  }
}) 
