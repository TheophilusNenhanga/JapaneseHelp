<script lang="ts">
  import { numbers } from "$lib/utils/numbers";
  import Kanji from "$lib/utils/Kanji.svelte";
</script>

<div>
  <h1 class="text-2xl mb-4">Numbers</h1>
</div>
<div
  class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mb-4 gap-4 md:gap-6"
>
  {#each numbers as { kanji, hiragana, meaning }}
    <Kanji {kanji} {hiragana} {meaning} />
  {/each}
</div>
