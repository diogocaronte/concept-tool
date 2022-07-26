<script>
    import { normalizeDisplay, normalizeConnection, UTILS_SYMBOLS } from "$src/utils";
    import { drag, closestComponent } from "$actions/interaction";
    import Display from "$components/Display.svelte";
    import DynamicList from "$components/DynamicList.svelte";

    export let components = [];
    let display = normalizeDisplay({});

    function onBegin({ event, data }) {
        const closest = closestComponent(event.target, data.node);
        if (closest === null) return false;
        
        data.closest_begin = {
            element: closest,
            data: closest[UTILS_SYMBOLS.custom],
            position: {
                x: closest[UTILS_SYMBOLS.custom].x,
                y: closest[UTILS_SYMBOLS.custom].y
            }
        }

        return true;
    }

    function onDrag({ event, dx, dy, data }) {
        const { closest_begin } = data;
        closest_begin.data.x = closest_begin.position.x;
        closest_begin.data.y = closest_begin.position.y;

        if (!event.shiftKey) {
            closest_begin.data.x += dx;
            closest_begin.data.y += dy;
        }

        if (closest_begin.data === display) display = display;
        
        components = components;
    }

    function onEnd({ event, data }) {
        const { closest_begin } = data;
        const closest = closestComponent(event.target, data.node);

        if (closest === null || closest_begin === closest) return;

        const closest_data = closest[UTILS_SYMBOLS.custom];
        if (closest_data === display) return;

        if (event.shiftKey) {
            components[components.length] = normalizeConnection({
                x: (closest_begin.data.x + closest_data.x) / 2,
                y: (closest_begin.data.y + closest_data.y) / 2,
                componentA: closest_begin.data,
                componentB: closest_data
            });
        }
    }
</script>

<div use:drag={{onBegin, onDrag, onEnd}} class="w-full h-full">
    <Display bind:data={display}>
        <DynamicList bind:components/>
    </Display>
</div>