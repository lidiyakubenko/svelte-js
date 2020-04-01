<script>
    import { t } from "svelte-i18n";
</script>

<div class="container_intro">
<div class="welcome">
    <h1>{$t('lp_mob')['header.item1_text']}</h1>
</div>
</div>

<style>
    .container_intro {
        background-color: var(--darkMainColor);
        color: var(--whiteMain);
        overflow: hidden;
    }

    .welcome {
        padding-bottom: 32%;
        position: relative;

        /*@media (min-width: 480px) {*/
        /*    padding-bottom: 150px;*/
        /*}*/
    }
</style>