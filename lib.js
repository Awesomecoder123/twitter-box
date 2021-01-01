const form = document.querySelector("form");
const span = form.querySelector("span");

export const dom = {
  button: form.querySelector("button"),
  charCountSpan: span.querySelector("span"),
  span, // span: span
  textarea: form.querySelector("textarea"),
};

export const toggleButton = (count) => {
  if (count) {
    dom.button.disabled = false;
  } else {
    dom.button.disabled = true;
  }
};

export const togglecharCountError = (count) => {
  if (count > 140) {
    dom.span.classList.add("is-error");
  } else {
    dom.span.classList.remove("is-error");
  }
};
