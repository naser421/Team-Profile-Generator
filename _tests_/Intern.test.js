const Intern = require("../lib/Intern");

describe("Ability to create an instance of Intern and access all of its parameters and methods", () => {
    it("Has the ability to create an Intern Instance", () => {
    const NewEmployee = new Intern();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set school of intern", () => {
    const school = "Yale";
      const NewEmployee = new Intern("John", 1, "John@gmail.com", school);
    expect(NewEmployee.school).toBe(school);
  });
  it("can return internschool", () => {
    const school = "Yale";
      const NewEmployee = new Intern("John", 1, "John@gmail.com", school);
    expect(NewEmployee.getSchool()).toBe(school);
  });
  it("can get role of employee", () => {
      const NewEmployee = new Intern("John", 1, "Email", "Yale");
    expect(NewEmployee.getRole()).toBe("Intern");
  });
});