export function closestComponent(node, limit) {
    if (!node.dataset || node.dataset.type) return node;

    for (let actual = node; actual !== limit && actual !== null; actual = actual.parentElement) {
        const { dataset } = actual;
        if (!dataset.type) continue;

        return actual;
    }

    return null;
}

export function drag(node, { onBegin = () => true, onDrag = () => {}, onEnd = () => {}}) {
    function down(event) {
        event.preventDefault();
        const data = { node };
        if (!onBegin({ event, data })) return;

        const cx = event.clientX;
        const cy = event.clientY;

        // review if need to destroy on component destroy event
        function move(_event) {
            const dx = _event.clientX - cx;
            const dy = _event.clientY - cy;
            
            onDrag({ event: _event, dx, dy, data });
        }

        // review if need to destroy on component destroy event
        function up(_event) {
            if (_event.button !== event.button) return;
            onEnd({ event: _event, data });

            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        }

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    }

    node.addEventListener("mousedown", down);

    return {
        destroy() {
            node.removeEventListener("mousemove", down);
        }
    }
}

export function wheel(node, onWheel = () => {}) {
    function wheel(event) {
        event.preventDefault();
        onWheel({ event, node });
    }

    node.addEventListener("wheel", wheel);

    return {
        destroy() {
            node.removeEventListener("wheel", wheel);
        }
    }
}