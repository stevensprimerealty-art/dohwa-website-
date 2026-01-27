// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     GLOBAL (ALL PAGES)
  ============================================================ */

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Loaded state
  requestAnimationFrame(() => document.body.classList.add("is-loaded"));

  /* ============================================================
     LANGUAGE SWITCH (ALL PAGES)
  ============================================================ */

  const LANG_KEY = "dohwa_lang";

  const i18n = {
    en: {
      // language labels
      lang_ko: "Korean",
      lang_en: "English",
      lang_es: "Español",
      lang_nl: "Dutch",

      // nav
      nav_about: "About",
      nav_business: "Business",
      nav_projects: "Projects",
      nav_news: "News",
      nav_careers: "Careers",
      nav_contact: "Contact",

      // ABOUT
      about_kicker: "COMPANY OVERVIEW",
      about_title: "DOHWA designs the world,<br>and together we create the future",
      overview_heading: "Overview",
      overview_body:
        "<p><strong>DOHWA Engineering Co., LTD.</strong> is South Korea's top-ranked multi-disciplinary engineering consulting firm.</p>" +
        "<p>DOHWA provides planning, feasibility studies, design, analysis, testing, supervision, commissioning, evaluation, consulting and training across water, urban planning, transport, structures, ports, rail and environmental engineering.</p>" +
        "<p>DOHWA is expanding into EPC services including procurement, construction, commissioning, permits and licensing.</p>" +
        "<p>As a global engineering leader, DOHWA exceeds expectations to build a brighter future.</p>",
    },

    ko: {
      // language labels
      lang_ko: "한국어",
      lang_en: "영어",
      lang_es: "스페인어",
      lang_nl: "네덜란드어",

      // nav
      nav_about: "회사소개",
      nav_business: "사업분야",
      nav_projects: "프로젝트",
      nav_news: "뉴스",
      nav_careers: "채용",
      nav_contact: "문의",

      // ABOUT
      about_kicker: "기업 개요",
      about_title: "DOHWA는 세상을 설계하고,<br>함께 미래를 만듭니다",
      overview_heading: "개요",
      overview_body:
        "<p><strong>도화엔지니어링(주)</strong>은 대한민국 1위 종합 엔지니어링 컨설팅 기업입니다.</p>" +
        "<p>기획, 설계, 감리, 시운전, 평가, 컨설팅 등 전 엔지니어링 분야에서 서비스를 제공합니다.</p>" +
        "<p>EPC 사업까지 확장하며 글로벌 엔지니어링 기업으로 성장하고 있습니다.</p>",
    },

    // Optional: keep buttons working even if you haven't translated yet
    es: {}, // add translations later
    nl: {}, // add translations later
  };

  const langNav = document.querySelector(".lang-switch");
  const langLinks = Array.from(document.querySelectorAll(".lang-switch a[data-lang]"));

  function applyLang(lang) {
    const dict = i18n[lang] && Object.keys(i18n[lang]).length ? i18n[lang] : i18n.en;

    // set <html lang="">
    document.documentElement.lang = lang;

    // data-i18n = textContent
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n"); // supports hyphenated attr
      if (!key) return;
      if (dict[key] != null) el.textContent = dict[key];
    });

    // data-i18n-html = innerHTML
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // active button
    langLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.lang === lang));

    // save
    localStorage.setItem(LANG_KEY, lang);
  }

  if (langNav) {
    langNav.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-lang]");
      if (!a) return;
      e.preventDefault();
      applyLang(a.dataset.lang);
    });
  }

  applyLang(localStorage.getItem(LANG_KEY) || "en");

  /* ============================================================
     HAMBURGER MENU (ALL PAGES)
  ============================================================ */

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
      const open = overlay.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      overlay.setAttribute("aria-hidden", String(!open));
    });

    // close when clicking any link inside overlay
    overlay.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeOverlay();
    });

    // close when clicking outside
    document.addEventListener("click", (e) => {
      if (!overlay.classList.contains("is-open")) return;
      if (!overlay.contains(e.target) && !burger.contains(e.target)) closeOverlay();
    });

    // close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOverlay();
    });
  }

  /* ============================================================
     HERO SLIDER (HOME ONLY)
  ============================================================ */

  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    const slides = Array.from(heroSlider.querySelectorAll(".hero-slide"));
    const prevBtn = document.querySelector(".hero-arrow--left");
    const nextBtn = document.querySelector(".hero-arrow--right");

    if (slides.length) {
      let index = slides.findIndex((s) => s.classList.contains("is-active"));
      if (index < 0) index = 0;

      const show = (i) => {
        slides.forEach((s) => s.classList.remove("is-active"));
        slides[i].classList.add("is-active");
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
    }
  }

  /* ============================================================
     PROJECT SLIDER (HOME ONLY)
  ============================================================ */

  const projSlider = document.querySelector(".proj-slider");
  if (projSlider) {
    const cards = Array.from(projSlider.querySelectorAll(".proj-card"));
    const prevBtn = projSlider.querySelector(".proj-arrow--left");
    const nextBtn = projSlider.querySelector(".proj-arrow--right");

    if (cards.length) {
      let index = cards.findIndex((c) => c.classList.contains("is-active"));
      if (index < 0) index = 0;

      const render = () => {
        cards.forEach((c, i) => c.classList.toggle("is-active", i === index));
      };

      const prev = () => {
        index = (index - 1 + cards.length) % cards.length;
        render();
      };

      const next = () => {
        index = (index + 1) % cards.length;
        render();
      };

      if (prevBtn) prevBtn.addEventListener("click", prev);
      if (nextBtn) nextBtn.addEventListener("click", next);

      render();
    }
  }

  /* ============================================================
     NEWS SLIDER (HOME ONLY)
  ============================================================ */

  const newsSlider = document.querySelector(".news-slider");
  if (newsSlider) {
    const pages = Array.from(newsSlider.querySelectorAll(".news-page"));
    const track = newsSlider.querySelector(".news-track");
    const prevBtn = newsSlider.querySelector(".news-prev");
    const nextBtn = newsSlider.querySelector(".news-next");

    if (track && pages.length) {
      let index = pages.findIndex((p) => p.classList.contains("is-active"));
      if (index < 0) index = 0;

      const render = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        pages.forEach((p, i) => p.classList.toggle("is-active", i === index));
      };

      const prev = () => {
        index = (index - 1 + pages.length) % pages.length;
        render();
      };

      const next = () => {
        index = (index + 1) % pages.length;
        render();
      };

      if (prevBtn) prevBtn.addEventListener("click", prev);
      if (nextBtn) nextBtn.addEventListener("click", next);

      render();
    }
  }
});
