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

function alphabetArray(string, number) {
  let resultText = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let inputText = string.toLowerCase();
  for (let i = 0; i < inputText.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j] == inputText[i]) {
        resultText += `${alphabet[(j + number) % alphabet.length]}`;
      }
    }
  }
  return resultText;
}

export { capatilize, reverseString, alphabetArray };
