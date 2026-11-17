
// PHONE DOCTOR - Website JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // Current year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Close menu after clicking a link
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("active");
    });
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".card, .about, .heading").forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });

  // Back to top
  const topButton = document.getElementById("backToTop");

  if (topButton) {
    window.addEventListener("scroll", () => {
      topButton.style.display =
        window.scrollY > 400 ? "block" : "none";
    });

    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});
