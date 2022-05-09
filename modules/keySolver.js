import { drawKeyboard } from "./drawKeyboard.js";
import keys from "./keys.js"

function solveKeyDown(
  keyCode,
  language,
  keyboardKeys,
  textField,
  location,
  shift
) {
  textField.blur();
  textField.scrollTop = textField.scrollHeight;
  keys.forEach((el) => {
    if (el.code == keyCode) {
      keyboardKeys.forEach((elem) => {
        if (el.utility) {
          if (
            elem.querySelector(".key-value").textContent == el.name &&
            (el.location == location || !el.location)
          ) {
            elem.classList.add("highlighted");
            el.action(textField);
            if (el.code == "ShiftLeft" && event.altKey) {
              document.querySelector(".language-field").selectedIndex =
                (document.querySelector(".language-field").selectedIndex + 1) %
                2;
              document.querySelector(".keyboard").remove();
              drawKeyboard(
                document.querySelector("body"),
                document.querySelector(".language-field").selectedOptions[0]
                  .value,
                textField
              );
              localStorage.setItem(
                "language",
                document.querySelector(".language-field").selectedOptions[0]
                  .value
              );
              [...document.querySelectorAll(".key-value")]
                .find((el) => el.textContent == "LShift")
                .closest(".key")
                .classList.add("highlighted");
              [...document.querySelectorAll(".key-value")]
                .find((el) => el.textContent == "LAlt")
                .closest(".key")
                .classList.add("highlighted");
            }
          }
        } else {
          if (elem.querySelector(".key-value").textContent == el[language]) {
            elem.classList.add("highlighted");
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
            textField.selectionEnd = textField.selectionStart =
              selectorPosition + 1;
          }
        }
      });
    }
  });
}

function solveKeyUp(keyCode, language, keyboardKeys, location = 0) {
  document.querySelector("textarea").focus();
  keys.forEach((el) => {
    if (el.code == keyCode) {
      keyboardKeys.forEach((elem) => {
        if (el.utility) {
          if (
            elem.querySelector(".key-value").textContent == el.name &&
            (!el.location || el.location == location)
          ) {
            elem.classList.remove("highlighted");
          }
        } else {
          if (elem.querySelector(".key-value").textContent == el[language]) {
            elem.classList.remove("highlighted");
          }
        }
      });
    }
  });
}

export { solveKeyUp, solveKeyDown };
