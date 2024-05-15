<script lang="ts">
  import Grammar from "$lib/utils/Grammar.svelte";
import Verb from "$lib/utils/Verb.svelte";
  import { verbs, grammarRules } from "$lib/utils/verbs";
</script>

<div class="text-center">
    <div class="border-b text-2xl mt-2 mb-4">
        Grammar Rules for Verb Sentences
    </div>

    <div class="flex flex-col md:grid md:grid-cols-4 gap-4 sm:flex sm:flex-col mb-4">
        {#each grammarRules as g}
            <Grammar grammar={g}/>
        {/each}
    </div>

</div>

<div>
    <h1 class="text-center text-3xl border-b my-6">Verbs</h1>
</div>
<div class="flex flex-col md:grid md:grid-cols-4 gap-4 sm:flex sm:flex-col">
  {#each verbs as v}
    <Verb verb={v} />
  {/each}
</div>
