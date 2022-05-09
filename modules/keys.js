const keys = [
  {
    rus: "ё",
    en: "`",
    shiften: "~",
    code: "192",
  },
  {
    rus: "1",
    en: "1",
    shiftrus: "!",
    shiften: "!",
    code: "49",
  },
  {
    rus: "2",
    en: "2",
    shiftrus: '"',
    shiften: "@",
    code: "50",
  },
  {
    rus: "3",
    en: "3",
    shiftrus: "№",
    shiften: "#",
    code: "51",
  },
  {
    rus: "4",
    en: "4",
    shiftrus: ";",
    shiften: "$",
    code: "52",
  },
  {
    rus: "5",
    en: "5",
    shiftrus: "%",
    shiften: "%",
    code: "53",
  },
  {
    rus: "6",
    en: "6",
    shiftrus: "!",
    shiften: "!",
    code: "54",
  },
  {
    rus: "7",
    en: "7",
    shiftrus: "&",
    shiften: "?",
    code: "55",
  },
  {
    rus: "8",
    en: "8",
    shiftrus: "*",
    shiften: "*",
    code: "56",
  },
  {
    rus: "9",
    en: "9",
    shiftrus: "(",
    shiften: "(",
    code: "57",
  },
  {
    rus: "0",
    en: "0",
    shiftrus: ")",
    shiften: ")",
    code: "48",
  },
  {
    rus: "-",
    en: "-",
    shiftrus: "_",
    shiften: "_",
    code: "189",
  },
  {
    rus: "=",
    en: "=",
    shiftrus: "+",
    shiften: "+",
    code: "187",
  },
  {
    rus: "\\",
    en: "\\",
    shiftrus: "/",
    shiften: "|",
    code: "220",
  },
  {
    code: "8",
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
    code: "9",
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
    code: "81",
  },
  {
    rus: "ц",
    en: "w",
    code: "87",
  },
  {
    rus: "у",
    en: "e",
    code: "69",
  },
  {
    rus: "к",
    en: "r",
    code: "82",
  },
  {
    rus: "е",
    en: "t",
    code: "84",
  },
  {
    rus: "н",
    en: "y",
    code: "89",
  },
  {
    rus: "г",
    en: "u",
    code: "85",
  },
  {
    rus: "ш",
    en: "i",
    code: "73",
  },
  {
    rus: "щ",
    en: "o",
    code: "79",
  },
  {
    rus: "з",
    en: "p",
    code: "80",
  },
  {
    rus: "х",
    en: "[",
    shiften: "{",
    code: "219",
  },

  {
    rus: "ъ",
    en: "]",
    shiften: "}",
    code: "221",
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
    code: "46",
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
    code: "20",
  },
  {
    rus: "ф",
    en: "a",
    code: "65",
  },
  {
    rus: "ы",
    en: "s",
    code: "83",
  },
  {
    rus: "в",
    en: "d",
    code: "68",
  },
  {
    rus: "а",
    en: "f",
    code: "70",
  },
  {
    rus: "п",
    en: "g",
    code: "71",
  },
  {
    rus: "р",
    en: "h",
    code: "72",
  },
  {
    rus: "о",
    en: "j",
    code: "74",
  },
  {
    rus: "л",
    en: "k",
    code: "75",
  },
  {
    rus: "д",
    en: "l",
    code: "76",
  },
  {
    rus: "ж",
    en: ";",
    shiften: ":",
    code: "186",
  },
  {
    rus: "э",
    en: "'",
    shiften: '"',
    code: "222",
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
    code: "13",
  },
  {
    utility: true,
    name: "LShift",
    location: 1,
    size: "tripplesize",
    action: function () {},
    code: "16",
  },
  {
    rus: "я",
    en: "z",
    code: "90",
  },
  {
    rus: "ч",
    en: "x",
    code: "88",
  },
  {
    rus: "с",
    en: "c",
    code: "67",
  },
  {
    rus: "м",
    en: "v",
    code: "86",
  },
  {
    rus: "и",
    en: "b",
    code: "66",
  },
  {
    rus: "т",
    en: "n",
    code: "78",
  },
  {
    rus: "ь",
    en: "m",
    code: "77",
  },
  {
    rus: "б",
    en: ",",
    shiften: "<",
    code: "188",
  },
  {
    rus: "ю",
    en: ".",
    shiften: ">",
    code: "190",
  },
  {
    rus: ".",
    en: "/",
    shiften: "?",
    shiftrus: ",",
    code: "191",
  },
  {
    rus: String.fromCharCode(5123),
    en: String.fromCharCode(5123),
    code: "38",
  },
  {
    utility: true,
    name: "RShift",
    location: 2,
    size: "tripplesize",
    action: function () {},
    code: "16",
  },
  {
    utility: true,
    name: "LCtrl",
    location: 1,
    action: function () {},
    code: "17",
  },
  {
    utility: true,
    name: "LAlt",
    location: 1,
    action: function () {},
    code: "18",
  },
  {
    rus: " ",
    en: " ",
    size: "spacebar",
    code: "32",
  },
  {
    utility: true,
    name: "RAlt",
    location: 2,
    action: function () {},
    code: "18",
  },

  {
    rus: String.fromCharCode(5130),
    en: String.fromCharCode(5130),
    code: "37",
  },
  {
    rus: String.fromCharCode(5121),
    en: String.fromCharCode(5121),
    code: "40",
  },
  {
    rus: String.fromCharCode(5125),
    en: String.fromCharCode(5125),
    code: "39",
  },
  {
    utility: true,
    name: "RCtrl",
    location: 2,
    action: function () {},
    code: "17",
  },
];

export default keys;