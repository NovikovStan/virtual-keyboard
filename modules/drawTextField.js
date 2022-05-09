export function drawTextField(parent) {
  let textField = document.createElement("textarea");
  textField.setAttribute("cols", "130");
  textField.setAttribute("rows", "10");
  textField.setAttribute("spellcheck", "false");
  parent.append(textField);
  return textField;
}
