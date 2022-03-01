/**
 * Arquivo: Storage.js
 * Descrição: arquivo responsável por se comunicar com o localStorage do navegador.
 * Data: 26/02/2022
 * Autor: Israel Amaral
 */

class Storage {

    static getPrinters() {
        return JSON.parse(localStorage.getItem('printers')) || [];
    };

    static setPrinters(printers) {
        localStorage.setItem('printers', JSON.stringify(printers));
    };

};

export { Storage }