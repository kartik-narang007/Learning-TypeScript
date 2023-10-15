class Person {
    constructor(public firstName:string, public lastName:string){} 
    

    getFullName(){
        return this.firstName+ ' ' + this.lastName;
    }
    walk(){
        console.log('Walking');
    }

}

class Student extends Person{
    constructor(public studentId: number, public firstName: string, public lastName: string){
        super(firstName, lastName);
    }
    takeTest(){
        console.log('Taking a test');
    }
}

let student = new Student(1, 'kartik', 'narang');
student.walk();