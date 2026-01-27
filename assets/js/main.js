// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     GLOBAL (ALL PAGES)
  ============================================================ */

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

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

      // hero (HOME)
      hero1_title: "Prioritize nature<br>and people",
      hero1_sub: "We create a future where people and nature are together",
      hero2_title: "Growth and<br>Innovation",
      hero2_sub: "Take a look at Dohwa Engineering's history of endless growth and innovation",
      hero3_title: "Challenge<br>to the world",
      hero3_sub: "DOHWA, the unrivaled multidisciplinary engineering firm, continues to tackle global challenges.",
      go: "GO",
      scroll: "Scroll",

      // business (HOME)
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

      // projects (HOME)
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

      // news (HOME)
      sec_news: "NEWS",
      news_desc: "News about Dohwa’s efforts to help develop regions and the nation.",
      news_tag_awards: "Awards",
      news_2025: "2025 ENR The Top<br>Global & International<br>Design Firms List",
      news_2024: "2024 ENR The Top<br>Global & International<br>Design Firms List",
      news_2023: "2023 ENR The Top<br>Global & International<br>Design Firms List",
      news_2022: "2022 ENR The Top<br>Global & International<br>Design Firms List",
      details: "Details",

      // career (HOME)
      career_kicker: "CAREER",
      career_title: "We welcome creative individuals full of passion and enthusiasm.",
      career_desc:
        "\"Human-centered thinking\", which puts people first, has been the driving force behind our management for about 60 years, and<br>" +
        "\"progressive action\" and<br>" +
        "\"creative thinking\" are forces that propel us forward as we pioneer the future.",
      career_btn1: "Go to Recruitment Information <span class='career-arrow'>›</span>",
      career_btn2: "Go to Recruitment Website <span class='career-arrow'>›</span>",

      // wordmark + sustain (HOME)
      wordmark: "DOHWA ENGINEERING",
      sustain_title: "Sustainable Management",
      sustain_desc:
        "DOHWA will continue to provide the best service<br />" +
        "based on its best technology and quality for both<br />" +
        "clients and partners",
      sustain_box1: "<span>Management</span><br /><span>through Sharing</span>",
      sustain_box2: "<span>Safety and Quality</span><br /><span>Management</span>",
      sustain_box3: "<span>Ethics and</span><br /><span>Compliance</span><br /><span>Management</span>",

      // footer
      family_site: "Family Site",
      family_official: "DOHWA Official",
      footer_address: "12 Sejong-daero 12-gil, Jung District, Seoul",
      privacy: "Privacy Policy",
      ethics: "Ethics Hotline",
      rights: "DOHWA Engineering Co., LTD. All RIGHTS RESERVED",
      top: "TOP",

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

      // hero (HOME)
      hero1_title: "자연과 사람을<br>우선합니다",
      hero1_sub: "사람과 자연이 함께하는 미래를 만듭니다",
      hero2_title: "성장과<br>혁신",
      hero2_sub: "도화엔지니어링의 끝없는 성장과 혁신의 역사를 만나보세요",
      hero3_title: "세계로의<br>도전",
      hero3_sub: "도화는 독보적인 종합 엔지니어링 기업으로서 글로벌 과제에 계속 도전합니다.",
      go: "바로가기",
      scroll: "스크롤",

      // business (HOME)
      sec_business: "사업분야",
      business_desc: "도화는 독보적인 종합 엔지니어링 기업으로서 글로벌 과제에 계속 도전합니다.",
      biz1_eyebrow: "물 분야",
      biz1_title: "물 분야 <span class='biz-arrow'>›</span>",
      biz1_li1: "상수도",
      biz1_li2: "하수도",
      biz1_li3: "하천/수자원/댐/수력발전",
      biz2_eyebrow: "도시 분야",
      biz2_title: "도시 분야 <span class='biz-arrow'>›</span>",
      biz2_li1: "도시계획 및 개발",
      biz2_li2: "조경/레저",
      biz2_li3: "스마트시티",

      // projects (HOME)
      sec_project: "프로젝트",
      project_desc: "도화는 글로벌 과제에 계속 도전합니다.",
      proj1: "베트남 레투이 태양광(PV) 발전소 EPC 사업",
      proj2: "SP1 하츠카이치 태양광 발전소 EPC 사업",
      proj3: "신지 풍력단지 개발 EPC 사업",
      proj4: "일본 이세시마 태양광(PV) 발전소 EPC 사업",
      proj5: "K-water 광역정수장 탄소중립(Net-Zero) 태양광 추진 용역",
      proj6: "대덕이노폴리스 동측 진입도로 개설사업 기본설계",
      proj7: "노들로 도로 구조개선 기본 및 실시설계",
      proj8: "새만금 신공항 건설 타당성조사 및 마스터플랜",

      // news (HOME)
      sec_news: "뉴스",
      news_desc: "지역과 국가 발전을 위한 도화의 소식을 전합니다.",
      news_tag_awards: "수상",
      news_2025: "2025 ENR<br>글로벌·인터내셔널<br>디자인 기업",
      news_2024: "2024 ENR<br>글로벌·인터내셔널<br>디자인 기업",
      news_2023: "2023 ENR<br>글로벌·인터내셔널<br>디자인 기업",
      news_2022: "2022 ENR<br>글로벌·인터내셔널<br>디자인 기업",
      details: "자세히",

      // career (HOME)
      career_kicker: "채용",
      career_title: "열정과 도전정신을 가진 인재를 기다립니다.",
      career_desc:
        "\"사람 중심\"의 생각은 약 60년간 도화 경영의 원동력이었고,<br>" +
        "\"진취적 행동\"과<br>" +
        "\"창의적 사고\"는 미래를 개척하는 추진력입니다.",
      career_btn1: "채용 안내 <span class='career-arrow'>›</span>",
      career_btn2: "채용 사이트 <span class='career-arrow'>›</span>",

      // wordmark + sustain (HOME)
      wordmark: "DOHWA ENGINEERING",
      sustain_title: "지속가능경영",
      sustain_desc:
        "도화는 최고의 기술과 품질을 바탕으로<br />" +
        "고객과 파트너에게 최상의 서비스를<br />" +
        "제공하겠습니다",
      sustain_box1: "<span>상생</span><br /><span>경영</span>",
      sustain_box2: "<span>안전·품질</span><br /><span>경영</span>",
      sustain_box3: "<span>윤리·준법</span><br /><span>경영</span>",

      // footer
      family_site: "패밀리 사이트",
      family_official: "도화 공식",
      footer_address: "서울특별시 중구 세종대로12길 12",
      privacy: "개인정보처리방침",
      ethics: "윤리신고센터",
      rights: "DOHWA Engineering Co., LTD. All RIGHTS RESERVED",
      top: "TOP",

      // ABOUT
      about_kicker: "기업 개요",
      about_title: "DOHWA는 세상을 설계하고,<br>함께 미래를 만듭니다",
      overview_heading: "개요",
      overview_body:
        "<p><strong>도화엔지니어링(주)</strong>은 대한민국 1위 종합 엔지니어링 컨설팅 기업입니다.</p>" +
        "<p>기획, 설계, 감리, 시운전, 평가, 컨설팅 등 전 엔지니어링 분야에서 서비스를 제공합니다.</p>" +
        "<p>EPC 사업까지 확장하며 글로벌 엔지니어링 기업으로 성장하고 있습니다.</p>",
    },

    // Keep these if you want the buttons to still work (they will fallback to English)
    es: {},
    nl: {},
  };

  const langNav = document.querySelector(".lang-switch");
  const langLinks = Array.from(document.querySelectorAll(".lang-switch a[data-lang]"));

  function applyLang(lang) {
    const dict = i18n[lang] && Object.keys(i18n[lang]).length ? i18n[lang] : i18n.en;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      if (dict[key] != null) el.innerHTML = dict[key];
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

    overlay.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeOverlay();
    });

    document.addEventListener("click", (e) => {
      if (!overlay.classList.contains("is-open")) return;
      if (!overlay.contains(e.target) && !burger.contains(e.target)) closeOverlay();
    });

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
