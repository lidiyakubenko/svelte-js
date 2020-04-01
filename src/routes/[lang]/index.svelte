<style>
  :root {
    --darkMainColor: #22293d;
    --whiteMain: #fff;
    --greenMain: #29b672;
    --orangeMain: #ff5a3e;
    --borderColor: #d4d7e1;
    --arrowColor: #9da2ae;
    --bgrHover: #eff3f8;
    --sliderBgr: #f4f4f6;
    --colorBgGray: #f4f4f6;
    --colorGreenUp: #35a947;
    --colorRedDown: #e34828;
    --colorBgDarkBlue: #161a25;

    --inputColor: #dadde4;
    --textColorLight: #141415;
    --subtitleColorLight: #4f566b;
    --subtitleColorDark: #aeb2be;

    --slider-colorDot: #0003;
    --slider-colorDotActive: #0007;

    --cookiesBlock-wrapWidth: 1270px;
    --cookiesBlock-highlightColor: #ff5a3e;
  }
</style>

<script context="module">
  import setupI18n from "../../utils/setup-i18n";

  export async function preload({ params }) {
    try {
      await setupI18n({ withLocale: params.lang });
    } catch (e) {
      console.log(e);
    }
  }
</script>

<script>
  import { t, locale } from "svelte-i18n";
  import mobileLangs from "../../constants/mobile-langs";

  import { onMount } from "svelte";
  import setFonts from "../../../static/fonts/fonts";
  import Intro from "../../components/Intro/Intro.svelte";
  import LocaleSelector from "../../components/LocaleSelector/LocaleSelector.svelte";

  onMount(() => {
    setFonts({ withLocale: "en" });
  });
</script>

<main>
  <LocaleSelector value="{$locale}" />
  <h1 class="title">{$t('lp_revie')['reviews.matt_text']}</h1>

  <Intro />
</main>
