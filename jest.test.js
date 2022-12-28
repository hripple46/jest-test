import { capatilize, reverseString, alphabetArray } from "./jest.js";

test("henry becomes Henry", () => {
  expect(capatilize("henry")).toBe("Henry");
});

test("Dog becomes God", () => {
  expect(reverseString("Dog")).toBe("God");
});

test("String is Encrypted!", () => {
  expect(alphabetArray("abcd", 2)).toBe("cdef");
});
