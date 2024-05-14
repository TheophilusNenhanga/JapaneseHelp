<script lang="ts">
  import PracticeBlock from "$lib/utils/PracticeBlock.svelte";
  import {
    combinationKatakanaQuestions,
    type MultipleChoiceQuestion,
  } from "$lib/utils/questions";
  import { shuffle } from "$lib/utils/shuffle";

  let allQuestions: MultipleChoiceQuestion[] = combinationKatakanaQuestions;
  let questions: MultipleChoiceQuestion[] = [];

  function generateQuestions(): MultipleChoiceQuestion[] {
    for (let i = 0; i < 10; i++) {
      while (true) {
        let quest =
          allQuestions[Math.floor(Math.random() * allQuestions.length)];
        quest.choices = shuffle(quest.choices);
        if (!questions.includes(quest)) {
          questions.push(quest);
          break;
        }
      }
    }

    return questions;
  }
  questions = generateQuestions();
  let score = 0;
  function handleScoreChange(event: any) {
    score += 1;
  }
  let congratulations = "Full marks";
  let goodWord = [
    "well done",
    "you're the best",
    "Nice",
    "No one does it like you do!",
    "Hip Hip Hooray!",
    "Japanese Master",
    "They should call you sensei",
    "hai, soudesu",
    "Congratulations",
    "Full marks",
  ];

  setInterval(() => {
    congratulations = goodWord[Math.floor(Math.random() * goodWord.length)];
  }, 3000);
</script>

<div class="flex flex-col justify-center items-center gap-4">
  <div class="my-4 border-b text-center">
    <h1 class="text-2xl">Practice your Japanese</h1>
    <small class=" text-muted-foreground text-sm"
      >Refresh the page for another random set of questions</small
    >
  </div>
  {#each questions as question}
    <PracticeBlock {question} on:increment-score={handleScoreChange} />
  {/each}
  <div
    class="border p-4 rounded bg-yellow-300 hover:shadow-lg hover:shadow-yellow-300 text-center text-2xl transition-all border-yellow-300"
  >
    <h1 class="">Your Score</h1>
    <h1 class="">{score} / 10</h1>
  </div>

  {#if score === 10}
    <h1>{congratulations}</h1>
  {/if}

  <button
    class="border rounded p-4"
    on:click={() => {
      location.reload();
    }}
  >
    New Questions
  </button>
</div>
