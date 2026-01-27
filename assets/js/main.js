// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     GLOBAL (ALL PAGES)
  ============================================================ */

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  requestAnimationFrame(() => document.body.classList.add("is-loaded"));

  /* ============================================================
     LANGUAGE SWITCH (ALL PAGES) ✅ FIXED (FULL: EN/KO/ES/NL)
     - It changes everything that has: data-i18n OR data-i18n-html
     - Works on index + about (and any other page using those attributes)
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
      hero2_sub:
        "Take a look at Dohwa Engineering's history of endless growth and innovation",
      hero3_title: "Challenge<br>to the world",
      hero3_sub:
        "DOHWA, the unrivaled multidisciplinary engineering firm, continues to tackle global challenges.",
      go: "GO",
      scroll: "Scroll",

      // business (HOME)
      sec_business: "BUSINESS",
      business_desc:
        "DOHWA, the unrivaled multi-disciplinary engineering firm, continues to tackle global challenges.",
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
      proj1:
        "Engineering, Procurement and Construction for Photovoltaic (PV) Plant Construction Project in Le Thuy, Vietnam",
      proj2:
        "Engineering, Procurement, Construction for SP1 Hatsukaichi Solar PV Plant Project",
      proj3: "EPC construction for Sinji wind farm development project",
      proj4:
        "Engineering, Procurement and Construction for Photovoltaic (PV) Plant Construction Project in Iseshima, Japan",
      proj5:
        "On-land solar power promotion service for K-water wide-area water treatment plant carbon neutral (Net-Zero) Project",
      proj6:
        "Preliminary design for opening the east side access road Construction Project in Daedeok Innopolis",
      proj7:
        "Preliminary and detailed design for structural improvement of Nodeul-ro Road",
      proj8:
        "Feasibility Study and Master plan for Saemangeum new airport construction project",

      // news (HOME)
      sec_news: "NEWS",
      news_desc:
        "News about Dohwa’s efforts to help develop regions and the nation.",
      news_tag_awards: "Awards",
      news_2025:
        "2025 ENR The Top<br>Global & International<br>Design Firms List",
      news_2024:
        "2024 ENR The Top<br>Global & International<br>Design Firms List",
      news_2023:
        "2023 ENR The Top<br>Global & International<br>Design Firms List",
      news_2022:
        "2022 ENR The Top<br>Global & International<br>Design Firms List",
      details: "Details",

      // career (HOME)
      career_kicker: "CAREER",
      career_title:
        "We welcome creative individuals full of passion and enthusiasm.",
      career_desc:
        "\"Human-centered thinking\", which puts people first, has been the driving force behind our management for about 60 years, and<br>" +
        "\"progressive action\" and<br>" +
        "\"creative thinking\" are forces that propel us forward as we pioneer the future.",
      career_btn1:
        "Go to Recruitment Information <span class='career-arrow'>›</span>",
      career_btn2:
        "Go to Recruitment Website <span class='career-arrow'>›</span>",

      // wordmark + sustain (HOME)
      wordmark: "DOHWA ENGINEERING",
      sustain_title: "Sustainable Management",
      sustain_desc:
        "DOHWA will continue to provide the best service<br />" +
        "based on its best technology and quality for both<br />" +
        "clients and partners",
      sustain_box1: "<span>Management</span><br /><span>through Sharing</span>",
      sustain_box2:
        "<span>Safety and Quality</span><br /><span>Management</span>",
      sustain_box3:
        "<span>Ethics and</span><br /><span>Compliance</span><br /><span>Management</span>",

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
      about_title:
        "DOHWA designs the world,<br>and together we create the future",
      overview_heading: "Overview",
      overview_body:
        "<p><strong>DOHWA Engineering Co., LTD.</strong> is South Korea's top-ranked multi-disciplinary engineering consulting firm.</p>" +
        "<p>DOHWA Engineering Co., LTD. is the Number 1 ranking multi-disciplinary engineering consulting firm in South Korea that provides Planning, Feasibility Studies, Design, Analysis, Testing, Supervision, Commissioning, Evaluation/Assessment, and Consulting and Training Services in all areas of Engineering such as the Water Supply and Wastewater Treatment, Water Resources Management, Urban Planning, Road Traffic, Structures, Harbor and Ports, Rail, Environmental Engineering, etc.</p>" +
        "<p>DOHWA is also expanding its businesses to become the EPC services provider that covers not only pure engineering areas such as Design and Supervision but also the Design of Constructions, Procurement and Supply of Materials, Construction Works, Commissioning, Permits and Licenses, etc.</p>" +
        "<p>DOHWA is a global engineering company that has been the first-of-its-kind in Korea, and is exceeding expectations by providing the best engineering services to bring about a brighter future.</p>",
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
      hero3_sub:
        "도화는 독보적인 종합 엔지니어링 기업으로서 글로벌 과제에 계속 도전합니다.",
      go: "바로가기",
      scroll: "스크롤",

      // business (HOME)
      sec_business: "사업분야",
      business_desc:
        "도화는 독보적인 종합 엔지니어링 기업으로서 글로벌 과제에 계속 도전합니다.",
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
        "<p>도화는 기획, 타당성 조사, 설계, 감리, 시운전, 평가/진단, 컨설팅 및 교육 등 엔지니어링 전 분야에서 서비스를 제공합니다.</p>" +
        "<p>또한 설계·감리 등 순수 엔지니어링을 넘어 EPC 서비스 제공자로 사업을 확대하고 있습니다.</p>" +
        "<p>도화는 더 밝은 미래를 위해 최고의 엔지니어링 서비스를 제공하며 기대를 뛰어넘고 있습니다.</p>",
    },

    // ✅ Now ES/NL also change the page (not empty anymore)
    es: {
      lang_ko: "Coreano",
      lang_en: "Inglés",
      lang_es: "Español",
      lang_nl: "Neerlandés",

      nav_about: "Acerca de",
      nav_business: "Negocio",
      nav_projects: "Proyectos",
      nav_news: "Noticias",
      nav_careers: "Carreras",
      nav_contact: "Contacto",

      hero1_title: "Prioriza la naturaleza<br>y las personas",
      hero1_sub:
        "Creamos un futuro donde las personas y la naturaleza están juntas",
      hero2_title: "Crecimiento e<br>innovación",
      hero2_sub:
        "Conoce la historia de crecimiento e innovación de Dohwa Engineering",
      hero3_title: "Desafío<br>al mundo",
      hero3_sub:
        "DOHWA continúa afrontando desafíos globales como firma multidisciplinaria líder.",
      go: "IR",
      scroll: "Desplazar",

      sec_business: "NEGOCIO",
      business_desc:
        "DOHWA continúa afrontando desafíos globales como firma multidisciplinaria líder.",
      biz1_eyebrow: "Sector Agua",
      biz1_title: "Sector Agua <span class='biz-arrow'>›</span>",
      biz1_li1: "Abastecimiento de agua",
      biz1_li2: "Saneamiento",
      biz1_li3: "Ríos/recursos hídricos/presas/hidroeléctrica",
      biz2_eyebrow: "Sector Urbano",
      biz2_title: "Sector Urbano <span class='biz-arrow'>›</span>",
      biz2_li1: "Planificación y desarrollo urbano",
      biz2_li2: "Paisaje/Ocio",
      biz2_li3: "Ciudades inteligentes",

      sec_project: "PROYECTO",
      project_desc: "DOHWA continúa afrontando desafíos globales.",
      proj1: "EPC para planta fotovoltaica (PV) en Le Thuy, Vietnam",
      proj2: "EPC para la planta solar PV SP1 Hatsukaichi",
      proj3: "EPC para el proyecto de parque eólico Sinji",
      proj4: "EPC para planta fotovoltaica (PV) en Iseshima, Japón",
      proj5: "Servicio de promoción solar para proyecto Net-Zero de K-water",
      proj6: "Diseño preliminar de la vía de acceso este en Daedeok Innopolis",
      proj7:
        "Diseño preliminar y detallado de mejora estructural de Nodeul-ro",
      proj8:
        "Estudio de viabilidad y plan maestro del nuevo aeropuerto de Saemangeum",

      sec_news: "NOTICIAS",
      news_desc:
        "Noticias sobre los esfuerzos de Dohwa para apoyar el desarrollo regional y nacional.",
      news_tag_awards: "Premios",
      news_2025:
        "2025 ENR<br>Top Global e Internacional<br>Firmas de Diseño",
      news_2024:
        "2024 ENR<br>Top Global e Internacional<br>Firmas de Diseño",
      news_2023:
        "2023 ENR<br>Top Global e Internacional<br>Firmas de Diseño",
      news_2022:
        "2022 ENR<br>Top Global e Internacional<br>Firmas de Diseño",
      details: "Detalles",

      career_kicker: "CARRERAS",
      career_title:
        "Damos la bienvenida a personas creativas con pasión y entusiasmo.",
      career_desc:
        "\"Pensamiento centrado en las personas\" ha sido la fuerza impulsora durante unos 60 años y<br>" +
        "\"acción progresiva\" y<br>" +
        "\"pensamiento creativo\" nos llevan a abrir el futuro.",
      career_btn1:
        "Ir a Información de Reclutamiento <span class='career-arrow'>›</span>",
      career_btn2:
        "Ir al Sitio de Reclutamiento <span class='career-arrow'>›</span>",

      wordmark: "DOHWA ENGINEERING",
      sustain_title: "Gestión Sostenible",
      sustain_desc:
        "DOHWA seguirá brindando el mejor servicio<br />" +
        "basado en su mejor tecnología y calidad para<br />" +
        "clientes y socios",
      sustain_box1: "<span>Gestión</span><br /><span>compartida</span>",
      sustain_box2:
        "<span>Gestión</span><br /><span>de seguridad y calidad</span>",
      sustain_box3:
        "<span>Gestión</span><br /><span>de ética y cumplimiento</span>",

      family_site: "Sitios del Grupo",
      family_official: "DOHWA Oficial",
      footer_address: "12 Sejong-daero 12-gil, Distrito Jung, Seúl",
      privacy: "Política de Privacidad",
      ethics: "Línea Ética",
      rights: "DOHWA Engineering Co., LTD. Todos los derechos reservados",
      top: "ARRIBA",

      about_kicker: "VISIÓN GENERAL DE LA EMPRESA",
      about_title: "DOHWA diseña el mundo,<br>y juntos creamos el futuro",
      overview_heading: "Resumen",
      overview_body:
        "<p><strong>DOHWA Engineering Co., LTD.</strong> es la firma de consultoría de ingeniería multidisciplinaria mejor clasificada de Corea del Sur.</p>" +
        "<p>DOHWA ofrece planificación, estudios de viabilidad, diseño, análisis, pruebas, supervisión, puesta en marcha, evaluación, consultoría y formación en múltiples áreas de la ingeniería.</p>" +
        "<p>Además, DOHWA está ampliando su negocio para convertirse en un proveedor de servicios EPC.</p>" +
        "<p>DOHWA supera expectativas brindando los mejores servicios para construir un futuro más brillante.</p>",
    },

    nl: {
      lang_ko: "Koreaans",
      lang_en: "Engels",
      lang_es: "Spaans",
      lang_nl: "Nederlands",

      nav_about: "Over",
      nav_business: "Business",
      nav_projects: "Projecten",
      nav_news: "Nieuws",
      nav_careers: "Carrières",
      nav_contact: "Contact",

      hero1_title: "Geef prioriteit aan natuur<br>en mensen",
      hero1_sub: "We creëren een toekomst waarin mensen en natuur samen zijn",
      hero2_title: "Groei en<br>innovatie",
      hero2_sub:
        "Bekijk de geschiedenis van voortdurende groei en innovatie van Dohwa Engineering",
      hero3_title: "Uitdaging<br>voor de wereld",
      hero3_sub:
        "DOHWA blijft als toonaangevend multidisciplinair ingenieursbureau wereldwijde uitdagingen aangaan.",
      go: "GA",
      scroll: "Scroll",

      sec_business: "BUSINESS",
      business_desc:
        "DOHWA blijft als toonaangevend multidisciplinair ingenieursbureau wereldwijde uitdagingen aangaan.",
      biz1_eyebrow: "Watersector",
      biz1_title: "Watersector <span class='biz-arrow'>›</span>",
      biz1_li1: "Watervoorziening",
      biz1_li2: "Riolering",
      biz1_li3: "Rivieren/waterbronnen/dammen/waterkracht",
      biz2_eyebrow: "Stedelijke sector",
      biz2_title: "Stedelijke sector <span class='biz-arrow'>›</span>",
      biz2_li1: "Stedelijke planning en ontwikkeling",
      biz2_li2: "Landschap/Recreatie",
      biz2_li3: "Slimme steden",

      sec_project: "PROJECT",
      project_desc: "DOHWA blijft wereldwijde uitdagingen aangaan.",
      proj1: "EPC voor fotovoltaïsche (PV) centrale in Le Thuy, Vietnam",
      proj2: "EPC voor SP1 Hatsukaichi zonne-energie (PV) project",
      proj3: "EPC-bouw voor het Sinji windparkproject",
      proj4: "EPC voor fotovoltaïsche (PV) centrale in Iseshima, Japan",
      proj5: "Zonne-energie promotiedienst voor K-water Net-Zero project",
      proj6: "Voorontwerp oostelijke toegangsweg in Daedeok Innopolis",
      proj7: "Voor- en detailontwerp structurele verbetering van Nodeul-ro",
      proj8: "Haalbaarheidsstudie en masterplan Saemangeum nieuw luchthavenproject",

      sec_news: "NIEUWS",
      news_desc:
        "Nieuws over Dohwa’s inspanningen voor regionale en nationale ontwikkeling.",
      news_tag_awards: "Prijzen",
      news_2025:
        "2025 ENR<br>Top Global & International<br>Design Firms",
      news_2024:
        "2024 ENR<br>Top Global & International<br>Design Firms",
      news_2023:
        "2023 ENR<br>Top Global & International<br>Design Firms",
      news_2022:
        "2022 ENR<br>Top Global & International<br>Design Firms",
      details: "Details",

      career_kicker: "CARRIÈRES",
      career_title:
        "We verwelkomen creatieve mensen vol passie en enthousiasme.",
      career_desc:
        "\"Mensgericht denken\" is al ongeveer 60 jaar de drijvende kracht, en<br>" +
        "\"progressieve actie\" en<br>" +
        "\"creatief denken\" brengen ons vooruit naar de toekomst.",
      career_btn1:
        "Ga naar Wervingsinformatie <span class='career-arrow'>›</span>",
      career_btn2:
        "Ga naar Wervingswebsite <span class='career-arrow'>›</span>",

      wordmark: "DOHWA ENGINEERING",
      sustain_title: "Duurzaam Beheer",
      sustain_desc:
        "DOHWA blijft de beste service leveren<br />" +
        "op basis van toptechnologie en kwaliteit voor<br>" +
        "klanten en partners",
      sustain_box1: "<span>Beheer</span><br /><span>door delen</span>",
      sustain_box2:
        "<span>Veiligheid en kwaliteit</span><br /><span>beheer</span>",
      sustain_box3:
        "<span>Ethiek en</span><br /><span>compliance</span><br /><span>beheer</span>",

      family_site: "Familie Sites",
      family_official: "DOHWA Officieel",
      footer_address: "12 Sejong-daero 12-gil, Jung District, Seoul",
      privacy: "Privacybeleid",
      ethics: "Ethische hotline",
      rights: "DOHWA Engineering Co., LTD. Alle rechten voorbehouden",
      top: "TOP",

      about_kicker: "BEDRIJFSOVERZICHT",
      about_title:
        "DOHWA ontwerpt de wereld,<br>en samen creëren we de toekomst",
      overview_heading: "Overzicht",
      overview_body:
        "<p><strong>DOHWA Engineering Co., LTD.</strong> is het best gerangschikte multidisciplinaire ingenieursadviesbureau van Zuid-Korea.</p>" +
        "<p>DOHWA biedt planning, haalbaarheidsstudies, ontwerp, analyse, testen, toezicht, inbedrijfstelling, evaluatie, consultancy en trainingen in meerdere ingenieursdisciplines.</p>" +
        "<p>Daarnaast breidt DOHWA haar activiteiten uit om een EPC-dienstverlener te worden.</p>" +
        "<p>DOHWA overtreft verwachtingen door de beste ingenieursdiensten te leveren voor een betere toekomst.</p>",
    },
  };

  const langNav = document.querySelector(".lang-switch");
  const langLinks = Array.from(
    document.querySelectorAll(".lang-switch a[data-lang]")
  );

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;

    document.documentElement.lang = lang;

    // data-i18n -> text
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] != null) el.textContent = dict[key];
    });

    // data-i18n-html -> html
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // active button
    langLinks.forEach((a) =>
      a.classList.toggle("is-active", a.dataset.lang === lang)
    );

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
     PROJECT SLIDER (HOME ONLY) ✅ (keeps your counter working)
  ============================================================ */

  const projSlider = document.querySelector(".proj-slider");
  if (projSlider) {
    const cards = Array.from(projSlider.querySelectorAll(".proj-card"));
    const prevBtn = projSlider.querySelector(".proj-arrow--left");
    const nextBtn = projSlider.querySelector(".proj-arrow--right");
    const idxEl = document.getElementById("projIndex");
    const totalEl = document.getElementById("projTotal");

    if (cards.length) {
      let index = cards.findIndex((c) => c.classList.contains("is-active"));
      if (index < 0) index = 0;

      if (totalEl) totalEl.textContent = String(cards.length);

      const render = () => {
        cards.forEach((c, i) => c.classList.toggle("is-active", i === index));
        if (idxEl) idxEl.textContent = String(index + 1);
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
