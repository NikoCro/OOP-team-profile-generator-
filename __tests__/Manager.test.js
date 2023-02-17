const Manager = require("../lib/Manager");

test("Can create Manager object", () => {
  const emp1 = new Manager();
  expect(typeof emp1).toBe("object");
});

test('getRole() should return "Manager"', () => {
  const expectedValue = "Manager";
  const emp1 = new Manager("Niko", 1, "test@mail.com");
  expect(emp1.getRole()).toBe(expectedValue);
});
