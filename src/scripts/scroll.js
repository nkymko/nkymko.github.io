// Scroll-reveal animations + image de-saturate on view.

// 1. Reveal elements as they enter the viewport.
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-reveal-delay") || "0";
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// 2. Remove grayscale from photos when they scroll into view.
const photoEls = document.querySelectorAll("[data-degray]");
if (photoEls.length && "IntersectionObserver" in window) {
  const photoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("grayscale");
        } else {
          entry.target.classList.add("grayscale");
        }
      });
    },
    { threshold: 0.35 }
  );
  photoEls.forEach((el) => photoObserver.observe(el));
}
