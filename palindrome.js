const inputText = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

/* Validating the input text */
const validatedInputText = (inputText) => {
    const regex = /[^a-zA-Z0-9]/g;
    return inputText.replace(regex, "").toLowerCase();
}

// Checking palindrome
function checkPalindrome() {
    const preResult = validatedInputText(inputText.value).split("").reverse().join("");

    if (preResult === validatedInputText(inputText.value)) {
        result.innerText = `${inputText.value}` + " " + "is a palindrome.";
    } else {
        result.innerText = `${inputText.value}` + " " + "is not a palindrome.";
    }
}

function isInputEpmty (event) {
  event.preventDefault();
  if(inputText.value === "") {
    alert("Please input a value")
  } else {
    checkPalindrome();
  }
} 

checkBtn.addEventListener("click", isInputEpmty);