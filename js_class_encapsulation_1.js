const BankAccount1 = (function () {
	function BankAccount(accountNumber, balance) {
		const __accountNumber = accountNumber;
		let _balance = balance;

		function _calculateInterest(_balance, rate) {
			return _balance * rate;
		}

		// public method to deposit funds
		this.deposit = function (amount) {
			_balance += amount;
		};

		// public method to withdraw funds
		this.withdraw = function (amount) {
			if (amount <= balance) {
				_balance -= amount;
			} else {
				console.log('insufficient balance');
			}
		};

		// public method to get the account balance
		this.getBalance = function () {
			return _balance;
		};

		// public method to calculate interest
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

	class BankAccount {
		constructor(accountNumber, balance) {
			const __accountNumber = accountNumber;
			let _balance = balance;

			// public method to deposit funds
			this.deposit = function (amount) {
				_balance += amount;
			};

			// public method to withdraw funds
			this.withdraw = function (amount) {
				if (amount <= balance) {
					_balance -= amount;
				} else {
					console.log('insufficient balance');
				}
			};

			// public method to get the account balance
			this.getBalance = function () {
				return _balance;
			};

			// public method to calculate interest
			this.calculateInterest = function (rate) {
				return _calculateInterest(_balance, rate);
			};
		}
	}

	return BankAccount;
})();

function DetailsAboutAccount(BankAccount) {
	const myAccount = new BankAccount('123456789', 1000);
	console.log(myAccount.getBalance()); // output: 1000

	myAccount.deposit(500);
	console.log(myAccount.getBalance()); // output: 1500

	myAccount.withdraw(700);
	console.log(myAccount.getBalance()); // output: 800

	console.log(myAccount.calculateInterest(0.05)); // output: 40 [ 5% interest on 800 ]

	console.log(myAccount.calculateInterest); // undefined [ private method is not accessible from outside ]
}

DetailsAboutAccount(BankAccount1);
DetailsAboutAccount(BankAccount2);
