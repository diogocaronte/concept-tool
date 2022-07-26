<script>
    import { UTILS_SYMBOLS } from "$src/utils";
    import { onMount } from "svelte";

    export let data = {}

    let element;

    onMount(() => {
        element[UTILS_SYMBOLS.custom] = data;
    });
</script>

<g bind:this={element} data-type={data.type}>
    <line x1={data.componentA.x} y1={data.componentA.y} x2={data.x} y2={data.y} stroke="white"/>
    <line x1={data.componentB.x} y1={data.componentB.y} x2={data.x} y2={data.y} stroke="white"/>
    <text x={data.x} y={data.y} text-anchor="middle" dominant-baseline="middle" fill="black">{data.text}</text>
</g>