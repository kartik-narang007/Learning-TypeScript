// The Never Type

function processEvents(): never {
    while(true) {
        //Read a message from the queue
    }
}

processEvents();
console.log('Hello World'); //this line will never get executed because upper function never returns

//agar mai yaha se never hata du to hame kabhi warning nahi aayegi ki last line execute nahi hogi yaha never keyword help krta hai hamein warning dene me

// is warning ko on krne ke liye allowunreachablecode ko configuration me false krna pdega