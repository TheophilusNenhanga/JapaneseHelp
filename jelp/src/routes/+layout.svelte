<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import { Menu } from "lucide-svelte";
  import { links } from "$lib/utils/links";
</script>

<div class="mx-4 md:mx-8">
  <header
    class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b mb-6"
  >
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <a href="/">JPNS 114 Spring 2024 :)</a>
      {#each links as { name, title, location }}
        <a
          href="/{location}"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          {name}
        </a>
      {/each}
    </nav>
    <Sheet.Root>
      <Sheet.Trigger asChild let:builder>
        <span class="md:hidden">JPNS 114 Spring 2024 :)</span>
        <Button
          variant="outline"
          size="icon"
          class="shrink-0 md:hidden"
          builders={[builder]}
        >
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <nav class="grid justify-items-start gap-6 text-lg font-medium">
          <span class="mt-6">JPNS 114 Spring 2024 :)</span>
          {#each links as { name, title, location }}
            <a
              href="/{location}"
              class="text-muted-foreground hover:text-foreground transition-colors"
            >
              {name}
            </a>
          {/each}
        </nav>
      </Sheet.Content>
    </Sheet.Root>
  </header>
  <main class="w-full">
    <slot />
  </main>
</div>

<footer class="flex mt-4 items-center justify-center border-t py-6">
  <h1 class="text-xl">Made By Theophilus, I hope this helped</h1>
</footer>
