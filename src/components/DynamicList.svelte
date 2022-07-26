<script>
    import Dynamic from "$components/Dynamic.svelte";
    export let components = [];
</script>

{#each components as component (component)}
    <Dynamic bind:data={component}/>
{/each}