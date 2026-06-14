/* ============================================================
   Ann Ortega — Portfolio
   Vanilla-JS port of the Claude Design "Portfolio.dc.html" component.
   Ritual / Obsidian direction + bilingual EN/ES (toggle in the top nav)
   + lightbox gallery, driven entirely from the data below.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Data ---------------- */

  var galleryImgs = ['img/photo3.jpg', 'img/photo1.jpg', 'img/photo4.jpg', 'img/photo5.jpg', 'img/photo6.jpg', 'img/headshot.jpg'];

  var marquee = ['La Casa del Teatro', 'CasAzul', 'CEDRAM', 'Facultad de Cine', 'Te Papa Tongarewa', 'Pitt Street Theatre', 'NZ Latin Awards', 'Red Global MX'];

  var baseCredits = [
    { date: 'Nov 2025', title: 'El Amor de las Luciérnagas', author: 'Alejandro Ricaño', kind: 'theatre', lead: 'Mariana Villalobos', leadRole: 'director', venue: 'La Casa del Teatro' },
    { date: 'Nov 2025', title: 'Romeo & Juliet', author: 'Shakespeare', role: 'Juliet', roleEs: 'Julieta', kind: 'theatre', lead: 'Nareni Gamboa', leadRole: 'director', venue: 'La Casa del Teatro' },
    { date: 'Nov 2025', title: 'Kumbalá', author: 'Los Hijos de la Maldita Vecina', kind: 'dance', lead: 'Ricardo Daniel', leadRole: 'choreographer', venue: 'La Casa del Teatro' },
    { date: 'Jul 2025', title: 'Jemima and the Wolf', author: 'Leonora Carrington', kind: 'theatre', lead: 'Cecilia Raro', leadRole: 'director', venue: 'La Casa del Teatro' },
    { date: 'Jul 2025', title: 'Corporalidad', kind: 'movement', lead: 'Ingrid Cebada & Lucio Giménez Cacho', leadRole: 'director', venue: 'La Casa del Teatro' },
    { date: 'Jul 2025', title: 'Dance Class', kind: 'dance', lead: 'Valeria Olavarrieta', leadRole: 'choreographer', venue: 'La Casa del Teatro' },
    { date: 'Mar 2025', title: 'The Other Side', author: 'Optimist · Zoe Keating', kind: 'dance', lead: 'Gabriela Gullco', leadRole: 'choreographer', venue: 'La Casa del Teatro' },
    { date: 'Mar 2025', title: 'Antígona', author: 'Sophocles', role: 'Antígona', kind: 'theatre', lead: 'Steff Weiss', leadRole: 'director', venue: 'La Casa del Teatro' },
    { date: '2018–22', title: 'Lorca & Chekhov', author: 'Scenes', authorEs: 'Escenas', kind: 'theatre', venue: 'Pitt Street Theatre · Auckland' }
  ];

  var trainingEn = [
    { t: 'Dramatic Acting for Professionalization', s: 'CEDRAM · Michoacán', y: '2025 · Now' },
    { t: 'Acting Diploma', s: 'La Casa del Teatro · CDMX', y: '2025' },
    { t: 'Realist Acting Workshop', s: 'CasAzul · CDMX', y: '2025' },
    { t: 'Photography', s: 'Facultad de Cine · CDMX', y: '2025' },
    { t: 'Acting & Theatrical Improvisation', s: 'Auckland, NZ', y: '2018' },
    { t: 'Mexica Dance', s: 'Olin Huitzilin', y: 'Since 2007' }
  ];
  var trainingEs = [
    { t: 'Actuación Dramática para la Profesionalización', s: 'CEDRAM · Michoacán', y: '2025 · Hoy' },
    { t: 'Diplomado en Actuación', s: 'La Casa del Teatro · CDMX', y: '2025' },
    { t: 'Actuación Realista', s: 'CasAzul · CDMX', y: '2025' },
    { t: 'Fotografía', s: 'Facultad de Cine · CDMX', y: '2025' },
    { t: 'Actuación e Improvisación Teatral', s: 'Auckland, NZ', y: '2018' },
    { t: 'Danza Mexica', s: 'Olin Huitzilin', y: 'Desde 2007' }
  ];

  var awardsEn = [
    { t: 'Best Event Producer', s: 'New Zealand Latin Awards', y: '2019' },
    { t: 'President · NZ Chapter', s: 'Red Global MX — Qualified Mexicans Abroad', y: '2021' },
    { t: 'Cultural Diffusion Leader', s: 'Red Global MX', y: '2016–22' },
    { t: 'Festival Producer', s: 'Mexican culture · Aotearoa NZ', y: '2016–22' },
    { t: 'Intl. Encounter of Dance & Rituality', s: 'Te Papa Tongarewa', y: 'NZ' },
    { t: 'Diwali Festival', s: 'Aotea Square · Auckland', y: 'NZ' }
  ];
  var awardsEs = [
    { t: 'Mejor Productor de Eventos', s: 'New Zealand Latin Awards', y: '2019' },
    { t: 'Presidenta · Capítulo NZ', s: 'Red Global de Mexicanos en el Exterior', y: '2021' },
    { t: 'Líder de Difusión Cultural', s: 'Red Global MX', y: '2016–22' },
    { t: 'Productora de Festivales', s: 'Cultura mexicana · Aotearoa NZ', y: '2016–22' },
    { t: 'Encuentro Int. de Danza y Ritualidad', s: 'Te Papa Tongarewa', y: 'NZ' },
    { t: 'Festival Diwali', s: 'Aotea Square · Auckland', y: 'NZ' }
  ];

  var factsEn = [
    { k: 'Based', v: 'México' },
    { k: 'Disciplines', v: 'Theatre · Dance · Ritual' },
    { k: 'Languages', v: 'Spanish · English' },
    { k: 'Roots', v: 'Mexica dance · 2007' }
  ];
  var factsEs = [
    { k: 'Radica en', v: 'México' },
    { k: 'Disciplinas', v: 'Teatro · Danza · Ritual' },
    { k: 'Idiomas', v: 'Español · Inglés' },
    { k: 'Raíces', v: 'Danza mexica · 2007' }
  ];

  var C = {
    en: {
      nav: { about: 'About', work: 'Work', gallery: 'Gallery', contact: 'Contact' },
      hero: { kicker: 'Stage & Movement Artist · México', name: 'Ann Ortega', tagline: 'Actress · Producer', line: 'Ritual, memory, and presence — carried onto the contemporary stage.', cta1: 'Get in touch', cta2: 'Selected work', scroll: 'Scroll' },
      about: { num: '01', title: 'About', sinceLabel: 'Dancing since', heading: 'Intelligence, ritual, and nuance in every role.', lead: 'Ann Ortega is a Mexican actress, dancer, and cultural producer whose path began in 2007 with Mexica dance — the sound of the ayoyotes and the heartbeat of the drum awakening a lifelong bond with ritual, memory, and movement.', p1: 'From 2012 to 2022 she lived in Aotearoa New Zealand, where Mexica dance became a bridge between cultures. She performed in cultural presentations and choreographies — among them the International Encounter of Dance and Rituality at Te Papa Tongarewa — and danced regional pieces of India at the Diwali Festival in Auckland.', p2: 'In 2018 she turned to acting and theatrical improvisation, later deepening her work with dramatic text through Lorca and Chekhov in Auckland. In 2025 she returned to Mexico to train at La Casa del Teatro, CasAzul, and CEDRAM, building a practice that moves fluidly between classical text, contemporary drama, and the body.', statement: 'My work seeks to integrate ritual, cultural memory, comedy, and contemporary acting — exploring the stage as a meeting place between tradition, identity, and presence.' },
      work: { num: '02', title: 'Selected Work', title2: 'On Stage', note: 'Recent stage and movement work. Full résumé on request.', colDate: 'Date', colProd: 'Production', colRole: 'Role', colDir: 'Direction', colVenue: 'Venue' },
      training: { num: '03', title: 'Training' },
      awards: { num: '04', title: 'Recognition' },
      gallery: { num: '05', title: 'Gallery', title2: 'In Performance', note: 'Click to enlarge' },
      contact: { num: '06', title: 'Contact', heading: 'Casting & collaboration — let’s talk.', phone: '+64 21 028 21930', ig: '@ann.ortegga', collective: '@laume.teatral', collectiveLabel: 'Collective' },
      footer: '© 2026 Ann Ortega — All rights reserved'
    },
    es: {
      nav: { about: 'Sobre mí', work: 'Trabajo', gallery: 'Galería', contact: 'Contacto' },
      hero: { kicker: 'Artista escénica y de movimiento · México', name: 'Ann Ortega', tagline: 'Actriz · Productora', line: 'Ritualidad, memoria y presencia — llevadas a la escena contemporánea.', cta1: 'Contacto', cta2: 'Ver trabajo', scroll: 'Desliza' },
      about: { num: '01', title: 'Sobre mí', sinceLabel: 'Danza desde', heading: 'Inteligencia, ritualidad y matiz en cada papel.', lead: 'Ann Ortega es actriz, bailarina y productora cultural mexicana. Su camino comenzó en 2007 con la danza mexica: el sonido de los ayoyotes y el latido del tambor despertaron un vínculo profundo con la ritualidad, la memoria y el movimiento.', p1: 'Entre 2012 y 2022 vivió en Aotearoa Nueva Zelanda, donde la danza mexica se volvió un puente entre culturas. Participó en presentaciones y coreografías —entre ellas el Encuentro Internacional de Danza y Ritualidad en Te Papa Tongarewa— y bailó piezas regionales de la India en el Festival Diwali de Auckland.', p2: 'En 2018 se acercó a la actuación y la improvisación teatral, profundizando luego en el texto dramático con Lorca y Chéjov en Auckland. En 2025 regresó a México para formarse en La Casa del Teatro, CasAzul y CEDRAM, construyendo una práctica que transita entre el texto clásico, el drama contemporáneo y el cuerpo.', statement: 'Mi trabajo busca integrar la ritualidad, la memoria cultural, la comedia y la actuación contemporánea, explorando el escenario como un espacio de encuentro entre tradición, identidad y presencia.' },
      work: { num: '02', title: 'En escena', title2: 'En escena', note: 'Trabajo escénico y de movimiento reciente. Currículum completo a solicitud.', colDate: 'Fecha', colProd: 'Producción', colRole: 'Papel', colDir: 'Dirección', colVenue: 'Espacio' },
      training: { num: '03', title: 'Formación' },
      awards: { num: '04', title: 'Reconocimientos' },
      gallery: { num: '05', title: 'Galería', title2: 'En escena', note: 'Clic para ampliar' },
      contact: { num: '06', title: 'Contacto', heading: 'Casting y colaboración — hablemos.', phone: '+64 21 028 21930', ig: '@ann.ortegga', collective: '@laume.teatral', collectiveLabel: 'Colectivo' },
      footer: '© 2026 Ann Ortega — Todos los derechos reservados'
    }
  };

  /* ---------------- State ---------------- */

  var state = { lang: 'en', lb: null };
  var appEl, lbEl;
  var scrollHandler = null;
  var io = null;

  /* ---------------- Derived data ---------------- */

  function buildCredits(lang) {
    var es = lang === 'es';
    var km = { theatre: es ? 'Teatro' : 'Theatre', dance: es ? 'Danza' : 'Dance', movement: es ? 'Movimiento' : 'Movement' };
    var lm = { director: 'Dir.', choreographer: es ? 'Coreo.' : 'Choreo.' };
    return baseCredits.map(function (c) {
      var role = (es && c.roleEs) ? c.roleEs : (c.role || '');
      var author = (es && c.authorEs) ? c.authorEs : (c.author || '');
      var kindL = km[c.kind];
      var leadStr = c.lead ? (lm[c.leadRole] + ' ' + c.lead) : '';
      return {
        date: c.date,
        title: c.title,
        authorTag: author ? ('— ' + author) : '',
        roleDisplay: role || kindL,
        leadL: leadStr || '—',
        leadPlain: leadStr,
        venue: c.venue || ''
      };
    });
  }

  /* ---------------- Templates ---------------- */

  function marqueeRow(symbol, color, size) {
    return marquee.map(function (m) {
      return '<span>' + m + '</span><span style="color:' + color + '; font-size:' + size + ';">' + symbol + '</span>';
    }).join('');
  }

  function listRows(items, dir) {
    // Training / Awards rows (shared structure, accent differs)
    return items.map(function (i) {
      if (dir === 'A') {
        return '' +
          '<div style="display:grid; grid-template-columns:1fr auto; gap:16px; align-items:baseline; padding:20px 2px; border-bottom:1px solid rgba(239,230,216,.1);">' +
            '<div>' +
              '<div style="font-family:\'Marcellus\',serif; font-size:20px; line-height:1.25;">' + i.t + '</div>' +
              '<div style="font-size:13px; color:#9b8e7b; margin-top:5px;">' + i.s + '</div>' +
            '</div>' +
            '<div style="font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#c47a3f; white-space:nowrap;">' + i.y + '</div>' +
          '</div>';
      }
      return '' +
        '<div style="display:grid; grid-template-columns:1fr auto; gap:16px; align-items:baseline; padding:16px 0; border-bottom:1px solid rgba(34,26,18,.16);">' +
          '<div>' +
            '<div style="font-family:\'Bricolage Grotesque\',sans-serif; font-weight:600; font-size:18px; letter-spacing:-.01em; color:#221a12; line-height:1.25;">' + i.t + '</div>' +
            '<div style="font-size:14px; font-style:italic; color:#6b5b46; margin-top:4px;">' + i.s + '</div>' +
          '</div>' +
          '<div style="font-family:\'Bricolage Grotesque\',sans-serif; font-size:11px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:' + (i._jade ? '#2c6049' : '#b4471f') + '; white-space:nowrap;">' + i.y + '</div>' +
        '</div>';
    }).join('');
  }

  function figureA(idx, src, span) {
    return '<figure data-zoom data-idx="' + idx + '" style="position:relative; grid-column:span ' + span[0] + '; grid-row:span ' + span[1] + '; overflow:hidden; cursor:pointer; border:1px solid rgba(239,230,216,.08);"><img src="' + src + '" alt="Performance photograph" style="width:100%; height:100%; object-fit:cover;"></figure>';
  }

  // EN / ES language toggle, rendered into the top nav. Active state is
  // baked into the markup since the nav re-renders on every language change.
  function langToggle(lang) {
    function btn(code, val, action) {
      var on = lang === val;
      return '<button type="button" class="lang-btn' + (on ? ' is-active' : '') + '" data-action="' + action + '" aria-pressed="' + on + '" style="padding:5px 12px; border:none; border-radius:100px; cursor:pointer; font-family:\'Hanken Grotesk\',system-ui,sans-serif; font-size:11px; font-weight:600; letter-spacing:.14em; line-height:1; transition:all .3s; ' + (on ? 'background:#c47a3f; color:#19110b;' : 'background:transparent; color:#c7bca9;') + '">' + code + '</button>';
    }
    return '<div style="display:flex; align-items:center; gap:3px; padding:3px; border:1px solid rgba(239,230,216,.2); border-radius:100px;">' + btn('EN', 'en', 'setEn') + btn('ES', 'es', 'setEs') + '</div>';
  }

  /* ---- Direction A — Ritual / Obsidian ---- */
  function dirA(t, credits, training, awards, facts) {
    var creditRows = credits.map(function (c) {
      return '' +
        '<div data-reveal class="credit-row" style="display:grid; grid-template-columns:90px minmax(240px,1.7fr) 1.3fr 1fr; gap:18px; align-items:baseline; padding:26px 8px; border-bottom:1px solid rgba(239,230,216,.1); transition:background .35s, padding-left .35s;">' +
          '<span style="font-size:12.5px; color:#c47a3f; letter-spacing:.04em;">' + c.date + '</span>' +
          '<span style="line-height:1.2;"><span style="font-family:\'Marcellus\',serif; font-size:27px;">' + c.title + '</span><span style="font-size:13px; color:#8f8273; font-style:italic;"> ' + c.authorTag + '</span></span>' +
          '<span style="font-size:14.5px; color:#8f8273;">' + c.leadL + '</span>' +
          '<span style="font-size:14.5px; color:#8f8273;">' + c.venue + '</span>' +
        '</div>';
    }).join('');

    var factCells = facts.map(function (f) {
      return '<div style="background:#160f0a; padding:22px 22px;">' +
        '<div style="font-size:10.5px; letter-spacing:.2em; text-transform:uppercase; color:#8f8273; margin-bottom:8px;">' + f.k + '</div>' +
        '<div style="font-size:15.5px; color:#e3d8c6; line-height:1.3;">' + f.v + '</div></div>';
    }).join('');

    var galleryFigs =
      figureA(0, 'img/photo3.jpg', [4, 2]) +
      figureA(1, 'img/photo1.jpg', [2, 2]) +
      figureA(2, 'img/photo4.jpg', [2, 2]) +
      figureA(3, 'img/photo5.jpg', [2, 2]) +
      figureA(4, 'img/photo6.jpg', [2, 2]) +
      figureA(5, 'img/headshot.jpg', [2, 2]);

    return '' +
    '<div data-dir="A" style="--pad:52px; background:#120d0a; color:#efe6d8; font-family:\'Hanken Grotesk\',system-ui,sans-serif;">' +

      '<nav id="siteNav" data-variant="A" style="position:fixed; top:0; left:0; right:0; z-index:55; display:flex; align-items:center; justify-content:space-between; padding:24px var(--pad); transition:all .5s ease; border-bottom:1px solid rgba(239,230,216,0);">' +
        '<a href="#top" style="font-family:\'Marcellus\',serif; font-size:23px; letter-spacing:.04em; white-space:nowrap;">Ann Ortega</a>' +
        '<div style="display:flex; align-items:center; gap:26px;">' +
          '<div class="nav-links" style="display:flex; align-items:center; gap:32px; font-size:12px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:#c7bca9;">' +
            '<a class="nav-link" href="#about" style="transition:color .3s;">' + t.nav.about + '</a>' +
            '<a class="nav-link" href="#work" style="transition:color .3s;">' + t.nav.work + '</a>' +
            '<a class="nav-link" href="#gallery" style="transition:color .3s;">' + t.nav.gallery + '</a>' +
            '<a class="nav-contact" href="#contact" style="padding:8px 18px; border:1px solid rgba(196,122,63,.5); border-radius:100px; color:#e8c88e; transition:all .3s;">' + t.nav.contact + '</a>' +
          '</div>' +
          langToggle(state.lang) +
        '</div>' +
      '</nav>' +

      '<header id="top" style="position:relative; height:100vh; min-height:640px; overflow:hidden;">' +
        '<div style="position:absolute; inset:0; animation:kenburns 26s ease-out forwards; will-change:transform;">' +
          '<img src="img/About.jpg" alt="Ann Ortega on stage" style="width:100%; height:100%; object-fit:cover; object-position:center 26%;">' +
        '</div>' +
        '<div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(18,13,10,.6) 0%, rgba(18,13,10,.18) 34%, rgba(18,13,10,.58) 70%, rgba(18,13,10,.97) 100%);"></div>' +
        '<div style="position:absolute; inset:0; background:radial-gradient(120% 80% at 72% 24%, rgba(18,13,10,0) 36%, rgba(18,13,10,.55) 100%);"></div>' +
        '<div style="position:relative; z-index:2; height:100%; max-width:1280px; margin:0 auto; padding:0 var(--pad) 118px; display:flex; flex-direction:column; justify-content:flex-end;">' +
          '<div data-reveal style="display:flex; align-items:center; gap:15px; margin-bottom:22px;">' +
            '<span style="width:42px; height:1px; background:#c47a3f;"></span>' +
            '<span style="font-size:12px; letter-spacing:.32em; text-transform:uppercase; color:#dba24f;">' + t.hero.kicker + '</span>' +
          '</div>' +
          '<h1 data-reveal style="font-family:\'Marcellus\',serif; font-weight:400; font-size:clamp(50px,6.5vw,108px); line-height:.96; letter-spacing:.005em;">' + t.hero.name.replace(' ', '<br>') + '</h1>' +
          '<div data-reveal style="margin-top:16px; font-family:\'Marcellus\',serif; font-style:italic; font-size:clamp(19px,2.2vw,28px); color:#e8c88e; letter-spacing:.02em;">' + t.hero.tagline + '</div>' +
          '<p data-reveal style="margin-top:22px; max-width:560px; font-size:18px; line-height:1.62; color:#c7bca9;">' + t.hero.line + '</p>' +
          '<div data-reveal style="display:flex; flex-wrap:wrap; gap:14px; margin-top:38px;">' +
            '<a class="cta1" href="#contact" style="display:inline-flex; align-items:center; gap:10px; padding:15px 28px; background:#c47a3f; color:#19110b; border-radius:100px; font-size:12.5px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; transition:transform .3s, box-shadow .3s; box-shadow:0 12px 40px -14px rgba(196,122,63,.7);">' + t.hero.cta1 + '</a>' +
            '<a class="cta2" href="#work" style="display:inline-flex; align-items:center; gap:10px; padding:15px 28px; border:1px solid rgba(239,230,216,.28); border-radius:100px; font-size:12.5px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:#efe6d8; transition:all .3s;">' + t.hero.cta2 + '</a>' +
          '</div>' +
        '</div>' +
        '<div style="position:absolute; bottom:28px; left:50%; transform:translateX(-50%); z-index:2; display:flex; flex-direction:column; align-items:center; gap:9px;">' +
          '<span style="font-size:10px; letter-spacing:.3em; text-transform:uppercase; color:#7c7261;">' + t.hero.scroll + '</span>' +
          '<span style="width:1px; height:28px; background:linear-gradient(#c47a3f,transparent); animation:floaty 2.4s ease-in-out infinite;"></span>' +
        '</div>' +
      '</header>' +

      '<section style="border-top:1px solid rgba(239,230,216,.1); border-bottom:1px solid rgba(239,230,216,.1); padding:22px 0; overflow:hidden; background:#0f0b08;">' +
        '<div style="display:flex; width:max-content; animation:marquee 42s linear infinite;">' +
          '<div style="display:flex; align-items:center; gap:46px; padding-right:46px; font-family:\'Marcellus\',serif; font-style:italic; font-size:25px; color:#6f6557; white-space:nowrap;">' + marqueeRow('◇', '#c47a3f', '13px') + '</div>' +
          '<div aria-hidden="true" style="display:flex; align-items:center; gap:46px; padding-right:46px; font-family:\'Marcellus\',serif; font-style:italic; font-size:25px; color:#6f6557; white-space:nowrap;">' + marqueeRow('◇', '#c47a3f', '13px') + '</div>' +
        '</div>' +
      '</section>' +

      '<section id="about" data-section="aboutA" style="max-width:1280px; margin:0 auto; padding:138px var(--pad) 118px; display:grid; grid-template-columns:0.9fr 1.1fr; gap:80px; align-items:start;">' +
        '<div data-reveal style="position:relative;">' +
          '<div style="position:relative; aspect-ratio:3/4; overflow:hidden; border:1px solid rgba(239,230,216,.1);">' +
            '<img src="img/photo2.jpg" alt="Portrait of Ann Ortega" style="width:100%; height:100%; object-fit:cover; object-position:center 22%;">' +
          '</div>' +
          '<div style="position:absolute; bottom:-1px; right:-1px; background:#120d0a; padding:18px 22px 0 22px;">' +
            '<div style="font-family:\'Marcellus\',serif; font-size:44px; line-height:1; color:#c47a3f;">2007</div>' +
            '<div style="font-size:10.5px; letter-spacing:.2em; text-transform:uppercase; color:#8f8273; margin-top:7px;">' + t.about.sinceLabel + '</div>' +
          '</div>' +
        '</div>' +
        '<div data-reveal>' +
          '<div style="display:flex; align-items:center; gap:14px; margin-bottom:24px;">' +
            '<span style="font-size:12px; letter-spacing:.3em; text-transform:uppercase; color:#c47a3f;">' + t.about.num + ' — ' + t.about.title + '</span>' +
            '<span style="flex:1; height:1px; background:rgba(239,230,216,.14);"></span>' +
          '</div>' +
          '<h2 style="font-family:\'Marcellus\',serif; font-weight:400; font-size:clamp(33px,4vw,50px); line-height:1.1; margin-bottom:26px; text-wrap:balance;">' + t.about.heading + '</h2>' +
          '<div style="display:flex; flex-direction:column; gap:18px; font-size:16.5px; line-height:1.78; color:#b9ab98; max-width:580px;">' +
            '<p style="color:#cfc2ae; font-size:18px;">' + t.about.lead + '</p>' +
            '<p>' + t.about.p1 + '</p>' +
            '<p>' + t.about.p2 + '</p>' +
          '</div>' +
          '<blockquote style="margin-top:34px; padding-left:22px; border-left:2px solid #c47a3f; font-family:\'Marcellus\',serif; font-style:italic; font-size:21px; line-height:1.5; color:#e8c88e; max-width:600px;">' + t.about.statement + '</blockquote>' +
          '<div style="display:grid; grid-template-columns:1fr 1fr; gap:1px; margin-top:42px; background:rgba(239,230,216,.12); border:1px solid rgba(239,230,216,.12);">' + factCells + '</div>' +
        '</div>' +
      '</section>' +

      '<section id="work" style="border-top:1px solid rgba(239,230,216,.1); background:#0f0b08;">' +
        '<div style="max-width:1280px; margin:0 auto; padding:118px var(--pad);">' +
          '<div data-reveal style="display:flex; align-items:flex-end; justify-content:space-between; gap:24px; margin-bottom:50px;">' +
            '<div>' +
              '<div style="font-size:12px; letter-spacing:.3em; text-transform:uppercase; color:#c47a3f; margin-bottom:16px;">' + t.work.num + ' — ' + t.work.title + '</div>' +
              '<h2 style="font-family:\'Marcellus\',serif; font-weight:400; font-size:clamp(40px,6vw,82px); line-height:.96;">' + t.work.title2 + '</h2>' +
            '</div>' +
            '<p style="font-size:14px; color:#8f8273; max-width:280px; line-height:1.6; padding-bottom:10px;">' + t.work.note + '</p>' +
          '</div>' +
          '<div data-reveal class="credit-head" style="display:grid; grid-template-columns:90px minmax(240px,1.7fr) 1.3fr 1fr; gap:18px; padding:0 8px 14px; border-bottom:1px solid rgba(239,230,216,.14); font-size:10.5px; letter-spacing:.2em; text-transform:uppercase; color:#6a6053;">' +
            '<span>' + t.work.colDate + '</span><span>' + t.work.colProd + '</span><span>' + t.work.colDir + '</span><span>' + t.work.colVenue + '</span>' +
          '</div>' +
          '<div style="display:flex; flex-direction:column;">' + creditRows + '</div>' +
        '</div>' +
      '</section>' +

      '<section data-section="dualcol" style="max-width:1280px; margin:0 auto; padding:118px var(--pad); display:grid; grid-template-columns:1fr 1fr; gap:72px;">' +
        '<div data-reveal>' +
          '<div style="display:flex; align-items:center; gap:14px; margin-bottom:30px;">' +
            '<span style="font-size:12px; letter-spacing:.3em; text-transform:uppercase; color:#c47a3f;">' + t.training.num + ' — ' + t.training.title + '</span>' +
            '<span style="flex:1; height:1px; background:rgba(239,230,216,.14);"></span>' +
          '</div>' + listRows(training, 'A') +
        '</div>' +
        '<div data-reveal>' +
          '<div style="display:flex; align-items:center; gap:14px; margin-bottom:30px;">' +
            '<span style="font-size:12px; letter-spacing:.3em; text-transform:uppercase; color:#c47a3f;">' + t.awards.num + ' — ' + t.awards.title + '</span>' +
            '<span style="flex:1; height:1px; background:rgba(239,230,216,.14);"></span>' +
          '</div>' + listRows(awards, 'A') +
        '</div>' +
      '</section>' +

      '<section id="gallery" style="max-width:1340px; margin:0 auto; padding:30px var(--pad) 118px;">' +
        '<div data-reveal style="display:flex; align-items:flex-end; justify-content:space-between; gap:24px; margin-bottom:48px;">' +
          '<div>' +
            '<div style="font-size:12px; letter-spacing:.3em; text-transform:uppercase; color:#c47a3f; margin-bottom:16px;">' + t.gallery.num + ' — ' + t.gallery.title + '</div>' +
            '<h2 style="font-family:\'Marcellus\',serif; font-weight:400; font-size:clamp(40px,6vw,82px); line-height:.96;">' + t.gallery.title2 + '</h2>' +
          '</div>' +
          '<span style="font-size:13px; color:#6a6053; letter-spacing:.06em; padding-bottom:12px;">' + t.gallery.note + '</span>' +
        '</div>' +
        '<div data-section="galleryA" style="display:grid; grid-template-columns:repeat(6,1fr); grid-auto-rows:186px; gap:14px;">' + galleryFigs + '</div>' +
      '</section>' +

      '<section id="contact" style="position:relative; border-top:1px solid rgba(239,230,216,.1); background:#0f0b08; overflow:hidden;">' +
        '<div style="position:absolute; inset:0; opacity:.18;"><img src="img/photo4.jpg" alt="" style="width:100%; height:100%; object-fit:cover; object-position:center 30%;"></div>' +
        '<div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,11,8,.85), rgba(15,11,8,.96));"></div>' +
        '<div style="position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:128px var(--pad); text-align:center;">' +
          '<div data-reveal style="font-size:12px; letter-spacing:.3em; text-transform:uppercase; color:#c47a3f; margin-bottom:24px;">' + t.contact.num + ' — ' + t.contact.title + '</div>' +
          '<h2 data-reveal style="font-family:\'Marcellus\',serif; font-weight:400; font-size:clamp(38px,6vw,84px); line-height:1.04; margin-bottom:32px; text-wrap:balance;">' + t.contact.heading + '</h2>' +
          '<a data-reveal class="contact-email" href="mailto:annortega@pm.me" style="display:inline-block; font-family:\'Marcellus\',serif; font-style:italic; font-size:clamp(26px,3.4vw,42px); color:#e8c88e; border-bottom:1px solid rgba(196,122,63,.4); padding-bottom:6px; transition:all .3s;">annortega@pm.me</a>' +
          '<div data-reveal style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:14px 26px; margin-top:42px; font-size:13px; letter-spacing:.12em; text-transform:uppercase; color:#9b8e7b;">' +
            '<span>' + t.contact.phone + '</span>' +
            '<span style="color:#3f382f;">/</span>' +
            '<a class="contact-link" href="https://instagram.com/ann.ortegga" target="_blank" rel="noopener" style="transition:color .3s;">' + t.contact.ig + '</a>' +
            '<span style="color:#3f382f;">/</span>' +
            '<a class="contact-link" href="https://instagram.com/laume.teatral" target="_blank" rel="noopener" style="transition:color .3s;">' + t.contact.collective + ' · ' + t.contact.collectiveLabel + '</a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<footer style="border-top:1px solid rgba(239,230,216,.1); padding:34px var(--pad); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:14px;">' +
        '<span style="font-family:\'Marcellus\',serif; font-size:21px; letter-spacing:.04em;">Ann Ortega</span>' +
        '<span style="font-size:11.5px; letter-spacing:.14em; text-transform:uppercase; color:#6a6053;">' + t.footer + '</span>' +
      '</footer>' +

    '</div>';
  }

  /* ---------------- Lightbox ---------------- */

  function renderLightbox() {
    if (state.lb === null) { lbEl.innerHTML = ''; document.body.style.overflow = ''; return; }
    var src = galleryImgs[state.lb];
    var counter = pad2(state.lb + 1) + ' / ' + pad2(galleryImgs.length);
    lbEl.innerHTML = '' +
      '<div data-action="closeLb" style="position:fixed; inset:0; z-index:100; background:rgba(8,6,4,.96); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; padding:5vh 6vw;">' +
        '<button type="button" data-action="closeLb" class="lb-close" aria-label="Close" style="position:absolute; top:24px; right:28px; width:48px; height:48px; border-radius:50%; border:1px solid rgba(239,230,216,.22); background:transparent; color:#efe6d8; font-size:19px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .3s;">✕</button>' +
        '<button type="button" data-action="prevLb" class="lb-nav" aria-label="Previous" style="position:absolute; left:24px; top:50%; transform:translateY(-50%); width:54px; height:54px; border-radius:50%; border:1px solid rgba(239,230,216,.22); background:transparent; color:#efe6d8; font-size:20px; cursor:pointer; transition:all .3s;">‹</button>' +
        '<img data-action="stop" src="' + src + '" alt="Performance photograph enlarged" style="max-width:100%; max-height:100%; object-fit:contain; box-shadow:0 30px 90px -20px rgba(0,0,0,.9);">' +
        '<button type="button" data-action="nextLb" class="lb-nav" aria-label="Next" style="position:absolute; right:24px; top:50%; transform:translateY(-50%); width:54px; height:54px; border-radius:50%; border:1px solid rgba(239,230,216,.22); background:transparent; color:#efe6d8; font-size:20px; cursor:pointer; transition:all .3s;">›</button>' +
        '<div style="position:absolute; bottom:28px; left:50%; transform:translateX(-50%); font-size:12px; letter-spacing:.24em; text-transform:uppercase; color:#9a958b;">' + counter + '</div>' +
      '</div>';
    document.body.style.overflow = 'hidden';
  }

  function pad2(n) { return String(n).padStart(2, '0'); }
  function openLb(i) { state.lb = i; renderLightbox(); }
  function closeLb() { state.lb = null; renderLightbox(); }
  function nextLb() { state.lb = (state.lb + 1) % galleryImgs.length; renderLightbox(); }
  function prevLb() { state.lb = (state.lb + galleryImgs.length - 1) % galleryImgs.length; renderLightbox(); }

  /* ---------------- Render + effects ---------------- */

  function renderApp(scrollTop) {
    var t = C[state.lang];
    var credits = buildCredits(state.lang);
    var training = state.lang === 'es' ? trainingEs : trainingEn;
    var awards = state.lang === 'es' ? awardsEs : awardsEn;
    var facts = state.lang === 'es' ? factsEs : factsEn;
    appEl.innerHTML = dirA(t, credits, training, awards, facts);
    document.documentElement.lang = state.lang;
    if (scrollTop) window.scrollTo(0, 0);
    initEffects();
  }

  function initEffects() {
    // Nav scroll reactivity
    if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
    scrollHandler = function () {
      var nav = document.querySelector('#siteNav');
      if (!nav) return;
      var v = nav.getAttribute('data-variant');
      var s = window.scrollY > 60;
      if (v === 'A') {
        nav.style.background = s ? 'rgba(15,11,8,.82)' : 'transparent';
        nav.style.backdropFilter = nav.style.webkitBackdropFilter = s ? 'blur(14px)' : 'none';
        nav.style.padding = s ? '16px var(--pad)' : '24px var(--pad)';
        nav.style.borderBottomColor = s ? 'rgba(239,230,216,.1)' : 'rgba(239,230,216,0)';
      } else {
        nav.style.background = s ? 'rgba(233,222,201,.92)' : 'rgba(233,222,201,0)';
        nav.style.backdropFilter = nav.style.webkitBackdropFilter = s ? 'blur(12px)' : 'none';
        nav.style.padding = s ? '14px var(--pad)' : '22px var(--pad)';
        nav.style.boxShadow = s ? '0 1px 0 rgba(34,26,18,.14)' : 'none';
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();

    // Scroll reveals
    if (io) io.disconnect();
    var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 5, 4) * 0.06) + 's';
      var r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.9) el.classList.add('is-pre');
      else el.classList.remove('is-pre');
    });
    io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove('is-pre'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Wiring ---------------- */

  function setLang(l) { if (state.lang === l) return; state.lang = l; renderApp(false); }

  var actions = {
    setEn: function () { setLang('en'); },
    setEs: function () { setLang('es'); },
    closeLb: closeLb,
    nextLb: nextLb,
    prevLb: prevLb,
    stop: function () {}
  };

  function init() {
    appEl = document.getElementById('app');
    lbEl = document.getElementById('lightbox');

    // Delegated clicks inside the page: language toggle + gallery → lightbox
    appEl.addEventListener('click', function (e) {
      var act = e.target.closest('[data-action]');
      if (act && actions[act.getAttribute('data-action')]) { actions[act.getAttribute('data-action')](); return; }
      var fig = e.target.closest('figure[data-idx]');
      if (fig) { e.preventDefault(); openLb(parseInt(fig.getAttribute('data-idx'), 10)); }
    });

    // Lightbox clicks (delegated)
    lbEl.addEventListener('click', function (e) {
      var node = e.target.closest('[data-action]');
      var action = node ? node.getAttribute('data-action') : 'closeLb';
      if (action === 'stop') { e.stopPropagation(); return; }
      if (actions[action]) actions[action]();
    });

    // Keyboard nav for lightbox
    window.addEventListener('keydown', function (e) {
      if (state.lb === null) return;
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowRight') nextLb();
      else if (e.key === 'ArrowLeft') prevLb();
    });

    renderApp(false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
