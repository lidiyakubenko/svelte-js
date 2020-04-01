<style>

</style>

<script>
  import mobileLangs from "../../constants/mobile-langs";
  export let value;

  function handleLocaleChange(event) {
    event.preventDefault();

    const { value } = event.target;
    window.location.href = `/${value}`
  }
</script>

<div class="locale-selector">
  <div class="select">
    <select {value} on:change="{handleLocaleChange}">
      {#each mobileLangs as lang}
        <option value="{lang.shortname}">{lang.title}</option>
      {/each}
    </select>
  </div>
</div>
