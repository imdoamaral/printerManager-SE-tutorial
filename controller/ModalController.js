/**
 * Arquivo: ModalController.js
 * Descrição: arquivo responsável por controlar o Modal de atualização de dados
 * Data: 26/02/2022
 * Autor: Israel Amaral
 */

import { Printer } from '../model/Printer.js';

class Modal {
    static open() {
        document.querySelector('.modal').style.display = 'block';
    };
    
    static close() {
        document.querySelector('.modal').style.display = 'none';
    };

    static fillFields(serialNumberUI) {
        const printers = Printer.read()

        // preenche o modal com os valores da impressora
        printers.forEach((printer) => {
            if (printer.serialNumber === serialNumberUI) {
                document.querySelector('#serialNumber_modal').value = printer.serialNumber;
                document.querySelector('#manufacturer_modal').value = printer.manufacturer;
                document.querySelector('#model_modal').value = printer.model;
            }
        });
    };

    static getValues() {
        return {
            serialNumber: document.querySelector('#serialNumber_modal').value,
            manufacturer: document.querySelector('#manufacturer_modal').value,
            model: document.querySelector('#model_modal').value,
        }
    };

    static validateFields() {
        const { serialNumber, manufacturer, model} = this.getValues();

        if (serialNumber === ''
            || manufacturer === ''
            || model === ''
        ) {
            UI.showAlert('Por favor, preencha todos os campos', 'danger');
            return false;
        }
        return true;
    };

    static clearFields() {
        document.querySelector('#serialNumber_modal').value = '';
        document.querySelector('#manufacturer_modal').value = '';
        document.querySelector('#model_modal').value = '';
    };

    static submit(event, serialNumberUI) {
        event.preventDefault();

        try {
            const isValid = this.validateFields();

            if (isValid) {
                const { serialNumber, manufacturer, model } = this.getValues();

                const updatedPrinter = {
                    serialNumber,
                    manufacturer,
                    model
                }

                Printer.update(updatedPrinter, serialNumberUI);
                location.reload();
            }
        } catch (error) {
            alert(error.message);
        }
    };
};

export { Modal }