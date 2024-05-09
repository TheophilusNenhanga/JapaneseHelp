<script lang="ts">
  import Sentence from "$lib/utils/Sentence.svelte";
  import { phrases } from "$lib/utils/phrases";
</script>

<div class="flex flex-col gap-4 xl:grid xl:grid-cols-2">
  {#each phrases as { jSentence, rSentence, eSentence }}
    <Sentence {jSentence} {rSentence} {eSentence} />
  {/each}
</div>
