class Customer {
	isCreditAllowed(): string {
		const message = 'Sign a new contract with the customer';
		return message;
	}
}

class Supplier {
	isShortListed(): string {
		const messsage = 'Credit issue';
		return messsage;
	}
}

type BusinessPartner = Customer | Supplier;

function isCustomer1(partner: BusinessPartner): boolean {
	return partner instanceof Customer;
}

function isCustomer2(partner: BusinessPartner): partner is Customer {
	return partner instanceof Customer;
}

function SignContract1(partner: BusinessPartner): void {
	let message: string;

	if (partner instanceof Customer) {
		message = partner.isCreditAllowed();
	} else {
		message = partner.isShortListed();
	}

	console.log(message);
}

function SignContract2(partner: BusinessPartner): void {
	let message: string;

	if ('isCreditAllowed' in partner) {
		message = partner.isCreditAllowed();
	} else {
		message = partner.isShortListed();
	}

	console.log(message);
}

function SignContract3(partner: BusinessPartner): void {
	let message: string;

	if (isCustomer1(partner)) {
		message = (partner as Customer).isCreditAllowed();
	} else {
		message = (partner as Supplier).isShortListed();
	}

	console.log(message);
}

function SignContract4(partner: BusinessPartner): void {
	let message: string;

	if (isCustomer2(partner)) {
		message = partner.isCreditAllowed();
	} else {
		message = partner.isShortListed();
	}

	console.log(message);
}

const partner = new Supplier();

SignContract1(partner);
SignContract2(partner);
SignContract3(partner);
SignContract4(partner);
