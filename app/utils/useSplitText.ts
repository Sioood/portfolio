export const useSplitText = (text: HTMLElement) => {
  const textContent = text.textContent;
  const spans = [];

  if (!textContent) return;

  text.innerHTML = "";

  for (const characters of textContent) {
    const span = document.createElement("span");
    span.classList.add("split-character");
    span.style.display = "inline-block";
    // span.textContent = characters;
    span.innerHTML = characters;
    spans.push(span);

    text.appendChild(span);
  }
};
