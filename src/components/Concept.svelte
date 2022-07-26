<script context="module">
    let pad = 8;
</script>

<script>
    import { UTILS_SYMBOLS, resizeObserver } from "$src/utils";
    import { onMount } from "svelte";

    export let data = {}
    let element;

    let text, width = 0, height = 0;

    onMount(() => {
        resizeObserver.observe(text, (entry) => {
            const rect = entry.contentRect;
            width = rect.width; height = rect.height;
        });

        element[UTILS_SYMBOLS.custom] = data;

        return () => {
            resizeObserver.unobserve(text);
        }
    });
</script>

<g bind:this={element} data-type={data.type}>
    <rect x={data.x - pad - width / 2} y={data.y - pad - height / 2} width={width + pad * 2} height={height + pad * 2} rx={10} fill="black"/>
    <text bind:this={text} x={data.x} y={data.y} text-anchor="middle" dominant-baseline="middle" fill="white">{data.text}</text>
</g>