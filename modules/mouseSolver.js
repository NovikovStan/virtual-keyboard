import { drawKeyboard } from "./drawKeyboard.js";
import keys from "./keys.js";

function solveMouseDown(key, language, textField, shift) {
  textField.blur();
  textField.scrollTop = textField.scrollHeight;
  key.classList.add("highlighted");
  keys.forEach((el) => {
    if (el.name == key.querySelector(".key-value").textContent) {
      el.action(textField);
      if (el.name == "LShift" && event.altKey) {
        document.querySelector(".language-field").selectedIndex =
          (document.querySelector(".language-field").selectedIndex + 1) % 2;
        document.querySelector(".keyboard").remove();
        drawKeyboard(
          document.querySelector("body"),
          document.querySelector(".language-field").selectedOptions[0].value,
          textField
        );
        localStorage.setItem(
          "language",
          document.querySelector(".language-field").selectedOptions[0].value
        );
        [...document.querySelectorAll(".key-value")]
          .find((el) => el.textContent == "LShift")
          .closest(".key")
          .classList.add("highlighted");
      }
    } else if (el[language] == key.querySelector(".key-value").textContent) {
      let selectorPosition = textField.selectionEnd;
      if (
        document
          .querySelector(".capslock-indicator")
          .classList.contains("green")
      ) {
        if (shift) {
          if (el[`shift${language}`]) {
            textField.textContent =
              textField.textContent.slice(0, textField.selectionStart) +
              el[`shift${language}`] +
              textField.textContent.slice(textField.selectionStart);
          } else {
            textField.textContent =
              textField.textContent.slice(0, textField.selectionStart) +
              el[language].toLowerCase() +
              textField.textContent.slice(textField.selectionStart);
          }
        } else {
          textField.textContent =
            textField.textContent.slice(0, textField.selectionStart) +
            el[language].toUpperCase() +
            textField.textContent.slice(textField.selectionStart);
        }
      } else if (shift) {
        if (el[`shift${language}`]) {
          textField.textContent =
            textField.textContent.slice(0, textField.selectionStart) +
            el[`shift${language}`] +
            textField.textContent.slice(textField.selectionStart);
        } else {
          textField.textContent =
            textField.textContent.slice(0, textField.selectionStart) +
            el[language].toUpperCase() +
            textField.textContent.slice(textField.selectionStart);
        }
      } else {
        textField.textContent =
          textField.textContent.slice(0, textField.selectionStart) +
          el[language] +
          textField.textContent.slice(textField.selectionStart);
      }
      textField.selectionEnd = textField.selectionStart = selectorPosition + 1;
    }
  });
}

function solveMouseUp(key) {
  key.classList.remove("highlighted");
  document.querySelector("textarea").focus();
}

export { solveMouseUp, solveMouseDown };
