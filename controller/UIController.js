/**
 * Arquivo: UIController.js
 * Descrição: arquivo responsável por controlar a exibição de elementos de interface de usuário (HTML, CSS)
 * Data: 26/02/2022
 * Autor: Israel Amaral
 */

import { Printer } from '../model/Printer.js';

class UI {

    static showAlert(text, className) {
        // <div class="alert alert-danger/alert-success">Mensagem</div>
        const div = document.createElement('div');

        // prepara a estrutura pra receber o nome da classe ('success', 'danger', etc)
        div.className = `alert alert-${className}`;

        // insere algo dentro do campo 'mensagem'
        div.appendChild(document.createTextNode(text));

        // insere a mensagem de alerta antes do form
        const container = document.querySelector('.container');
        const form = document.querySelector('#printer-form');
        container.insertBefore(div, form);

        // Remove a mensagem após 3s
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    };

    static showPrinters() {
        const printers = Printer.read();

        printers.forEach((printer) => UI.addPrinter(printer));
    };

    static addPrinter(printer) {
        const list = document.querySelector('#printer-list');

        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${printer.serialNumber}</td>
            <td>${printer.manufacturer}</td>
            <td>${printer.model}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            <td><a href="#" class="btn btn-info btn-sm edit">Edit</a></td>
        `
        list.appendChild(row);
    };

    static removePrinter(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    };
};

export { UI }