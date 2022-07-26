<script context="module">
    const components = {
        "display": Display,
        "concept": Concept,
        "connection": Connection
    }
</script>

<script>
    import Display from "$components/Display.svelte";
    import Concept from "$components/Concept.svelte";
    import Connection from "$components/Connection.svelte";

    export let data = {};
</script>

<svelte:component this={components[data.type]} bind:data/>