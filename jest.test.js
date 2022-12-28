import {
  capatilize,
  reverseString,
  alphabetArray,
  analyzeArray,
} from "./jest.js";

test("henry becomes Henry", () => {
  expect(capatilize("henry")).toBe("Henry");
});

test("Dog becomes God", () => {
  expect(reverseString("Dog")).toBe("God");
});

test("String is Encrypted!", () => {
  expect(alphabetArray("abcd", 2)).toBe("cdef");
});

test("Min is 4, Max is 12, Average is 7, Length is 5", () => {
  expect(analyzeArray([4, 7, 9, 5, 12])).toStrictEqual({
    Maximum: 12,
    Minimum: 4,
    Average: 7,
    Length: 5,
  });
});
