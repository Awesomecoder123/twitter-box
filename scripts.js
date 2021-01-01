import { dom, toggleButton, togglecharCountError } from "./lib.js";

dom.textarea.addEventListener("keyup", function handleTextarea() {
  const charCount = this.value.length;
  // 'this' represents whatever invoked this function
  dom.charCountSpan.innerText = charCount;
  toggleButton(charCount);
  togglecharCountError(charCount);
});
