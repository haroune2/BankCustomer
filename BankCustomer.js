"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCustomer = void 0;
class BankCustomer {
    constructor(customerName, cardPin) {
        this.name = customerName;
        this.cardPin = cardPin;
    }
    getName() {
        return this.name;
    }
    verifyPinInput(inputPin) {
        return inputPin === this.cardPin;
    }
}
exports.BankCustomer = BankCustomer;
// Exemple d'utilisation
const customer = new BankCustomer('John Doe', '3579');
console.log(customer.getName()); // Affiche 'John Doe'
console.log(customer.verifyPinInput('3579')); // Affiche true
