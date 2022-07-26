<script>
    import { normalizeDisplay, normalizeConnection, UTILS_SYMBOLS } from "$src/utils";
    import { drag, wheel, closestComponent } from "$actions/interaction";
    import Display from "$components/Display.svelte";
    import DynamicList from "$components/DynamicList.svelte";

    export let components = [];
    let display = normalizeDisplay({});
    let element;

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
            const element_client_min = Math.min(element.clientWidth, element.clientHeight);
            const ratio = display.size / element_client_min;
            closest_begin.data.x += dx * ratio;
            closest_begin.data.y += dy * ratio;
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

    function onWheel({ event, node }) {
        const closest = closestComponent(event.target, node);
        if (closest !== element) return;

        const abs = Math.sign(event.deltaY);
        if (abs === 0) return; // i do not know when this is zero, but...

        let amount = abs * display.increase;
        if (abs === -1) {
            const diff = display.size + amount;
            if (diff <= display.min) amount = amount - (diff - display.min);
        } else {
            const diff = display.size + amount;
            if (diff >= display.max) amount = amount - (diff - display.max);
        }

        const half_amount = amount / 2;

        display.size += amount;
        display.x += half_amount;
        display.y += half_amount;
    }
</script>

<div use:wheel={onWheel} use:drag={{onBegin, onDrag, onEnd}} class="w-full h-full">
    <Display bind:element bind:data={display}>
        <DynamicList bind:components/>
    </Display>
</div>