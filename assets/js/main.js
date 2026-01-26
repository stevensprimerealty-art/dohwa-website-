// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Footer year (works on all pages)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ===== HOME PAGE: fade-in + hero slider + hamburger overlay =====
  // (Only runs if .hero-slider exists)
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    // Fade-in on load
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));

    // Hamburger overlay menu (home page)
    const burger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".overlay-nav");
    if (burger && overlay) {
      burger.addEventListener("click", () => {
        const isOpen = overlay.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(isOpen));
        overlay.setAttribute("aria-hidden", String(!isOpen));
      });

      // Close overlay if user taps outside links (optional)
      overlay.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName === "A") {
          overlay.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
          overlay.setAttribute("aria-hidden", "true");
        }
      });
    }

    // Hero slider (3 slides, fade, arrow controls)
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const prevBtn = document.querySelector(".hero-arrow--left");
    const nextBtn = document.querySelector(".hero-arrow--right");

    if (slides.length) {
      let index = slides.findIndex(s => s.classList.contains("is-active"));
      if (index < 0) index = 0;

      const show = (i) => {
        slides.forEach(s => s.classList.remove("is-active"));
        slides[i].classList.add("is-active");

        // Re-trigger content fade per slide smoothly (no “breaks”)
        const content = slides[i].querySelector(".hero-content");
        if (content) {
          content.style.opacity = "0";
          requestAnimationFrame(() => {
            content.style.opacity = "";
          });
        }
      };

      const prev = () => {
        index = (index - 1 + slides.length) % slides.length;
        show(index);
      };

      const next = () => {
        index = (index + 1) % slides.length;
        show(index);
      };

      if (prevBtn) prevBtn.addEventListener("click", prev);
      if (nextBtn) nextBtn.addEventListener("click", next);

      // Optional auto-advance (set to false if you don't want it)
      const AUTO = true;
      const AUTO_MS = 6500;
      let timer = null;

      const stopAuto = () => {
        if (timer) clearInterval(timer);
        timer = null;
      };

      const startAuto = () => {
        if (!AUTO) return;
        stopAuto();
        timer = setInterval(next, AUTO_MS);
      };

      startAuto();

      // Pause/restart auto on manual click
      [prevBtn, nextBtn].forEach(btn => {
        if (!btn) return;
        btn.addEventListener("click", () => {
          stopAuto();
          startAuto();
        });
      });
    }

    // Home page handled—do not run standard nav toggle below
    return;
  }

  // ===== STANDARD PAGES: mobile menu toggle for .site-header =====
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "10px";
      nav.style.position = "absolute";
      nav.style.right = "4%";
      nav.style.top = "60px";
      nav.style.background = "#fff";
      nav.style.border = "1px solid #e5e7eb";
      nav.style.padding = "12px";
      nav.style.borderRadius = "12px";
      nav.style.minWidth = "160px";
      nav.style.zIndex = "100";
    });
  }
});
