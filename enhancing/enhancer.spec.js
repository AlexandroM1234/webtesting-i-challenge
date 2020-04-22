const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!
describe("enhancer.js tests", () => {
  test("should run without errors", () => {
    expect(true).toBeTruthy();
  });

  test("testing repair method", () => {
    expect(repair({ name: "Bb", enhancement: 10 })).toStrictEqual({
      name: "Bb",
      enhancement: 10,
      durability: 100,
    });
  });

  test("testing succeed method", () => {
    expect(
      succeed({ name: "Alex", enhancement: 20, durability: 10 })
    ).toStrictEqual({
      name: "Alex",
      enhancement: 19,
      durability: 10,
    });
  });

  //   test("testing fail method", () => {});
});
