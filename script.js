import { drawTextField } from "./modules/drawTextField.js";
import { drawKeyboard } from "./modules/drawKeyboard.js";
import { drawStatusBar } from "./modules/drawStatusBar.js";
import { solveKeyUp, solveKeyDown } from "./modules/keySolver.js";
import keys from "./modules/keys.js";

window.onfocus = function () {
  document
    .querySelectorAll(".key")
    .forEach((el) => el.classList.remove("highlighted"));
};

window.onload = function () {
  let body = document.querySelector("body");
  let textField = drawTextField(body);
  drawStatusBar(body);
  drawKeyboard(body, localStorage.getItem("language"), textField);
  document.addEventListener("keydown", (event) => {
    let keyboardKeys = document.querySelectorAll(".key");
    keys.forEach((el) => {
      if (
        event.code == el.code &&
        (event.location == el.location || !el.location)
      ) {
        event.preventDefault();
        solveKeyDown(
          event.code,
          document.querySelector(".language-field").selectedOptions[0].value,
          keyboardKeys,
          textField,
          event.location,
          event.shiftKey
        );
      }
    });
  });
  document.addEventListener("keyup", (event) => {
    let keyboardKeys = document.querySelectorAll(".key");
    solveKeyUp(
      event.code,
      document.querySelector(".language-field").selectedOptions[0].value,
      keyboardKeys,
      event.location
    );
  });
};
