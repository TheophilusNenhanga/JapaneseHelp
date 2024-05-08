<script lang="ts">
  import { fade } from "svelte/transition";

    export let hiragana: string;
    export let romaji: string;
</script>

{#if hiragana === "" && romaji === ""}
<div class="rounded border my-2">

</div>
{:else}
<div class="flex flex-col gap-2 p-4 my-2 items-center justify-center border rounded hover:shadow" transition:fade>
    <h1 class=" text-4xl">{hiragana}</h1>
    <h2 class="text-2xl text-center">{romaji}</h2>
</div>
{/if}

