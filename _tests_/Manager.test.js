const Manager = require("../lib/Manager");

describe("Ability to create an instance of Manager and access all of its parameters and methods", () => {
    it("Has the ability to create a Manager Instance", () => {
    const NewEmployee = new Manager();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set officeNumber of Manager", () => {
    const officeNumber = "001";
      const NewEmployee = new Manager("John", 1, "John@gmail;.com", officeNumber);
    expect(NewEmployee.officeNumber).toBe(officeNumber);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Manager("John", 1, "Email", "The Villages");
    expect(NewEmployee.getRole()).toBe("Manager");
  });
});