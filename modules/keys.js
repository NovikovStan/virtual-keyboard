const keys = [
  {
    rus: "ё",
    en: "`",
    shiften: "~",
    code: "Backquote",
  },
  {
    rus: "1",
    en: "1",
    shiftrus: "!",
    shiften: "!",
    code: "Digit1",
  },
  {
    rus: "2",
    en: "2",
    shiftrus: '"',
    shiften: "@",
    code: "Digit2",
  },
  {
    rus: "3",
    en: "3",
    shiftrus: "№",
    shiften: "#",
    code: "Digit3",
  },
  {
    rus: "4",
    en: "4",
    shiftrus: ";",
    shiften: "$",
    code: "Digit4",
  },
  {
    rus: "5",
    en: "5",
    shiftrus: "%",
    shiften: "%",
    code: "Digit5",
  },
  {
    rus: "6",
    en: "6",
    shiftrus: "!",
    shiften: "!",
    code: "Digit6",
  },
  {
    rus: "7",
    en: "7",
    shiftrus: "&",
    shiften: "?",
    code: "Digit7",
  },
  {
    rus: "8",
    en: "8",
    shiftrus: "*",
    shiften: "*",
    code: "Digit8",
  },
  {
    rus: "9",
    en: "9",
    shiftrus: "(",
    shiften: "(",
    code: "Digit9",
  },
  {
    rus: "0",
    en: "0",
    shiftrus: ")",
    shiften: ")",
    code: "Digit0",
  },
  {
    rus: "-",
    en: "-",
    shiftrus: "_",
    shiften: "_",
    code: "Minus",
  },
  {
    rus: "=",
    en: "=",
    shiftrus: "+",
    shiften: "+",
    code: "Equal",
  },
  {
    rus: "\\",
    en: "\\",
    shiftrus: "/",
    shiften: "|",
    code: "Backslash",
  },
  {
    code: "Backspace",
    name: "Backspace",
    utility: true,
    size: "doublesize",
    action: function (textField) {
      let selectorPosition = textField.selectionStart;
      textField.textContent =
        textField.textContent.slice(0, textField.selectionStart - 1) +
        textField.textContent.slice(textField.selectionStart);
      textField.selectionStart = textField.selectionEnd = selectorPosition - 1;
    },
  },
  {
    code: "Tab",
    name: "Tab",
    utility: true,
    size: "doublesize",
    action: function (textField) {
      let selectorPosition = textField.selectionEnd;
      textField.textContent =
        textField.textContent.slice(0, textField.selectionStart) +
        String.fromCharCode(9) +
        textField.textContent.slice(textField.selectionStart);
      textField.selectionStart = textField.selectionEnd = selectorPosition + 1;
    },
  },
  {
    rus: "й",
    en: "q",
    code: "KeyQ",
  },
  {
    rus: "ц",
    en: "w",
    code: "KeyW",
  },
  {
    rus: "у",
    en: "e",
    code: "KeyE",
  },
  {
    rus: "к",
    en: "r",
    code: "KeyR",
  },
  {
    rus: "е",
    en: "t",
    code: "KeyT",
  },
  {
    rus: "н",
    en: "y",
    code: "KeyY",
  },
  {
    rus: "г",
    en: "u",
    code: "KeyU",
  },
  {
    rus: "ш",
    en: "i",
    code: "KeyI",
  },
  {
    rus: "щ",
    en: "o",
    code: "KeyO",
  },
  {
    rus: "з",
    en: "p",
    code: "KeyP",
  },
  {
    rus: "х",
    en: "[",
    shiften: "{",
    code: "BracketLeft",
  },

  {
    rus: "ъ",
    en: "]",
    shiften: "}",
    code: "BracketRight",
  },
  {
    utility: true,
    size: "doublesize",
    action: function (textField) {
      let selectorPosition = textField.selectionStart;
      textField.textContent =
        textField.textContent.slice(0, textField.selectionStart) +
        textField.textContent.slice(textField.selectionStart + 1);
      textField.selectionStart = textField.selectionEnd = selectorPosition;
    },
    name: "Del",
    code: "Delete",
  },
  {
    utility: true,
    size: "tripplesize",
    status: false,
    action: function () {
      this.status = !this.status;
      document.querySelector(".capslock-indicator").classList.toggle("green");
    },
    name: "Caps lock",
    code: "CapsLock",
  },
  {
    rus: "ф",
    en: "a",
    code: "KeyA",
  },
  {
    rus: "ы",
    en: "s",
    code: "KeyS",
  },
  {
    rus: "в",
    en: "d",
    code: "KeyD",
  },
  {
    rus: "а",
    en: "f",
    code: "KeyF",
  },
  {
    rus: "п",
    en: "g",
    code: "KeyG",
  },
  {
    rus: "р",
    en: "h",
    code: "KeyH",
  },
  {
    rus: "о",
    en: "j",
    code: "KeyJ",
  },
  {
    rus: "л",
    en: "k",
    code: "KeyK",
  },
  {
    rus: "д",
    en: "l",
    code: "KeyL",
  },
  {
    rus: "ж",
    en: ";",
    shiften: ":",
    code: "Semicolon",
  },
  {
    rus: "э",
    en: "'",
    shiften: '"',
    code: "Quote",
  },
  {
    utility: true,
    name: "Enter",
    size: "tripplesize",
    action: function (textField) {
      let selectorPosition = textField.selectionStart;
      textField.textContent =
        textField.textContent.slice(0, selectorPosition) +
        String.fromCharCode(13) +
        textField.textContent.slice(selectorPosition);
      textField.selectionStart = textField.selectionEnd = selectorPosition + 1;
    },
    code: "Enter",
  },
  {
    utility: true,
    name: "LShift",
    location: 1,
    size: "tripplesize",
    action: function () {},
    code: "ShiftLeft",
  },
  {
    rus: "я",
    en: "z",
    code: "KeyZ",
  },
  {
    rus: "ч",
    en: "x",
    code: "KeyX",
  },
  {
    rus: "с",
    en: "c",
    code: "KeyC",
  },
  {
    rus: "м",
    en: "v",
    code: "KeyV",
  },
  {
    rus: "и",
    en: "b",
    code: "KeyB",
  },
  {
    rus: "т",
    en: "n",
    code: "KeyN",
  },
  {
    rus: "ь",
    en: "m",
    code: "KeyM",
  },
  {
    rus: "б",
    en: ",",
    shiften: "<",
    code: "Comma",
  },
  {
    rus: "ю",
    en: ".",
    shiften: ">",
    code: "Period",
  },
  {
    rus: ".",
    en: "/",
    shiften: "?",
    shiftrus: ",",
    code: "Slash",
  },
  {
    rus: String.fromCharCode(5123),
    en: String.fromCharCode(5123),
    code: "ArrowUp",
  },
  {
    utility: true,
    name: "RShift",
    location: 2,
    size: "tripplesize",
    action: function () {},
    code: "ShiftRight",
  },
  {
    utility: true,
    name: "LCtrl",
    location: 1,
    action: function () {},
    code: "ControlLeft",
  },
  {
    utility: true,
    name: "LAlt",
    location: 1,
    action: function () {},
    code: "AltLeft",
  },
  {
    rus: " ",
    en: " ",
    size: "spacebar",
    code: "Space",
  },
  {
    utility: true,
    name: "RAlt",
    location: 2,
    action: function () {},
    code: "AltRight",
  },

  {
    rus: String.fromCharCode(5130),
    en: String.fromCharCode(5130),
    code: "ArrowLeft",
  },
  {
    rus: String.fromCharCode(5121),
    en: String.fromCharCode(5121),
    code: "ArrowDown",
  },
  {
    rus: String.fromCharCode(5125),
    en: String.fromCharCode(5125),
    code: "ArrowRight",
  },
  {
    utility: true,
    name: "RCtrl",
    location: 2,
    action: function () {},
    code: "ControlRight",
  },
];

export default keys;