class Saver {
    constructor() {}
    static save(key, data) {
        localStorage.setItem(key, data);
    }
    static getData(key) {
        return localStorage.getItem(key);
    }
}