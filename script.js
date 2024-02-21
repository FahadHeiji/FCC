const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  str = str.toLowerCase();
  const regex = /[a-z0-9]/g;
  const arrOfChars = [...str.match(regex)];

  for (let i = 0; i < arrOfChars.length / 2; i++) {
    if (arrOfChars[i] !== arrOfChars[arrOfChars.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const checkResult = () => {
  if (textInput.value === "") {
    return alert("Please input a value");
  }

  const newInnerHTML = `<span class="gradient-text">${
    textInput.value
  }</span> Is ${isPalindrome(textInput.value) ? "" : "Not"} A Palindrome.`;

  result.innerHTML = newInnerHTML;
  result.style.display = "block";
};

checkBtn.addEventListener("click", checkResult);

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkResult();
  }
});
