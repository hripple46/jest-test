function capatilize(string) {
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      let result = string[i].toUpperCase();
      let text = result + string.slice(1);
      return text;
    }
  }
}

function sum(a, b) {
  return a + b;
}
export { capatilize, sum };
