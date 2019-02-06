/* global Storage */

/**
 * Classe que implementa crud usando localStorage
 * 
 * @type LocalStorage
 */
class RepositoryLocalStorage {

    constructor() {
        if (typeof (Storage) === "undefined") {
            throw "Local Storage sem suporte";
        }
    }

    setData(id, data) {
        return localStorage.setItem(id, data);
    }

    getData(id) {
        return localStorage.getItem(id);
    }

    getAllData() {
        var listAllData = new Array();

        for (var i = 0, len = localStorage.length; i < len; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];
            listAllData.push({
                id: key,
                data: value
            });

            return listAllData;
        }
    }

    removeData(id) {
        return localStorage.removeItem(id);
    }

    removeAllData() {
        return localStorage.clear();
    }
}