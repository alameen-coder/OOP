class bank {
    constructor (name, balance) {
        this.name = name;
        this.balance = Number(balance);
    }

    depositMoney (amount) {
this.balance += Number(amount);
console.log(this.balance);
    }

    withdrawlMoney (amount) {
 amount = Number(amount);
if (this.balance >= amount ) {

    console.log(this.balance - amount);
}
else {
    console.log('You Balance is at zero!');
}
    }

displayBalance () {
    return this.balance;
}

}

const user1 = new bank ('Jane', '500');

user1.depositMoney('100');
user1.withdrawlMoney('200');
user1.displayBalance();