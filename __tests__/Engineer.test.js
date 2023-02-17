const Engineer = require("../lib/Engineer");

test("Can create Engineer object", () => {
  const emp1 = new Engineer();
  expect(typeof emp1).toBe("object");
});

test('getRole() should return "Engineer"', () => {
  const expectedValue = "Enginner";
  const emp1 = new Engineer("Niko", 1, "test@mail.com");
  expect(emp1.getRole()).toBe(expectedValue);
});
