<script lang="ts">
    import { timeTerms as timeList } from "$lib/utils/time";
    import Kanji from "$lib/utils/Kanji.svelte";
</script>

<div>
    <h1 class="text-2xl mb-4">Words related to Time</h1>
  </div>
  <div class="grid grid-cols-2 lg:grid-cols-3 mb-4 gap-4 md:gap-6">
    {#each timeList as { kanji, hiragana, meaning }}
      <Kanji {kanji} {hiragana} {meaning} />
    {/each}
  </div>
  