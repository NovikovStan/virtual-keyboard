import { solveMouseUp, solveMouseDown } from "./mouseSolver.js";
import keys from "./keys.js";

let keyValue;
let keyShiftValue;

export function drawKeyboard(parent, language, inputArea) {
  let keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  keys.forEach((element) => {
    let key = document.createElement("div");
    key.classList.add("key");
    if (element.size) key.classList.add(element.size);
    if (element.utility) {
      keyValue = document.createElement("div");
      keyValue.classList.add("key-value");
      keyValue.innerText = element.name;
    } else {
      if (element[`shift${language}`]) {
        keyShiftValue = document.createElement("div");
        keyShiftValue.classList.add("key-shift-value");
        keyShiftValue.innerText = element[`shift${language}`];
        key.append(keyShiftValue);
      }
      keyValue = document.createElement("div");
      keyValue.classList.add("key-value");
      keyValue.innerText = element[language];
    }
    key.append(keyValue);
    keyboard.append(key);
    
    key.addEventListener("mousedown", (event) =>
      solveMouseDown(
        event.target.closest(".key"),
        language,
        inputArea,
        event.shiftKey
      )
    );
    key.addEventListener("mouseup", (event) =>
      solveMouseUp(event.target.closest(".key"))
    );
    key.addEventListener("mousemove", (event) => {
      solveMouseUp(event.target.closest(".key"));
    });
  });
  parent.append(keyboard);
  return keyboard;
}
