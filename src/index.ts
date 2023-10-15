//Optional Chaining Types in TS

type Customer = {
    birthday?: Date
};
function getCustomer(id: number) : Customer | null | undefined {

    return id === 0 ? null : {birthday: new Date()};
}

let customer =  getCustomer(0);
// if(customer !== null && customer !== undefined)
//Optional property access operator

    console.log(customer?.birthday?.getFullYear());


//Optional element access operator
// if(customer !== null && customer !== undefined)
// short form     customers?.[0]


//optional call operator

// let log: any = (message: string) => console.log(message); 

let log: any = null;

log?.('a');
