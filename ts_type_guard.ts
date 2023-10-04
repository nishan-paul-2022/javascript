/* eslint-disable @typescript-eslint/no-explicit-any */

class Customer {
	isCreditAllowed(): string {
		const message = 'Sign a new contract with the customer';
		return message;
	}
}

class Supplier {
	isInShortList(): string {
		const messsage = 'Credit issue';
		return messsage;
	}
}

type BusinessPartner = Customer | Supplier;

function IsCustomer(partner: any): partner is Customer {
	return partner instanceof Customer;
}

function SignContract1(partner: BusinessPartner): void {
	let message: string;

	if (partner instanceof Customer) {
		message = partner.isCreditAllowed();
	} else {
		message = partner.isInShortList();
	}

	console.log(message);
}

function SignContract2(partner: BusinessPartner): void {
	let message: string;

	if ('isCreditAllowed' in partner) {
		message = partner.isCreditAllowed();
	} else {
		message = partner.isInShortList();
	}

	console.log(message);
}

function SignContract3(partner: BusinessPartner): void {
	let message: string;

	if (IsCustomer(partner)) {
		message = partner.isCreditAllowed();
	} else {
		message = partner.isInShortList();
	}

	console.log(message);
}

const partner = new Supplier();
SignContract1(partner);
SignContract2(partner);
SignContract3(partner);
