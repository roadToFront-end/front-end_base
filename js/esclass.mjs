class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    ageTeller() {
        return `${this.firstName}'s age is ${this.age} years old.`;
    }

    greetings() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static dummyFunction() {
        return `Testing static method.`;
    }
}

const Panshi = new Person('Shi', 'Pan', '25');

console.log(Panshi.ageTeller());
console.log(Person.dummyFunction());
Panshi.getsMarried('Li');
console.log(Panshi.greetings());

class Customer extends Person {
    constructor(firstName, lastName, age, membership, phoneNo) {
        super(firstName, lastName, age);
        this.membership = membership;
        this.phoneNo = phoneNo;
    }

    static getMenbershipCost() {
        return 500;
    }

    welcomeCustomer() {
        return `Welcome ${this.firstName} ${this.lastName} to our company.`;
    }
}

const sara = new Customer('sara', 'williams', '24', 'Premium', '13817232512');

console.log(sara)
console.log(sara.welcomeCustomer());
sara.getsMarried("Thompson");
console.log(sara.welcomeCustomer());
console.log(sara.ageTeller());
console.log(Customer.getMenbershipCost());
