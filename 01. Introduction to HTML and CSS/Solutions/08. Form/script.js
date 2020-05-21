function test(){
    console.log('test');
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }


}

let somePerson = new Person('Dimcho', 'Lakov');

console.log(somePerson.fullName);
console.log(somePerson.name);