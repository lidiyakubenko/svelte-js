

<script>
  import mobileLangs from "../constants/mobile-langs";
</script>

<main>
  {#each mobileLangs as lang}

      <a rel="prefetch" href="{lang.shortname}">{lang.title}</a>

  {/each}
</main>
