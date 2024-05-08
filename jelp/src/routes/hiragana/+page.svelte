<script lang="ts">
    import Hiragana from "$lib/utils/Hiragana.svelte"
    import { basic, dakuten, combination, long } from "$lib/utils/hiraganaList";
  </script>
  
  <div>
    <div>
      <h1 class="text-3xl my-3" id="basic">Basic Hiragana</h1>
    </div>
    <div class="grid grid-cols-5 justify-start gap-4">
      {#each basic as { hiragana, romaji }}
        <Hiragana {hiragana} {romaji} />
      {/each}
    </div>
  
    <div>
      <h1 class="text-3xl my-3" id="dakuten">Dakuten Hiragana</h1>
    </div>
    <div class="grid grid-cols-5 justify-start gap-4">
      {#each dakuten as { hiragana, romaji }}
        <Hiragana {hiragana} {romaji} />
      {/each}
    </div>

    <div>
        <h1 class="text-3xl my-3" id="combo">Combination Hiragana</h1>
      </div>
      <div class="grid grid-cols-5 justify-start gap-4">
        {#each combination as { hiragana, romaji }}
          <Hiragana {hiragana} {romaji} />
        {/each}
      </div>
  </div>

  <div>
    <h1 class="text-3xl my-3" id="long">Long Consonant Hiragana</h1>
    <h2 class="text-2xl">These all make use of the small っ (tsu)</h2>
  </div>
  <div class="grid grid-cols-5 justify-start gap-4">
    {#each long as { hiragana, romaji }}
      <Hiragana {hiragana} {romaji} />
    {/each}
  </div>

  