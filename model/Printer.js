/**
 * Arquivo: Printer.js
 * Descrição: classe que constrói um objeto Impressora e realiza as operações CRUD
 * Data: 26/02/2022
 * Autor: Israel Amaral
 */

import { Storage } from './Storage.js';

class Printer {
    constructor(serialNumber, manufacturer, model) {
        this.serialNumber = serialNumber;
        this.manufacturer = manufacturer;
        this.model = model;
    }

    // ----- CRUD -----

    static create(printer) {
        const printers = Storage.getPrinters();

        printers.push(printer);
        Storage.setPrinters(printers);
    };

    static read() {
        return Storage.getPrinters();
    };

    static update(updatedPrinter, serialNumber) {
        const printers = Storage.getPrinters();

        printers.forEach((printer, index) => {
            if(printer.serialNumber === serialNumber) {
                printers[index] = updatedPrinter;
            }
        });

        Storage.setPrinters(printers);
    };

    static delete(serialNumber) {
        const printers = Storage.getPrinters();

        printers.forEach((printer, index) => {
            if(printer.serialNumber === serialNumber) {
                printers.splice(index, 1);
            }
        });

        Storage.setPrinters(printers);
    };
 };

 export { Printer }