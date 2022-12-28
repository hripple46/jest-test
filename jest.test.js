import { capatilize, reverseString } from "./jest";

test("henry becomes Henry", () => {
  expect(capatilize("henry")).toBe("Henry");
});

test("Dog becomes God", () => {
  expect(reverseString("Dog")).toBe("God");
});
