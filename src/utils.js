import { browser } from "$app/env";

export const UTILS_SYMBOLS = {
    custom: Symbol("custom data")
}

export const resizeObserver = (function () {
    let listeners = new Map();

    let result = browser ? new ResizeObserver(function (entries) {
        for (const entry of entries) listeners.get(entry.target)(entry);
    }) : {}

    let { observe, unobserve } = result;
    result.observe = (entry, listener = () => {}) => {
        if (observe) observe.call(result, entry);
        listeners.set(entry, listener);
    }

    result.unobserve = (entry, listener = () => {}) => {
        if (unobserve) unobserve.call(result, entry);
        listeners.delete(entry, listener);
    }

    return result;
})();

export function normalize(data = {}, normalize = {}) {
    for (const [key, value] of Object.entries(normalize))
        if (data[key] === undefined) data[key] = value;

    return data;
}

export const normalizeDisplay = (data) => normalize(data, { type: 'display', x: 0, y: 0 });
export const normalizeConcept = (data) => normalize(data, { type: 'concept', x: 0, y: 0, text: '????' });
export const normalizeConnection = (data) => normalize(data, { type: 'connection', x: 0, y: 0, text: '????', componentA: null, componentB: null });