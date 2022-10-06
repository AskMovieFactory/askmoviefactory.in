// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ask Movie Factory",
      titleTemplate: "%s | ASK",
      meta: [],
      script: [
        { src: "https://player.vimeo.com/api/player.js" },
      ],
      link: [],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-schema-org",
  ],
  tailwindcss: {
    config: {
      content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
      ],
      theme: {
        extend: {
          colors: {
            ask: {
              primary: `#212121`,
              secondary: `#3d3d3d`,
              tertiary: `#4f4f4f`,
              border: `#33252f`,
              foreground: `#107d00`,
            },
          },
          spacing: {
            "102": "32rem",
            "108": "36rem",
          },
          maxWidth: {
            "8xl": "90rem",
            "9xl": "100rem",
            "10xl": "110rem",
          },
          fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
          },
          translate: {
            "130": "50rem",
            "140": "60rem",
          },
        },
        zIndex: {
          "0": "0",
          "10": "10",
          "20": "20",
          "25": "25",
          "30": "30",
          "40": "40",
          "45": "45",
          "50": "50",
          "75": "75",
          "100": "100",
          "auto": "auto",
        },
      },
      plugins: [
        require("@tailwindcss/typography"),
      ],
    },
  },
  schemaOrg: {
    canonicalHost: "https://askmoviefactory.in",
    position: "head",
  }
});
