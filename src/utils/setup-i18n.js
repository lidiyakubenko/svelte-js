import { dictionary, locale } from "svelte-i18n";
import loadTranslationsByLocale from "./loadTranslationsByLocale";

const setupI18n = async ({ withLocale }) => {
  try {
    const response = await loadTranslationsByLocale({ withLocale });
    dictionary.set({ ...response.resources });
    locale.set(response._locale);
  } catch (e) {
    console.log(e);
  }
};

export default setupI18n;
