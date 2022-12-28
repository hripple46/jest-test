import { capatilize, sum } from "./jest";

test("henry becomes Henry", () => {
  expect(capatilize("henry")).toBe("Henry");
});

test("The result is 3", () => {
  expect(sum(1, 2)).toBe(3);
});
