const Intern = require("../lib/Intern");

test("Can create Intern object", () => {
  const emp1 = new Intern();
  expect(typeof emp1).toBe("object");
});

test('getRole() should return "Intern"', () => {
  const expectedValue = "Intern";
  const emp1 = new Intern("Niko", 1, "test@mail.com");
  expect(emp1.getRole()).toBe(expectedValue);
});
