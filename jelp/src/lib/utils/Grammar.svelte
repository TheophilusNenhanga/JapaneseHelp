<script lang=ts>
    import type { Grammar } from "./verbs";
  
  export let grammar: Grammar;    
  </script>
  
  <div class="flex flex-col gap-2 rounded p-4 text-xl border text-center">
      <span class="text-2xl">{grammar.particle}</span>
      <span class="border-b text-wrap">{grammar.useCase}</span>   
      <span>{grammar.jExample}</span>
      <span>{grammar.eExample}</span>   
  </div>