<script>
  import { kanji as kanjiList, numbers } from "$lib/utils/kanji";
  import Kanji from "$lib/utils/Kanji.svelte";
</script>

<div>
  <h1 class="text-2xl mb-4">The Numbers in Kanji</h1>
</div>
<div class="grid grid-cols-2 lg:grid-cols-3 mb-4 gap-4 md:gap-6">
  {#each numbers as { kanji, hiragana, meaning }}
    <Kanji {kanji} {hiragana} {meaning} />
  {/each}
</div>

<div>
  <h1 class="text-2xl mb-4">Some Commonly Used Kanji</h1>
</div>
<div class="grid grid-cols-2 lg:grid-cols-3 mb-4 gap-4 md:gap-6">
  {#each kanjiList as { kanji, hiragana, meaning }}
    <Kanji {kanji} {hiragana} {meaning} />
  {/each}
</div>
