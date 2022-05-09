import keys from "./keys.js"

export function drawKeyboard(parent, language, inputArea) {
    let keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    keys.forEach((element) => {
      let key = document.createElement("div");
      key.classList.add("key");
      if (element.size) key.classList.add(element.size);
      let keyValue;
      let keyShiftValue;
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
    });
    parent.append(keyboard);
    return keyboard;
  }