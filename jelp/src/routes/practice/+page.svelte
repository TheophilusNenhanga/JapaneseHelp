<script lang="ts">
  import PracticeBlock from "$lib/utils/PracticeBlock.svelte";
  import {
    hiraganaQuestions,
    type MultipleChoiceQuestion,
  } from "$lib/utils/questions";
  import { shuffle } from "$lib/utils/shuffle";

  let allQuestions: MultipleChoiceQuestion[] = hiraganaQuestions;
  let questions: MultipleChoiceQuestion[] = [];

  function generateQuestions(): MultipleChoiceQuestion[] {
    for (let i = 0; i < 10; i++) {
      let quest = allQuestions[Math.floor(Math.random() * allQuestions.length)];
      quest.choices = shuffle(quest.choices);
      questions.push(quest);
    }

    return questions;
  }
  questions = generateQuestions();
</script>

<div class="flex flex-col justify-center items-center gap-4">
  <div class="my-4 border-b text-center">
    <h1 class="text-2xl">Practice your Japanese</h1>
    <small class=" text-muted-foreground text-sm"
      >Refresh the page for another random set of questions</small
    >
  </div>
  {#each questions as question}
    <PracticeBlock {question} />
  {/each}
</div>
