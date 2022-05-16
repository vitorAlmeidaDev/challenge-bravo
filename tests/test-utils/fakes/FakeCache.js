const mock = new Map();

const get = async (key) => {
    return mock.get(key);
};

const set = async (key, value, expireTime = 600) => {
    return mock.set(key, value);
};

const del = async (key) => {
    return mock.delete(key);
};

const clearCache = async () => {
    mock.clear();
};

module.exports = {
    get,
    set,
    del,
    clearCache,
};
