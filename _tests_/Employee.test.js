const Employee = require("../lib/Employee");

describe("Ability to create an instance of Employee and access all of its parameters and methods", () => {
    it("Has the ability to create a Employee Instance", () => {
    const NewEmployee = new Employee();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set name of employee", () => {
    const name = "John";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.name).toBe(name);
  });
  it("can set id of employee", () => {
    const id = "1";
    const NewEmployee = new Employee("John", id);
    expect(NewEmployee.id).toBe(id);
  });
  it("can set email of employee", () => {
    const email = "John@gmail.com";
      const NewEmployee = new Employee("John", 1, email);
    expect(NewEmployee.email).toBe(email);
  });
  it("can get name of employee", () => {
      const name = "John";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.getName()).toBe(name);
  });
  it("can get Id of employee", () => {
    const id = 2;
      const NewEmployee = new Employee("John", id);
    expect(NewEmployee.getId()).toBe(id);
  });
  it("can get Email of employee", () => {
    const Email = "Nick@gmail.com";
      const NewEmployee = new Employee("John", 1, Email);
    expect(NewEmployee.getEmail()).toBe(Email);
  });
  it("can get role of employee", () => {
      const NewEmployee = new Employee("John", 1, "naser421@gmail/com");
    expect(NewEmployee.getRole()).toBe("Employee");
  });
});