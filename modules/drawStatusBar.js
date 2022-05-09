import { drawKeyboard } from "./drawKeyboard.js";

export function drawStatusBar(parent) {
    let statusBar = document.createElement("div");
    statusBar.classList.add("status-bar");
    drawCapsLockIndicator(statusBar);
    drawLanguageField(statusBar);
    let hint = document.createElement("div");
    hint.textContent =
      "Press Alt + left Shift to change language or select manually.";
    statusBar.append(hint);
    parent.append(statusBar);
    return statusbar;
  }

  function drawCapsLockIndicator(parent) {
    let capsLockIndicatorWrapper = document.createElement("div");
    capsLockIndicatorWrapper.classList.add("capslock-indicator-wrapper");
    let capsLockIndicatorLabel = document.createElement("span");
    capsLockIndicatorLabel.textContent = "CapsLock:";
    capsLockIndicatorWrapper.append(capsLockIndicatorLabel);
    let capsLockIndicator = document.createElement("div");
    capsLockIndicator.classList.add("capslock-indicator");
    capsLockIndicatorWrapper.append(capsLockIndicator);
    parent.append(capsLockIndicatorWrapper);
  }

  function drawLanguageField(parent) {
    let languageField = document.createElement("select");
    languageField.classList.add("language-field");
    let languageOption = document.createElement("option");
    languageOption.value = "rus";
    languageOption.textContent = "Russian";
    languageField.append(languageOption);
    languageOption = document.createElement("option");
    languageOption.value = "en";
    languageOption.textContent = "English";
    languageField.append(languageOption);
    
    localStorage.getItem('language') && localStorage.getItem('language') == "rus"
      ? (languageField.selectedIndex = 0)
      : (languageField.selectedIndex = 1);
    localStorage.setItem('language', languageField.selectedOptions[0].value);
    parent.append(languageField);
    languageField.addEventListener("change", (event) => {
      if (document.querySelector(".keyboard"))
        document.querySelector(".keyboard").remove();
      drawKeyboard(
        document.querySelector("body"),
        languageField.selectedOptions[0].value,
        document.querySelector("textarea")
      );
      localStorage.setItem(
        "language",
        document.querySelector(".language-field").selectedOptions[0].value
      );
    });
    return languageField;
  }