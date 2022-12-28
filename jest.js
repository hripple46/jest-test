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
function analyzeArray(array) {
  let max = array[0];
  let min = array[0];
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max || max == null) {
      max = array[i];
    }
    if (array[i] < min || min == null) {
      min = array[i];
    }
    average += array[i];
  }
  average = average / array.length;

  let object = {
    Minimum: min,
    Maximum: max,
    Average: Math.round(average),
    Length: array.length,
  };
  return object;
}

export { capatilize, reverseString, alphabetArray, analyzeArray };
