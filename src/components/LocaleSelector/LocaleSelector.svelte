<style>
  .select {
    display: flex;
    flex-flow: column nowrap;
  }

  .select a {
    color: black;
    transition: 0.3s;
  }

  .select a:hover{
    color: #35a947;
  }
</style>

<script>
  import mobileLangs from "../../constants/mobile-langs";
  export let value;

  function handleLocaleChange(event) {
    event.preventDefault();

    const { value } = event.target;
    window.location.href = `/${value}`;
  }

  console.log(value);
</script>

<div class="locale-selector">
  <div class="select">
    {#each mobileLangs as lang}
      <a href="/{lang.shortname}/">{lang.title}</a>
    {/each}
  </div>
</div>
