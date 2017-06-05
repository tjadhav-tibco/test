function Person(name) {
    this.name = name;
}
Person.prototype.greeting = function() {
    document.body.innerHTML += "Hello " + this.name + " Go rock the industry!!<br />";
};

var person1 = new Person("Sara");
var person2 = new Person("Bob");

person1.greeting();
person2.greeting();
