<script lang="ts">
  import type { MultipleChoiceQuestion } from "./questions";
  import Choice from "./Choice.svelte";
  import { createEventDispatcher } from "svelte";

  export let question: MultipleChoiceQuestion;
  let incorrect: string[] = [];
  const dispatch = createEventDispatcher();

  function clickedChoice(event: any) {
    if (event.detail === question.answer) {
      if (question.correct !== true){
          question.correct = true;
          dispatch("increment-score");
      }

    } else {
      incorrect.push(event.detail);
      // This is annoying
      incorrect = incorrect;
    }
  }
</script>

<div class="border p-4 sm:w-full md:w-1/2 lg:w-1/3 rounded">
  <h1 class="text-center border-b text-xl">{question.question}</h1>
  <div
    class="grid grid-cols-2 items-center justify-items-center justify-center gap-4 my-2"
  >
    {#each question.choices as choice}
      {#if question.correct && choice === question.answer}
        <Choice {choice} correct={true} on:clicked={clickedChoice} />
      {:else if incorrect.includes(choice)}
        <Choice {choice} correct={false} on:clicked={clickedChoice} />
      {:else}
        <Choice {choice} correct={null} on:clicked={clickedChoice} />
      {/if}
    {/each}
  </div>
</div>
