/* Ray's Heating & Cooling LLC v2 — Shared Components & Logic */
window.RAYS = window.RAYS || {};

// ── Shared HTML ──────────────────────────────────────────────

RAYS.topbarHTML = `
<div class="topbar">
  <div class="container">
    <div class="topbar-left">
      <span><span class="topbar-dot"></span>83 Johnson St, Bridgeport, CT 06604</span>
      <a href="mailto:save@raysheatingandcoolingllc.com">save@raysheatingandcoolingllc.com</a>
    </div>
    <div class="topbar-right">
      <span class="topbar-pill">24/7 Emergency Service</span>
      <a href="tel:2035454614">(203) 545-4614</a>
    </div>
  </div>
</div>`;

RAYS.headerHTML = `
<header class="header">
  <div class="container">
    <a href="index.html" class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24"><path d="M12 2C9.5 5 7 7.5 7 11a5 5 0 0010 0c0-3.5-2.5-6-5-9zm0 14a3 3 0 01-3-3c0-1.8 1-3.3 2-4.8 1 1.5 2 3 2 4.8a3 3 0 01-3 3z"/></svg>
      </div>
      <div class="logo-wordmark">
        <div class="logo-name">Ray's Heating &amp; Cooling</div>
        <div class="logo-sub">Bridgeport, CT · Est. 2000</div>
      </div>
    </a>
    <nav id="mainNav">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <div class="nav-dropdown">
        <a href="services.html">Services ▾</a>
        <div class="nav-dropdown-menu">
          <a href="hvac-repair.html">HVAC Repair</a>
          <a href="hvac-maintenance.html">HVAC Maintenance</a>
          <a href="hvac-installation.html">HVAC Installation</a>
          <a href="hvac-cleaning-testing.html">Cleaning &amp; Testing</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="#">Areas ▾</a>
        <div class="nav-dropdown-menu">
          <a href="bridgeport-ct.html">Bridgeport, CT</a>
          <a href="fairfield-county-ct.html">Fairfield County, CT</a>
        </div>
      </div>
      <a href="faqs.html">FAQs</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div style="display:flex;align-items:center;gap:16px">
      <div class="header-phone"><a href="tel:2035454614">(203) 545-4614</a></div>
      <a href="contact.html" class="btn btn-fire btn-sm">Free Quote</a>
      <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

RAYS.trustHTML = `
<div class="trust-strip">
  <div class="trust-scroll">
    ${Array(2).fill([
      '20+ Years Experience','Licensed &amp; Insured','Same-Day Service','Free Estimates',
      '24/7 Emergency Line','100% Satisfaction','All Makes &amp; Models','Fairfield County CT',
      'Factory-Trained Techs','Financing Available','4.9★ Google Rating','No Hidden Fees'
    ].map(t => `<span class="trust-item"><span class="trust-dot"></span>${t}</span>`).join('')).flat().join('')}
  </div>
</div>`;

RAYS.footerHTML = `
<footer>
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <div class="logo-icon"><svg viewBox="0 0 24 24"><path d="M12 2C9.5 5 7 7.5 7 11a5 5 0 0010 0c0-3.5-2.5-6-5-9zm0 14a3 3 0 01-3-3c0-1.8 1-3.3 2-4.8 1 1.5 2 3 2 4.8a3 3 0 01-3 3z"/></svg></div>
            <div class="logo-wordmark">
              <div class="logo-name">Ray's Heating &amp; Cooling</div>
              <div class="logo-sub">Licensed HVAC Contractor · CT</div>
            </div>
          </a>
          <p>Serving Bridgeport and Fairfield County for 20+ years. Your comfort is our business — backed by real people, real guarantees, and real results.</p>
        </div>
        <div class="footer-col">
          <h5>Navigation</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="faqs.html">FAQs</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="hvac-repair.html">HVAC Repair</a></li>
            <li><a href="hvac-maintenance.html">Maintenance</a></li>
            <li><a href="hvac-installation.html">Installation</a></li>
            <li><a href="hvac-cleaning-testing.html">Cleaning &amp; Testing</a></li>
            <li><a href="bridgeport-ct.html">Bridgeport, CT</a></li>
            <li><a href="fairfield-county-ct.html">Fairfield County</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <div class="footer-contact-row">
            <div class="footer-contact-line"><svg viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><a href="tel:2035454614">(203) 545-4614</a></div>
            <div class="footer-contact-line"><svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:save@raysheatingandcoolingllc.com">save@raysheatingandcoolingllc.com</a></div>
            <div class="footer-contact-line"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span>83 Johnson St, Bridgeport CT 06604</span></div>
            <div class="footer-contact-line"><svg viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>Mon–Sun 7AM–9PM · Emergency 24/7</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <span>© 2026 Ray's Heating &amp; Cooling LLC · All Rights Reserved</span>
      <span>Licensed HVAC Contractor · Bridgeport, CT · <a href="admin-leads.html">Admin</a></span>
    </div>
  </div>
