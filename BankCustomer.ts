//Ajoutez l'instruction export devant la déclaration de la classe BankCustomer pour la rendre accessible à partir d'autres fichiers.
export  class BankCustomer {
    private name: string;
    private cardPin: string;

    constructor(customerName: string, cardPin: string) {
        this.name = customerName;
        this.cardPin = cardPin;
    }

    public getName(): string {
        return this.name;
    }

    public verifyPinInput(inputPin: string): boolean {
        return inputPin === this.cardPin;
    }
}

// Exemple d'utilisation
const customer = new BankCustomer('John Doe', '3579');
console.log(customer.getName()); // Affiche 'John Doe'
console.log(customer.verifyPinInput('3579')); // Affiche true
