const Engineer = require("../lib/Engineer");

describe("Ability to create an instance of Enginer and access all of its parameters and methods", () => {
    it("Has the ability to create an Engineer Instance", () => {
    const NewEmployee = new Engineer();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set github of engineer", () => {
    const github = "naser421";
      const NewEmployee = new Engineer("John", 1, "John@gmail;.com", github);
    expect(NewEmployee.github).toBe(github);
  });
  it("can return github engineer", () => {
    const github = "naser421";
      const NewEmployee = new Engineer("John", 1, "John@gmail;.com", github);
    expect(NewEmployee.getGithub()).toBe(github);
  });
  it("can get role of employee", () => {
      const NewEmployee = new Engineer("John", 1, "Email", "naser421");
    expect(NewEmployee.getRole()).toBe("Engineer");
  });
});