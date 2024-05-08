<script lang="ts">
  export let hiragana: string;
  export let meaning: string;
  export let kanji: string;
</script>

<div class="grid grid-cols-2 p-2 md:p-4 md:my-2 border rounded">
  <div class="flex items-center justify-center">
    <h1 class="text-4xl">{kanji}</h1>
  </div>
  <div class="flex flex-col">
    <h1 class="text-xl md:text-2xl">Hiragana: {hiragana}</h1>
    <h1 class="text-xl md:text-2xl">Meaning: {meaning}</h1>
  </div>
</div>
