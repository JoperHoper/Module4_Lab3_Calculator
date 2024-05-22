function handleClick(e) {
  let inputElement = document.getElementById("num-on-screen");
  if (inputElement.value.length < inputElement.maxLength - 1) {
    if (isNumber(e.innerHTML)) {
      if (inputElement.value !== "0") {
        inputElement.value += e.innerHTML;
      } else {
        inputElement.value = e.innerHTML;
      }
    }
  }
  if (inputElement.value.length < inputElement.maxLength) {
    if (!isNumber(e.innerHTML)) {
      let lastLetterOfInputValue =
        inputElement.value[inputElement.value.length - 1];
      switch (e.innerHTML) {
        case "+":
          if (!isNumber(lastLetterOfInputValue)) {
            inputElement.value =
              inputElement.value.substring(0, inputElement.value.length - 1) +
              "+";
          } else {
            inputElement.value += "+";
          }
          break;
        case "-":
          if (!isNumber(lastLetterOfInputValue)) {
            inputElement.value =
              inputElement.value.substring(0, inputElement.value.length - 1) +
              "-";
          } else {
            inputElement.value += "-";
          }
          break;
        case "*":
          if (!isNumber(lastLetterOfInputValue)) {
            inputElement.value =
              inputElement.value.substring(0, inputElement.value.length - 1) +
              "*";
          } else {
            inputElement.value += "*";
          }
          break;
        case "/":
          if (!isNumber(lastLetterOfInputValue)) {
            inputElement.value =
              inputElement.value.substring(0, inputElement.value.length - 1) +
              "/";
          } else {
            inputElement.value += "/";
          }
          break;
      }
    }
  }
  if (e.innerHTML == "Clear") {
    inputElement.value = "0";
  }
  if (e.innerHTML == "=") {
    let resultArray = [];
    if (inputElement.value.includes("+")) {
      resultArray = inputElement.value.split("+");
      inputElement.value = parseInt(resultArray[0]) + parseInt(resultArray[1]);
    } else if (inputElement.value.includes("-")) {
      resultArray = inputElement.value.split("-");
      inputElement.value = parseInt(resultArray[0]) - parseInt(resultArray[1]);
    } else if (inputElement.value.includes("*")) {
      resultArray = inputElement.value.split("*");
      inputElement.value = parseInt(resultArray[0]) * parseInt(resultArray[1]);
    } else if (inputElement.value.includes("/")) {
      resultArray = inputElement.value.split("/");
      inputElement.value = (
        parseInt(resultArray[0]) / parseInt(resultArray[1])
      ).toFixed(inputElement.maxLength);
    }
  }
}

function isNumber(e) {
  return !isNaN(e);
}
