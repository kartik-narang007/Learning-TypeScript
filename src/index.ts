//Classes in TS

class Account {
    readonly id: number;
    owner: string;
    private balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    };

    deposit ( amount : number ) : void{
        if(amount <= 0){
            throw new Error('invalid amount')
        }
        else{
            this.balance += amount;
        }
    }
    
    getBalance(): number{
        return this.balance;
    }
};




let account = new Account(1,'kartik',0);
account.deposit(100);
console.log(account instanceof Account);
// console.log(account.balance) won't work since balance is a private variable
console.log(account.getBalance());