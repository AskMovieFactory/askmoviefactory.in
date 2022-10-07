// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ask Movie Factory",
      titleTemplate: "%s | ASK",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", hid: "themeColor", content: "#107d00"},
        {
          name: "description",
          hid: "description",
          content:
            "ASK Movie Factory is an Indian film production company founded in 2019. We take on various works including Movie production, Web series production, Advertisement production, Dubbing studio...",
        },
        {
          name: "og:type",
          hid: "og:type",
          content: "website",
        },
        {
          name: "og:image",
          hid: "og:image",
          content: "/icon.png",
        },
      ],
      script: [
        { src: "https://player.vimeo.com/api/player.js" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
            shadow: ["Shadows Into Light", "cursive"],
            berkshire: ["Berkshire Swash", "cursive"],
            schoolbell: ["Schoolbell", "cursive"],
            mansalva: ["Mansalva", "cursive"],
            sedgwick: ["Sedgwick Ave Display", "cursive"],
            indie: ["Indie Flower", "cursive"],
            amatic: ["Amatic SC", "cursive"],
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
  },
});
