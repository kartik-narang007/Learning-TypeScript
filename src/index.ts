class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
            console.log('Walking');
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('Taking a test');
    }
}

class Teacher extends Person {
    override get fullName(): string {
        return 'Professor ' + super.fullName;
    }
}

class Principal extends Person{
    override get fullName(): string{
        return 'Principal ' + super.fullName
    }
}

printNames([
    new Student(1, 'Kartik', 'Narang'),
    new Teacher('Kartik', 'Narang'),
    new Principal('Kartik', 'Narang')

])

function printNames(people: Person[]){
    for(let person of people)
        console.log(person.fullName);
}