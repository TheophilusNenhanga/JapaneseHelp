<script lang="ts">
    import Hiragana from "$lib/utils/Hiragana.svelte"
    import { basic, dakuten, combination, long } from "$lib/utils/katakanaList";
  </script>
  
  <div>
    <div>
      <h1 class="text-3xl my-3" id="basic">Basic Katakana</h1>
    </div>
    <div class="grid grid-cols-5 justify-start gap-4">
      {#each basic as { katakana, romaji }}
        <Hiragana hiragana={katakana} {romaji} />
      {/each}
    </div>
  
    <div>
      <h1 class="text-3xl my-3" id="dakuten">Dakuten Katakana</h1>
    </div>
    <div class="grid grid-cols-5 justify-start gap-4">
      {#each dakuten as { katakana, romaji }}
        <Hiragana hiragana={katakana} {romaji} />
      {/each}
    </div>

    <div>
        <h1 class="text-3xl my-3" id="combo">Combination Katakana</h1>
      </div>
      <div class="grid grid-cols-5 justify-start gap-4">
        {#each combination as { katakana, romaji }}
          <Hiragana hiragana={katakana} {romaji} />
        {/each}
      </div>

      <div>
        <h1 class="text-3xl my-3" id="long">Long Consonant Katakana</h1>
        <h2 class="text-2xl">These all make use of the small ッ (tsu)</h2>
      </div>
      <div class="grid grid-cols-5 justify-start gap-4">
        {#each long as { katakana, romaji }}
          <Hiragana hiragana={katakana} {romaji} />
        {/each}
      </div>
  </div>
  