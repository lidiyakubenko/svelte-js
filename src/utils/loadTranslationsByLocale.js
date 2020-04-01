import mobileLangs from "../constants/mobile-langs";
import translateKeys from "../constants/mobile-translate-keys";
import loadTranslations from "./loadTranslations";

const loadTranslationsByLocale = async function(
  { withLocale: _locale } = { withLocale: "en" }
) {
  let resources;

  const localeObj = mobileLangs.reduce(
    (accum, item) => (item.shortname === _locale ? item : accum),
    {}
  );

  try {
    resources = await loadTranslations({
      lang: localeObj,
      translateKeys
    });
  } catch (e) {
    console.log(e);
  }

  return { resources, _locale };
};

export default loadTranslationsByLocale;
