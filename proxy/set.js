const handler = {
    get: (target, key) => {
        invariant(key, 'get');
        return target[key];
    },
    set: (target, key, value) => {
        invariant(key, 'set');
        target[key] = value;
        return true;
    }
}

function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

const target = {};
const proxy = new Proxy(target, handler);
// proxy._prop
proxy._prop = 'c'