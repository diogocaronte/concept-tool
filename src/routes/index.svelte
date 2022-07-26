<script>
    import { normalizeConcept, normalizeConnection } from "$src/utils";
    import Application from "$components/Application.svelte";

    let components = [];
    for (let i = 0; i < 5; i++) {
        components.push(normalizeConcept({ x: 100, y: 100, text: `Concept-${i}` }));
    }
    components = components;
</script>

<main>
    <div class="w-[500px] h-[500px]">
        <Application bind:components/>
    </div>
</main>

<style>
    main {
        display: grid;
        place-items: center;
        
        min-height: 100vh;
        margin: 0;
    }
</style>