// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Footer year (works on any page IF you have <span id="year"></span>)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ============================================================
  // HOME PAGE only (runs if .hero-slider exists)
  // ============================================================
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    // Page-load fade in (logo, hamburger, hero text/arrows)
    requestAnimationFrame(() => document.body.classList.add("is-loaded"));

    // ----------------------------------------------------------
    // Language switch (KOR / ENG / ESP / DUTCH)
    // IMPORTANT:
    // - data-i18n="key" uses text (innerHTML)
    // - data-i18n-html="key" uses HTML (innerHTML)
    // Your HTML uses: hero1_title, hero1_sub, hero2_title, hero2_sub, hero3_title, hero3_sub, go
    // ----------------------------------------------------------
    const LANG_KEY = "dohwa_lang";

    const i18n = {
      en: {
        hero1_title: "Prioritize nature<br>and people",
        hero1_sub: "We create a future where people and nature are together",
        hero2_title: "Growth and<br>Innovation",
        hero2_sub: "Take a look at Dohwa Engineering's history of endless growth and innovation",
        hero3_title: "Challenge<br>to the world",
        hero3_sub:
          "DOHWA, the unrivaled multidisciplinary engineering firm, continues to tackle global challenges.",
        go: "GO",
      },
      ko: {
        hero1_title: "자연과 사람을<br>우선합니다",
        hero1_sub: "사람과 자연이 함께하는 미래를 만듭니다",
        hero2_title: "성장과<br>혁신",
        hero2_sub: "도화엔지니어링의 끊임없는 성장과 혁신의 역사를 확인해보세요",
        hero3_title: "세계를 향한<br>도전",
        hero3_sub: "도화는 독보적인 종합 엔지니어링 기업으로서 글로벌 과제에 도전합니다.",
        go: "GO",
      },
      es: {
        hero1_title: "Prioriza la naturaleza<br>y las personas",
        hero1_sub: "Creamos un futuro donde las personas y la naturaleza están juntas",
        hero2_title: "Crecimiento e<br>Innovación",
        hero2_sub:
          "Conoce la historia de crecimiento e innovación constante de Dohwa Engineering",
        hero3_title: "Desafío<br>al mundo",
        hero3_sub:
          "DOHWA, la firma multidisciplinaria líder, continúa afrontando desafíos globales.",
        go: "IR",
      },
      nl: {
        hero1_title: "Prioriteit voor natuur<br>en mensen",
        hero1_sub: "We creëren een toekomst waarin mensen en natuur samen zijn",
        hero2_title: "Groei en<br>Innovatie",
        hero2_sub:
          "Bekijk de geschiedenis van eindeloze groei en innovatie van Dohwa Engineering",
        hero3_title: "Uitdaging<br>voor de wereld",
        hero3_sub:
          "DOHWA, het toonaangevende multidisciplinaire ingenieursbureau, blijft wereldwijde uitdagingen aanpakken.",
        go: "GA",
      },
    };

    const langNav = document.querySelector(".lang-switch");
    const langLinks = Array.from(document.querySelectorAll(".lang-switch a[data-lang]"));

    const applyLang = (lang) => {
      const dict = i18n[lang] || i18n.en;

      // data-i18n (text keys)
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key) return;
        if (dict[key] == null) return;
        el.innerHTML = dict[key];
      });

      // data-i18n-html (html keys)
      document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (!key) return;
        if (dict[key] == null) return;
        el.innerHTML = dict[key];
      });

      // Active state
      langLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.lang === lang));

      // Save
      try {
        localStorage.setItem(LANG_KEY, lang);
      } catch (e) {
        // ignore
      }
    };

    // Click handling
    if (langNav) {
      langNav.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-lang]");
        if (!a) return;
        e.preventDefault();
        applyLang(a.dataset.lang);
      });
    }

    // Load saved lang (default = en)
    let saved = "en";
    try {
      saved = localStorage.getItem(LANG_KEY) || "en";
    } catch (e) {
      saved = "en";
    }
    applyLang(saved);

    // ----------------------------------------------------------
    // Reveal on scroll (CAREER + SUSTAIN + boxes etc.)
    // Use:
    //   class="reveal"       -> normal fade up
    //   class="reveal-drop"  -> drop-in
    // JS will add class "is-in" when visible
    // ----------------------------------------------------------
    const revealTargets = Array.from(
      document.querySelectorAll(".reveal, .reveal-drop")
    );

    if (revealTargets.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.15 }
      );

      revealTargets.forEach((el) => io.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-in"));
    }

    // ----------------------------------------------------------
    // Hamburger overlay menu
    // ----------------------------------------------------------
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

      overlay.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName === "A") closeOverlay();
      });

      document.addEventListener("click", (e) => {
        const target = e.target;
        const isOpen = overlay.classList.contains("is-open");
        const clickedInsideOverlay = overlay.contains(target);
        const clickedBurger = burger.contains(target);
        if (isOpen && !clickedInsideOverlay && !clickedBurger) closeOverlay();
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeOverlay();
      });
    }

    // ----------------------------------------------------------
    // HERO slider (3 slides)
    // ----------------------------------------------------------
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const prevBtn = document.querySelector(".hero-arrow--left");
    const nextBtn = document.querySelector(".hero-arrow--right");

    if (slides.length) {
      let index = slides.findIndex((s) => s.classList.contains("is-active"));
      if (index < 0) index = 0;

      const show = (i) => {
        slides.forEach((s) => s.classList.remove("is-active"));
        slides[i].classList.add("is-active");

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

      document.addEventListener("keydown", (e) => {
        const overlayOpen = overlay && overlay.classList.contains("is-open");
        if (overlayOpen) return;
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      });

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

      [prevBtn, nextBtn].forEach((btn) => {
        if (!btn) return;
        btn.addEventListener("click", () => {
          stopAuto();
          startAuto();
        });
      });

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopAuto();
        else startAuto();
      });
    }

    // ----------------------------------------------------------
    // PROJECT slider (8 slides) “book effect”
    // ----------------------------------------------------------
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

    // ----------------------------------------------------------
    // NEWS slider (2 pages) — sliding track
    // ----------------------------------------------------------
    const newsSlider = document.querySelector(".news-slider");
    if (newsSlider) {
      const track = newsSlider.querySelector(".news-track");
      const pages = Array.from(newsSlider.querySelectorAll(".news-page"));
      const nPrev = newsSlider.querySelector(".news-prev");
      const nNext = newsSlider.querySelector(".news-next");

      if (track && pages.length) {
        let current = pages.findIndex((p) => p.classList.contains("is-active"));
        if (current < 0) current = 0;

        const render = () => {
          pages.forEach((p, i) => p.classList.toggle("is-active", i === current));
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

    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedToggle = toggle.contains(target);
      const clickedNav = nav.contains(target);
      if (!clickedToggle && !clickedNav) nav.style.display = "none";
    });
  }
});
