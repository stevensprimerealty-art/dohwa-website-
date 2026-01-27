// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Footer year (optional)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Add loaded class (safe on all pages)
  requestAnimationFrame(() => document.body.classList.add("is-loaded"));

  // ============================================================
  // ✅ LANGUAGE SWITCH (RUNS ON ALL PAGES)
  // ============================================================
  const LANG_KEY = "dohwa_lang";

  const i18n = {
    en: {
      lang_ko: "Korean",
      lang_en: "English",
      lang_es: "Español",
      lang_nl: "Dutch",

      nav_about: "About",
      nav_business: "Business",
      nav_projects: "Projects",
      nav_news: "News",
      nav_careers: "Careers",
      nav_contact: "Contact",

      hero1_title: "Prioritize nature<br>and people",
      hero1_sub: "We create a future where people and nature are together",
      hero2_title: "Growth and<br>Innovation",
      hero2_sub: "Take a look at Dohwa Engineering's history of endless growth and innovation",
      hero3_title: "Challenge<br>to the world",
      hero3_sub: "DOHWA, the unrivaled multidisciplinary engineering firm, continues to tackle global challenges.",
      go: "GO",
      scroll: "Scroll",

      sec_business: "BUSINESS",
      business_desc: "DOHWA, the unrivaled multi-disciplinary engineering firm, continues to tackle global challenges.",
      biz1_eyebrow: "Water Sector",
      biz1_title: "Water Sector <span class='biz-arrow'>›</span>",
      biz1_li1: "Water Supply",
      biz1_li2: "Sewerage",
      biz1_li3: "Rivers/water resource development/dams/hydropower",
      biz2_eyebrow: "Urban Sector",
      biz2_title: "Urban Sector <span class='biz-arrow'>›</span>",
      biz2_li1: "Urban planning and development",
      biz2_li2: "Landscape/Leisure",
      biz2_li3: "Smart cities",

      sec_project: "PROJECT",
      project_desc: "DOHWA continues to tackle global challenges.",
      proj1: "Engineering, Procurement and Construction for Photovoltaic (PV) Plant Construction Project in Le Thuy, Vietnam",
      proj2: "Engineering, Procurement, Construction for SP1 Hatsukaichi Solar PV Plant Project",
      proj3: "EPC construction for Sinji wind farm development project",
      proj4: "Engineering, Procurement and Construction for Photovoltaic (PV) Plant Construction Project in Iseshima, Japan",
      proj5: "On-land solar power promotion service for K-water wide-area water treatment plant carbon neutral (Net-Zero) Project",
      proj6: "Preliminary design for opening the east side access road Construction Project in Daedeok Innopolis",
      proj7: "Preliminary and detailed design for structural improvement of Nodeul-ro Road",
      proj8: "Feasibility Study and Master plan for Saemangeum new airport construction project",

      sec_news: "NEWS",
      news_desc: "News about Dohwa’s efforts to help develop regions and the nation.",
      news_tag_awards: "Awards",
      news_2025: "2025 ENR The Top<br>Global & International<br>Design Firms List",
      news_2024: "2024 ENR The Top<br>Global & International<br>Design Firms List",
      news_2023: "2023 ENR The Top<br>Global & International<br>Design Firms List",
      news_2022: "2022 ENR The Top<br>Global & International<br>Design Firms List",
      details: "Details",

      career_kicker: "CAREER",
      career_title: "We welcome creative individuals full of passion and enthusiasm.",
      career_desc:
        "\"Human-centered thinking\", which puts people first, has been the driving force behind our management for about 60 years, and<br>" +
        "\"progressive action\" and<br>" +
        "\"creative thinking\" are forces that propel us forward as we pioneer the future.",
      career_btn1: "Go to Recruitment Information <span class='career-arrow'>›</span>",
      career_btn2: "Go to Recruitment Website <span class='career-arrow'>›</span>",

      wordmark: "DOHWA ENGINEERING",

      sustain_title: "Sustainable Management",
      sustain_desc:
        "DOHWA will continue to provide the best service<br />" +
        "based on its best technology and quality for both<br />" +
        "clients and partners",
      sustain_box1: "<span>Management</span><br /><span>through Sharing</span>",
      sustain_box2: "<span>Safety and Quality</span><br /><span>Management</span>",
      sustain_box3: "<span>Ethics and</span><br /><span>Compliance</span><br /><span>Management</span>",

      family_site: "Family Site",
      family_official: "DOHWA Official",
      footer_address: "12 Sejong-daero 12-gil, Jung District, Seoul",
      privacy: "Privacy Policy",
      ethics: "Ethics Hotline",
      rights: "DOHWA Engineering Co., LTD. All RIGHTS RESERVED",
      top: "TOP",

      // ABOUT PAGE (add these keys to make about translate too)
      about_kicker: "COMPANY OVERVIEW",
      about_title: "DOHWA designs the world,<br>and together we create the future",
      overview_heading: "Overview",
      overview_body:
        "<p><strong>DOHWA Engineering Co., LTD.</strong> is South Korea's top-ranked multi-disciplinary engineering consulting firm.</p>" +
        "<p>DOHWA Engineering Co., LTD., is the Number 1 ranking multi-disciplinary engineering consulting firm in South Korea that provides Planning, Feasibility Studies, Design, Analysis, Testing, Supervision, Commissioning, Evaluation/Assessment, and Consulting and Training Services in all areas of Engineering such as the Water Supply and Wastewater Treatment, Water Resources Management, Urban Planning, Road Traffic, Structures, Harbor and Ports, Rail, Environmental Engineering, etc.</p>" +
        "<p>DOHWA is also expanding its businesses to become the EPC services provider that covers not only pure engineering areas such as Design and Supervision but also the Design of Constructions, Procurement and Supply of Materials, Construction Works, Commissioning, Permits and Licenses, etc.</p>" +
        "<p>DOHWA is a global engineering company that has been the first-of-its-kind in Korea, and is exceeding expectations by providing the best engineering services to bring about a brighter future.</p>"
    },

    // ⚠️ Keep your ko/es/nl objects as you already have them.
    // IMPORTANT: add these same ABOUT keys to ko/es/nl too if you want about translated:
    // about_kicker, about_title, overview_heading, overview_body
    ko: { /* keep your existing ko... plus add about keys */ },
    es: { /* keep your existing es... plus add about keys */ },
    nl: { /* keep your existing nl... plus add about keys */ }
  };

  const langNav = document.querySelector(".lang-switch");
  const langLinks = Array.from(document.querySelectorAll(".lang-switch a[data-lang]"));

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    document.documentElement.lang = lang;

    // data-i18n -> text only
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || dict[key] == null) return;
      el.textContent = dict[key];
    });

    // data-i18n-html -> html allowed
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key || dict[key] == null) return;
      el.innerHTML = dict[key];
    });

    langLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.lang === lang));
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

  // ============================================================
  // Reveal on scroll (ALL pages)
  // ============================================================
  const revealTargets = Array.from(document.querySelectorAll(".reveal, .reveal-drop"));
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

  // ============================================================
  // Hamburger overlay menu (ALL pages)
  // ============================================================
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
      const a = e.target.closest("a");
      if (a) closeOverlay();
    });

    document.addEventListener("click", (e) => {
      const isOpen = overlay.classList.contains("is-open");
      if (!isOpen) return;
      if (!overlay.contains(e.target) && !burger.contains(e.target)) closeOverlay();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeOverlay();
    });
  }

  // ============================================================
  // HOME ONLY: HERO slider (runs only if hero exists)
  // ============================================================
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
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
        if (overlay && overlay.classList.contains("is-open")) return;
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

    // ============================================================
    // HOME ONLY: PROJECT slider (book effect)
    // ============================================================
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
        stage.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
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

    // ============================================================
    // HOME ONLY: NEWS slider (2 pages)
    // ============================================================
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
        newsSlider.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
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
  }
});
