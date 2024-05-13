<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let choice: string;
  export let correct: boolean | null;

  const eventDispatcher = createEventDispatcher();

  function handleChoiceClicked(event: MouseEvent) {
    eventDispatcher("clicked", choice);
  }
</script>

{#if correct}
  <button
    class="flex justify-center items-center w-fit"
    on:click={handleChoiceClicked}
  >
    <h1 class="border p-4 rounded bg-green-200">{choice}</h1>
  </button>
{:else if correct === null || correct === undefined}
  <button
    class="flex justify-center items-center w-fit"
    on:click={handleChoiceClicked}
  >
    <h1 class="border p-4 rounded">{choice}</h1>
  </button>
{:else if correct === false}
  <button
    class="flex justify-center items-center w-fit"
    on:click={handleChoiceClicked}
  >
    <h1 class="border p-4 rounded bg-red-200">{choice}</h1>
  </button>
{/if}
