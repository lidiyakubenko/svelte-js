import axios from "axios";

export default async ({ lang, translateKeys }) => {
  let translations = {};
  const loadTranslationByLang = async lang => {
    const translation = {};
    let files = ["lp_cmn"]; // TODO это пиздец, убрать из дефолтных cmn

    const baseUrl = "https://affiliate.iqoption.com/api/translations";

    if (typeof translateKeys === "string") {
      files.push(translateKeys);
    }

    if (Array.isArray(translateKeys)) {
      files = files.concat(translateKeys.map(key => key && key.trim()));
    }

    const promises = await Promise.all(
      files.map(file =>
        axios.get(`${baseUrl}/${file}-${lang.name || "en_US"}.json`)
      )
    );

    files.forEach((file, index) => {
      translation[file] = promises[index].data;
    });

    return { [lang.shortname]: translation };
  };

  // TODO падать с более понятной ошибкой "нет переводов с такой-то локалью в таком-то проекте"

  try {
    const translationsByLang = await loadTranslationByLang(lang);
    translations = [translationsByLang];
  } catch (error) {
    throw error;
  }

  return translations.reduce(
    (acc, cur) => ({
      ...acc,
      ...cur
    }),
    {}
  );
};
