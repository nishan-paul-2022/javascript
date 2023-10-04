const BankAccount1 = (function () {
	function BankAccount(accountNumber, balance) {
		const __accountNumber = accountNumber;
		let _balance = balance;

		function _calculateInterest(_balance, rate) {
			return _balance * rate;
		}

		// Public method to deposit funds
		this.deposit = function (amount) {
			_balance += amount;
		};

		// Public method to withdraw funds
		this.withdraw = function (amount) {
			if (amount <= balance) {
				_balance -= amount;
			} else {
				console.log('Insufficient balance.');
			}
		};

		// Public method to get the account balance
		this.getBalance = function () {
			return _balance;
		};

		// Public method to calculate interest
		this.calculateInterest = function (rate) {
			return _calculateInterest(_balance, rate);
		};
	}

	return BankAccount;
})();

const BankAccount2 = (function () {
	function _calculateInterest(amount, rate) {
		return amount * rate;
	}

	// Constructor function
	class BankAccount {
		constructor(accountNumber, balance) {
			const __accountNumber = accountNumber;
			let _balance = balance;

			// Public method to deposit funds
			this.deposit = function (amount) {
				_balance += amount;
			};

			// Public method to withdraw funds
			this.withdraw = function (amount) {
				if (amount <= balance) {
					_balance -= amount;
				} else {
					console.log('Insufficient balance.');
				}
			};

			// Public method to get the account balance
			this.getBalance = function () {
				return _balance;
			};

			// Public method to calculate interest
			this.calculateInterest = function (rate) {
				return _calculateInterest(_balance, rate);
			};
		}
	}

	return BankAccount;
})();

function Gn(BankAccount) {
	const myAccount = new BankAccount('123456789', 1000);
	console.log(myAccount.getBalance()); // Output: 1000

	myAccount.deposit(500);
	console.log(myAccount.getBalance()); // Output: 1500

	myAccount.withdraw(700);
	console.log(myAccount.getBalance()); // Output: 800

	console.log(myAccount.calculateInterest(0.05)); // Output: 40 (5% interest on 800)

	console.log(myAccount.calculateInterest); // undefined (The private method is not accessible from outside)

	console.log('\n\n\n');
}

Gn(BankAccount1);
Gn(BankAccount2);
