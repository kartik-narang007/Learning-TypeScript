// The Unknown Type

function render(document: unknown) {
     // Narrowing

    if(/*typeof document === 'string'*/ document instanceof wordDocument){
        document.toUpperCase();
     }
}