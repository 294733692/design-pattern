class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

let p = new Person("余云超");
alert(p.getName());
