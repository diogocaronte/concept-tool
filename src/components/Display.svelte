<script>
    import { onMount } from 'svelte';
    import { UTILS_SYMBOLS } from "$src/utils";

    export let data = {}
    export let element;

    onMount(() => {
        element[UTILS_SYMBOLS.custom] = data;
    });
</script>

<svg bind:this={element} preserveAspectRatio="xMidYMid meet" data-type={data.type} class="w-full h-full bg-slate-500" viewBox="{-data.x} {-data.y} {data.size} {data.size}">
    <slot />
</svg>