// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Footer year (works on all pages)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ============================================================
  // HOME PAGE: hero + overlay + sliders + (optional) scroll fade
  // Only runs if .hero-slider exists
  // ============================================================
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    // Fade-in on load
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));

    // -------------------------
    // Hamburger overlay menu
    // -------------------------
    const burger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".overlay-nav");

    const closeOverlay = () => {
      if (!burger || !overlay) return;
      overlay.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      overlay.setAttribute("aria-hidden", "true");
    };

    if (burger && overlay) {
      burger.addEventListener("click", () => {
        const isOpen = overlay.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(isOpen));
        overlay.setAttribute("aria-hidden", String(!isOpen));
      });

      // Close overlay when a link is clicked
      overlay.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName === "A") closeOverlay();
      });

      // Close overlay when tapping outside
      document.addEventListener("click", (e) => {
        const target = e.target;
        const clickedInsideOverlay = overlay.contains(target);
        const clickedBurger = burger.contains(target);
        const isOpen = overlay.classList.contains("is-open");
        if (isOpen && !clickedInsideOverlay && !clickedBurger) closeOverlay();
      });

      // Close on ESC
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeOverlay();
      });
    }

    // -------------------------
    // HERO slider (3 slides)
    // -------------------------
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const prevBtn = document.querySelector(".hero-arrow--left");
    const nextBtn = document.querySelector(".hero-arrow--right");

    if (slides.length) {
      let index = slides.findIndex((s) => s.classList.contains("is-active"));
      if (index < 0) index = 0;

      const show = (i) => {
        if (i < 0 || i >= slides.length) return;

        slides.forEach((s) => s.classList.remove("is-active"));
        slides[i].classList.add("is-active");

        // Re-trigger content fade per slide smoothly
        const content = slides[i].querySelector(".hero-content");
        if (content) {
          content.style.opacity = "0";
          requestAnimationFrame(() => (content.style.opacity = ""));
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

      // Keyboard controls (only when overlay menu is not open)
      document.addEventListener("keydown", (e) => {
        const overlayOpen = overlay && overlay.classList.contains("is-open");
        if (overlayOpen) return;
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      });

      // Auto-advance
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
      [prevBtn, nextBtn].forEach((btn) => {
        if (!btn) return;
        btn.addEventListener("click", () => {
          stopAuto();
          startAuto();
        });
      });

      // Pause auto when tab is hidden, resume when visible
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopAuto();
        else startAuto();
      });
    }

    // -------------------------
    // PROJECT slider (8 slides) “book effect”
    // -------------------------
    const projSlider = document.querySelector(".proj-slider");
    if (projSlider) {
      const cards = Array.from(projSlider.querySelectorAll(".proj-card"));
      const pPrev = projSlider.querySelector(".proj-arrow--left");
      const pNext = projSlider.querySelector(".proj-arrow--right");
      const stage = projSlider.querySelector(".proj-stage");

      const idxEl = document.getElementById("projIndex");
      const totalEl = document.getElementById("projTotal");

      const total = cards.length;
      if (totalEl) totalEl.textContent = String(total);
      if (!total) {
        // nothing to run
      } else {
        let current = cards.findIndex((c) => c.classList.contains("is-active"));
        if (current < 0) current = 0;

        const render = () => {
          const prevI = (current - 1 + total) % total;
          const nextI = (current + 1) % total;

          cards.forEach((c, i) => {
            c.classList.remove("is-active", "is-prev", "is-next", "is-hidden");
            if (i === current) c.classList.add("is-active");
            else if (i === prevI) c.classList.add("is-prev");
            else if (i === nextI) c.classList.add("is-next");
            else c.classList.add("is-hidden");
          });

          if (idxEl) idxEl.textContent = String(current + 1);
        };

        const goPrev = () => {
          current = (current - 1 + total) % total;
          render();
        };

        const goNext = () => {
          current = (current + 1) % total;
          render();
        };

        if (pPrev) pPrev.addEventListener("click", goPrev);
        if (pNext) pNext.addEventListener("click", goNext);

        // Swipe on mobile
        let startX = 0;
        if (stage) {
          stage.addEventListener(
            "touchstart",
            (e) => (startX = e.touches[0].clientX),
            { passive: true }
          );
          stage.addEventListener(
            "touchend",
            (e) => {
              const endX = e.changedTouches[0].clientX;
              const diff = endX - startX;
              if (Math.abs(diff) > 50) diff > 0 ? goPrev() : goNext();
            },
            { passive: true }
          );
        }

        render();
      }
    }

    // -------------------------
    // NEWS slider (2 pages) — sliding track
    // -------------------------
    const newsSlider = document.querySelector(".news-slider");
    if (newsSlider) {
      const track = newsSlider.querySelector(".news-track");
      const pages = Array.from(newsSlider.querySelectorAll(".news-page"));
      const nPrev = newsSlider.querySelector(".news-prev");
      const nNext = newsSlider.querySelector(".news-next");

      if (track && pages.length) {
        let current = 0;

        const render = () => {
          // only for your CSS hooks (optional)
          pages.forEach((p, i) => p.classList.toggle("is-active", i === current));
          // actual slide
          track.style.transform = `translateX(-${current * 100}%)`;
        };

        const goPrev = () => {
          current = (current - 1 + pages.length) % pages.length;
          render();
        };

        const goNext = () => {
          current = (current + 1) % pages.length;
          render();
        };

        if (nPrev) nPrev.addEventListener("click", goPrev);
        if (nNext) nNext.addEventListener("click", goNext);

        // Swipe
        let startX = 0;
        newsSlider.addEventListener(
          "touchstart",
          (e) => (startX = e.touches[0].clientX),
          { passive: true }
        );
        newsSlider.addEventListener(
          "touchend",
          (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = endX - startX;
            if (Math.abs(diff) > 50) diff > 0 ? goPrev() : goNext();
          },
          { passive: true }
        );

        render();
      }
    }

    // -------------------------
    // Fade-in on scroll (for CAREER + any section)
    // Add class="reveal" to elements you want to animate
    // -------------------------
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if (reveals.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { root: null, threshold: 0.15 }
      );

      reveals.forEach((el) => io.observe(el));
    }

    // Home page handled—do not run standard nav toggle below
    return;
  }

  // ============================================================
  // STANDARD PAGES: mobile menu toggle for .site-header
  // ============================================================
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

    // Close if user clicks outside
    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedToggle = toggle.contains(target);
      const clickedNav = nav.contains(target);
      if (!clickedToggle && !clickedNav) nav.style.display = "none";
    });
  }

  // Optional: fade-in on scroll for standard pages too
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  }
});
