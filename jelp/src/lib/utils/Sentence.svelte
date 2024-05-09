<script lang="ts">
    export let jSentence: string;
    export let rSentence: string;
    export let eSentence: string;
</script>

<div class="border rounded flex flex-col my-2 py-2">
    <p class="mx-4 text-xl text-muted-foreground">Japanese:&#9;<span class="text-black">{jSentence}</span></p>
    <p class="mx-4 text-xl text-muted-foreground">Romanized Japanese:&#9;<span class="text-black">{rSentence}</span> </p>
    <p class="mx-4 text-xl text-muted-foreground">English:&#9;<span class="text-black">{eSentence}</span></p>
</div>