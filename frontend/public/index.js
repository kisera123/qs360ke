document.addEventListener("DOMContentLoaded", () => {
  const separateFrontendPorts = ["3000", "5173", "5500"];
  const apiBaseUrl =
    window.API_BASE_URL ||
    (separateFrontendPorts.includes(window.location.port)
      ? "http://localhost:4000/api"
      : `${window.location.origin}/api`);
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.querySelector("[data-year]");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".filter").forEach((filter) => {
    filter.addEventListener("click", () => {
      document
        .querySelectorAll(".filter")
        .forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");
      const selected = filter.dataset.filter;
      document.querySelectorAll("[data-category]").forEach((item) => {
        item.hidden = selected !== "all" && item.dataset.category !== selected;
      });
    });
  });

  document.querySelectorAll("[data-subscribe]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const message = form.querySelector("[data-form-message]");
      const email = new FormData(form).get("email");

      try {
        const response = await fetch(`${apiBaseUrl}/contact/newsletter`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const result = await response.json();
        if (!response.ok)
          throw new Error(result.error || "Subscription failed.");
        if (message) message.textContent = result.message;
        form.reset();
      } catch (error) {
        if (message) message.textContent = error.message;
      }
    });
  });
});
