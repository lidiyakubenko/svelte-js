import systemFonts from "./systemFonts";
import customFonts from "./customFonts";

const getOrDefault = (obj, key) => obj[key] || obj.default;

export default ({ withLocale: _locale } = { withLocale: "en" }) => {
  const getByLocale = obj => getOrDefault(obj, _locale); // сначала смотрим в lang с сервера для ssr, потом в i18n для переключения локалей на клиенте

  const fonts = `${!systemFonts[_locale] &&
    customFonts.map(
      font => `
          @font-face {
            font-family: '${font.family}';
            font-style: normal;
            font-weight: ${font.weight};

            src: ${getByLocale(font.src)
              .map(([url, format]) => `url('${url}') format('${format}')`)
              .join(", ")};
          }`
    )}
      `;

  const styles = `
   body { 
      -webkit-font-smoothing: antialiased;
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
   }
  `;

  const styleSheet = document.createElement("style");

  styleSheet.appendChild(document.createTextNode(fonts + styles));

  document.head.appendChild(styleSheet);
};
