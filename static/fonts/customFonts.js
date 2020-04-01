/* eslint-disable global-require */

// шрифты взяты отсюда
// https://google-webfonts-helper.herokuapp.com/fonts/

const customFonts = [
  {
    family: "Montserrat",
    weight: 600,
    src: {
      ru: [
        ["./src/montserrat-v13-cyrillic-600.woff2", "woff2"],
        ["./src/montserrat-v13-cyrillic-600.woff", "woff"]
      ],
      vi: [
        ['./src/montserrat-v13-latin-ext_vietnamese_latin-600.woff2', 'woff2'], // prettier-ignore
        ['./src/montserrat-v13-latin-ext_vietnamese_latin-600.woff', 'woff'] // prettier-ignore
      ],
      default: [
        ["./src/montserrat-v13-latin-600.woff2", "woff2"],
        ["./src/montserrat-v13-latin-600.woff", "woff"]
      ]
    }
  },
  {
    family: "Open Sans",
    weight: 400,
    src: {
      ru: [
        ["./src/open-sans-v16-cyrillic-regular.woff2", "woff2"],
        ["./src/open-sans-v16-cyrillic-regular.woff", "woff"]
      ],
      vi: [
        ['./src/open-sans-v16-latin-ext_vietnamese_latin-regular.woff2', 'woff2'], // prettier-ignore
        ['./src/open-sans-v16-latin-ext_vietnamese_latin-regular.woff', 'woff'] // prettier-ignore
      ],
      default: [
        ["./src/open-sans-v16-latin-regular.woff2", "woff2"],
        ["./src/open-sans-v16-latin-regular.woff", "woff"]
      ]
    }
  }
];

export default customFonts;
