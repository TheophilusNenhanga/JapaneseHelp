<script lang="ts">
    export let name: string;
    export let location: string;
    export let title: string;
</script>

<a href="/{location}" class="hover:shadow rounded"
  ><div class="border rounded p-4 glass">
    <h1 class="text-2xl">{name}</h1>
    <h1 class="text-xl">{title}</h1>
  </div>
</a>