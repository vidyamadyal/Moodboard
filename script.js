document.querySelectorAll("button").forEach(btn =>
  btn.addEventListener("click", () => {
    document.body.className = btn.dataset.theme;
  })
);