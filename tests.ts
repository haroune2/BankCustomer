// tests.ts
import assert from 'assert';
import { BankCustomer } from './BankCustomer'; // Utilisez le chemin correct selon votre structure

// Tests
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

/*
node tests.js
John Doe
true

*/
