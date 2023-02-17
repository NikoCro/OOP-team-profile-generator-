const Employee = require("../lib/Employee");

test("Can create Employee object", () => {
  const emp1 = new Employee();
  expect(typeof emp1).toBe("object");
});

test('getRole() should return "Employee"', () => {
  const expectedValue = "Employee";
  const emp1 = new Employee("Niko", 1, "test@mail.com");
  expect(emp1.getRole()).toBe(expectedValue);
});
