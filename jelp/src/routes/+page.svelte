<script lang="ts">
  import BlockLink from "$lib/utils/BlockLink.svelte";
  import { links } from "$lib/utils/links";

</script>

<div class="mx-8">
  <h1 class="text-3xl">What will you study today?</h1>
  <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-4 my-2 items-center w-full">
    {#each links as { title, name, location }}
      <BlockLink {title} {name} {location}/>
    {/each}
  </div>
</div>
