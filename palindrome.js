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
const sentence = "A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization)."
const hintDisplay = document.getElementById('hint-display')
let delay = 0;
const interval = 250;
const words = sentence.split(" ");
words.forEach((word, index) => {
  setTimeout(()=>{
    hintDisplay.textContent += (index=== 0?'':' ') + word;
  }, delay);
  delay += interval;
})
