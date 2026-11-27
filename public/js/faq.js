document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".ms-faq__trigger");
  if (!trigger) return;

  const item = trigger.closest("[data-faq-item]");
  if (!item) return;

  const isOpen = item.classList.toggle("is-open");
  trigger.setAttribute("aria-expanded", String(isOpen));
});