</footer>`;

// ── Lead Storage ─────────────────────────────────────────────
const KEY = 'rays_leads_v2';
RAYS.getLeads  = () => { try { return JSON.parse(localStorage.getItem(KEY)||'[]'); } catch { return []; }};
RAYS.saveLeads = (l) => localStorage.setItem(KEY, JSON.stringify(l));
RAYS.addLead   = async (data) => {
  const leads = RAYS.getLeads();
  const lead = { ...data, id: Date.now(), date: new Date().toLocaleString(), status: 'New' };
  leads.unshift(lead);
  RAYS.saveLeads(leads);
  // Send to server
  try {
    const resp = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await resp.json();
    console.log('Lead stored:', result);
  } catch(e) {
    console.log('Lead saved locally; server send failed:', e.message);
  }
  return lead;
};

// ── Form Handler ──────────────────────────────────────────────
RAYS.bindForm = (formId) => {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    RAYS.addLead(data).then(() => {
      if (btn) { btn.disabled = false; btn.textContent = 'Request Free Estimate →'; }
    const fields  = document.getElementById(formId + '-fields');
    const success = document.getElementById(formId + '-success');
    if (fields)  fields.style.display  = 'none';
    if (success) success.style.display = 'block';
  });
};

// ── FAQ ───────────────────────────────────────────────────────
RAYS.faqData = [
  { q: "Why is my HVAC system making strange noises?", a: "Banging, rattling, or squealing usually signals a loose component, worn belt, or refrigerant issue. Some startup noise is normal, but persistent sounds need a pro. We can often diagnose over the phone — call (203) 545-4614." },
  { q: "How often should I replace my air filters?", a: "Every 1–3 months depending on usage, pets, and air quality. Check monthly and replace when visibly dirty. A clogged filter makes your system work harder, raising energy bills and accelerating wear." },
  { q: "What is the average lifespan of an HVAC system?", a: "With proper maintenance: heat pumps ~15 years, central AC ~15–18 years, gas furnaces 20+. Annual tune-ups can extend lifespan significantly and prevent expensive breakdowns." },
  { q: "Do you offer free estimates?", a: "Always. We provide free, no-obligation on-site estimates with clear upfront pricing before any work begins. No hidden fees, ever." },
  { q: "Do you offer financing?", a: "Yes — we partner with Malcolm's to offer free financing for qualifying customers. Apply online in minutes and get same-day approval so your comfort doesn't have to wait." },
  { q: "What areas do you serve?", a: "We serve all of Fairfield County, CT — including Bridgeport, Trumbull, Stratford, Shelton, Milford, Norwalk, Stamford, Westport, Fairfield, Easton, Monroe, and Greenwich." },
  { q: "Are you licensed and insured?", a: "100%. Ray's Heating & Cooling LLC is fully licensed and insured in Connecticut. Every technician is background-checked, drug-tested, and factory-trained." },
  { q: "Do you offer 24/7 emergency service?", a: "Yes. HVAC emergencies don't follow office hours and neither do we. Call (203) 545-4614 any time — nights, weekends, and holidays included." }
];

RAYS.renderFAQ = (containerId, limit) => {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = limit ? RAYS.faqData.slice(0, limit) : RAYS.faqData;
  el.innerHTML = items.map(item => `
    <div class="faq-item">
      <button class="faq-btn" aria-expanded="false">
        <span>${item.q}</span>
        <div class="faq-chevron">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M19 9l-7 7-7-7"/></svg>
        </div>
      </button>
      <div class="faq-answer">${item.a}</div>
    </div>`).join('');
};

// ── Inject ────────────────────────────────────────────────────
RAYS.inject = () => {
  ['topbar','header','trust','footer'].forEach(id => {
    const el = document.getElementById(id + '-slot');
    if (el) el.outerHTML = RAYS[id + 'HTML'];
  });
};

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (ham && nav) {
    ham.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.addEventListener('click', e => {
      if (!ham.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Active nav link
  const page = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === 'index.html' && href === 'index.html')) a.classList.add('active');
  });

  // Scroll animations
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
    }, { threshold: 0.08 });
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }

  // Bind forms
  ['hero-form','contact-form','faq-form','page-form'].forEach(RAYS.bindForm);
});
