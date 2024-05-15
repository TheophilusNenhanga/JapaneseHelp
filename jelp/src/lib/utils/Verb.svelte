<script lang=ts>
  import type { verb as verbType } from "./verbs";

export let verb: verbType;    
</script>

<div class="flex flex-col gap-2 rounded p-4 text-xl border text-center">
    <span class="text-2xl border-b">{verb.jVerb}</span>
    <span>{verb.eVerb}</span>
    <span class="border-b mb-2">{verb.meaning}</span>
    <span>{verb.type}</span>
    <span>{verb.masuForm}</span>
    
</div>