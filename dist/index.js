"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    ;
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('invalid amount');
        }
        else {
            this.balance += amount;
        }
    }
}
;
//# sourceMappingURL=index.js.map