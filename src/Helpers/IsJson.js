export function IsJson(item) {
    item = typeof(item) === 'string' ? JSON.parse(item) : item;

    return typeof(item) === 'object' && item !== null;
}
