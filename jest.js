function capatilize(string) {
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      let result = string[i].toUpperCase();
      let text = result + string.slice(1);
      return text;
    }
  }
}

function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (i == 2) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}

export { capatilize, reverseString };
