//Classes in TS

class Account {
    // readonly id: number;
    // owner: string;
    // private balance: number;
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    )
    {
        // this.id = id;
        // this.owner = owner;
        // this.balance = balance;
    };

    deposit ( amount : number ) : void{
        if(amount <= 0){
            throw new Error('invalid amount')
        }
        else{
            this._balance += amount;
        }
    }
    
    get balance(): number{
        return this.balance;
    }
    set balance(value: number) {
        if(value<0)
            throw new Error('Invalid Value');
        this._balance = value;
    }
};




let account = new Account(1,'kartik',0);
account.deposit(100);
console.log(account instanceof Account);
// console.log(account.balance) won't work since balance is a private variable
console.log(account.balance);