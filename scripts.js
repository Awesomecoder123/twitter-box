import dom from "./lib.js";

dom.textarea.addEventListener("keyup", function handleTextarea() {
  const charCount = this.value.length;
  if (charCount) {
    dom.button.disabled = false;
  } else {
    dom.button.disabled = true;
  }

  dom.charCountSpan.innerText = charCount;
});
