//Generics wrapInArray in TS

function wrapInArray<T>(value: T){
    return [value];
}
    let numbers = wrapInArray('1');