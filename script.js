// ─── Supabase config ────────────────────────────────────────────────────────
const SUPABASE_URL = "https://belcwyvweawhjiyrenzf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_48klcGVCtrNivB5QocSshA_KtZyaHI4";

async function sbFetch(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) throw new Error(`Supabase error: ${res.status} ${res.statusText}`);
  return res.json();
}

async function sbInsert(table, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`Supabase insert error: ${res.status} ${res.statusText}`);
  return res.json();
}

async function sbUpdate(table, id, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`Supabase update error: ${res.status} ${res.statusText}`);
  return res.json();
}

async function sbDelete(table, id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    }
  });
  if (!res.ok) throw new Error(`Supabase delete error: ${res.status} ${res.statusText}`);
}

// ─── Constants ───────────────────────────────────────────────────────────────
const PASSWORD_KEY = "fresh-finishes-admin-password";
const DEFAULT_PASSWORD = "DetailBoss2026!";
const UPLOAD_MAX_SIZE = 1400;
const UPLOAD_QUALITY = 0.78;

// ─── Hard-coded defaults (everything except galleryFolders & reviews) ─────────
const defaults = {
  businessName: "Fresh Finishes",
  businessInitials: "FF",
  businessTagline: "Deep gloss. Clean finish. Every time.",
  navAbout: "About",
  navServices: "Services",
  navGallery: "Gallery",
  navReviews: "Reviews",
  navContact: "Contact",
  heroKicker: "Premium mobile detailing service",
  heroTitle: "Make your car look freshly delivered again.",
  heroText: "Paint-safe washes, interior resets, Wax finishes, and finishing work for drivers who care about the details.",
  primaryCta: "Book a detail",
  secondaryCta: "View packages",
  heroImage: "https://res.cloudinary.com/djzzklirv/image/upload/v1779174477/2025_Jeep_Wagoneer_7_yivntq.jpg",
  servicesKicker: "Packages",
  servicesTitle: "Choose the finish your vehicle deserves.",
  servicesIntro: "Condition of vehicle has no effect on price. The vehicles final look is a reflection of the package chosen.",
  aboutKicker: "Meet the detailer",
  aboutTitle: "A little about the person behind the polish.",
  aboutText: `Meet Braedyn Arend and Cole Lausch, the two guys behind Fresh Finishes Mobile Auto Detailing. Braedyn is a sophomore at Michigan State University studying computer science, and Cole is a sophomore at Western Michigan University studying accounting. Despite our busy schedules, we share one passion that started long before college — keeping our cars looking exactly the way we did the day they drove them off the lot.

That obsession is what built this business. Long before Fresh Finishes had a name, we were spending weekends in the driveway, testing products, refining techniques, and making sure every panel, every wheel, and every line of trim looked showroom-perfect.

What started as taking care of their own cars quickly turned into helping out family and friends. Word spread, and what was once a weekend hobby became something real. As demand grew, so did our investment in the craft — upgrading to professional-grade products, learning advanced detailing techniques, and treating every car with the same care they put into our own.

We both stay busy with school, but our commitment to quality never takes a back seat. Fresh Finishes is a reflection of who we are — detail-oriented, hardworking, and genuinely proud of every car we touch.`,
  aboutImage: "assets/owner.jpg",
  processKicker: "How it works",
  processTitle: "A straightforward detail from first message to final wipe-down.",
  galleryKicker: "Gallery",
  galleryTitle: "Recent shine folders.",
  galleryIntro: "Click a vehicle folder to see the photos from that specific car.",
  reviewsKicker: "Reviews",
  reviewsTitle: "Customers notice the difference.",
  contactKicker: "Book now",
  contactTitle: "Ready for a sharper finish?",
  contactText: "Text or email your vehicle and preferred package. We will figure out the best day that works for you.",
  phoneLabel: "(269) 769-4425",
  phoneHref: "+12697694425",
  emailLabel: "freshfinishesdetail@gmail.com",
  emailHref: "freshfinishesdetail@gmail.com",
  addressLabel: "Berrien County, MI",
  hoursLabel: "Mon-Sat, 8 AM-6 PM (By appointment)",
  formNameLabel: "Name",
  formVehicleLabel: "Vehicle",
  formServiceLabel: "Service wanted",
  formMessageLabel: "Message",
  formSubmitLabel: "Create email request",
  footerText: "Built for serious shine and everyday drivers.",
  theme: {
    accent: "#e50914",
    accent2: "#ff3b30",
    bg: "#050505",
    panel: "#101010",
    text: "#f6f2ee",
    muted: "#b7b0aa"
  },
  stats: [
    { value: "5-star", label: "5-Star, commercial-grade products" },
    { value: "Paint-safe", label: "wash methods" },
    { value: "Mobile", label: "We come to you" }
  ],
  aboutPoints: ["Owner-operated service", "Paint-safe process", "Clear quotes before work starts"],
  highlights: ["Exterior details", "Interior resets", "Wax protection", "Fleet-ready cleaning"],
  services: [
    {
      name: "Basic Interior",
      price: "From $120",
      description: "1.5 Hours - 2 Hours",
      features: ["Entire vehicle vacuum", "steam clean mixed with our premium interior cleaner solution", "Invisible glass"],
      featured: false
    },
    {
      name: "Basic Package",
      price: "From $170",
      description: "2 Hours - 2.5 Hours",
      features: ["Entire vehicle vacuum", "steam clean mixed with our premium interior cleaner solution", "Invisible glass", "Exterior foam rinse and hand wash", "Wheel and rim cleaning"],
      featured: false
    },
    {
      name: "Premium Interior",
      price: "From $165",
      description: "2.5 Hours - 3 Hours",
      features: ["Entire vehicle vacuum", "steam clean mixed with our premium interior cleaner solution", "Invisible glass", "Water vacuum mixed with our stain remover on all cloth", "Carpet reset", "UV protectant coating on all vinyl and plastics", "Leather conditioning", "Attention to specific interior eye sores"],
      featured: false
    },
     {
      name: "Premium Exterior",
      price: "From $85",
      description: "1 Hours",
      features: ["Invisible glass", "Exterior foam rinse and hand wash", "Wheel and rim cleaning", "Clay bar decontamination", "Tire shine", "UV protectant coating on all exterior plastics and vinyls", "Bug gut remover", "Attention to specific exterior eye sores"],
      featured: false
    },
     {
      name: "Premium Package",
      price: "From $250",
      description: "3.5 Hours - 4 Hours",
      features: ["Entire vehicle vacuum", "steam clean mixed with our premium interior cleaner solution", "Invisible glass", "Water vacuum mixed with our stain remover on all cloth", "Carpet reset", "UV protectant coating on all vinyl and plastics", "Leather conditioning", "Attention to specific interior eye sores", "Invisible glass", "Exterior foam rinse and hand wash", "Wheel and rim cleaning", "Clay bar decontamination", "Tire shine", "UV protectant coating on all exterior plastics and vinyls", "Bug gut remover", "Attention to specific exterior eye sores"],
      featured: true
    },
    {
      name: "Wax Coating",
      price: "From $250",
      description: "4.5 Hours - 5 Hours",
      features: ["Invisible glass", "Exterior foam rinse and hand wash", "Wheel and rim cleaning", "Clay bar decontamination", "Tire shine", "UV protectant coating on all exterior plastics and vinyls", "Bug gut remover", "Attention to specific exterior eye sores", "Hand-applied premium wax coating on entire exterior paint"],
      featured: false
    }
    
  ],
  process: [
    { title: "Request a quote", text: "Tell us about the vehicle, condition, location, and package you want." },
    { title: "Confirm the plan", text: "We lock in timing, pricing, and any special areas that need attention." },
    { title: "Detail day", text: "Your vehicle gets a careful wash, clean, polish, or protection service." }
  ]
};

// ─── Runtime state ────────────────────────────────────────────────────────────
// site holds the hard-coded fields; Supabase data is in supabaseGalleryFolders / supabaseReviews
let site = structuredClone(defaults);
let supabaseGalleryFolders = []; // [{id, title, vehicle, description, coverImage, coverWidth, coverHeight, coverFit, photoWidth, photoHeight, imageFit, sort_order}]
let supabasePhotos = [];         // [{id, folder_id, label, image, sort_order}]
let supabaseReviews = [];        // [{id, name, quote}]
let activeTab = "Brand";

// ─── Admin sections (Gallery & Reviews now managed via Supabase) ──────────────
const sections = {
  Brand: [
    ["businessName", "Business name"],
    ["businessInitials", "Logo initials"],
    ["businessTagline", "Small tagline"],
    ["footerText", "Footer text"]
  ],
  Navigation: [
    ["navAbout", "About label"],
    ["navServices", "Services label"],
    ["navGallery", "Gallery label"],
    ["navReviews", "Reviews label"],
    ["navContact", "Contact label"],
    ["primaryCta", "Primary button"],
    ["secondaryCta", "Secondary button"]
  ],
  Hero: [
    ["heroKicker", "Hero kicker"],
    ["heroTitle", "Hero headline", "textarea"],
    ["heroText", "Hero description", "textarea"],
    ["heroImage", "Hero image", "image"]
  ],
  About: [
    ["aboutKicker", "About kicker"],
    ["aboutTitle", "About heading", "textarea"],
    ["aboutText", "About story", "textarea"],
    ["aboutImage", "About image", "image"]
  ],
  Sections: [
    ["servicesKicker", "Services kicker"],
    ["servicesTitle", "Services heading", "textarea"],
    ["servicesIntro", "Services intro", "textarea"],
    ["processKicker", "Process kicker"],
    ["processTitle", "Process heading", "textarea"],
    ["galleryKicker", "Gallery kicker"],
    ["galleryTitle", "Gallery heading", "textarea"],
    ["galleryIntro", "Gallery intro", "textarea"],
    ["reviewsKicker", "Reviews kicker"],
    ["reviewsTitle", "Reviews heading", "textarea"]
  ],
  Contact: [
    ["contactKicker", "Contact kicker"],
    ["contactTitle", "Contact heading", "textarea"],
    ["contactText", "Contact copy", "textarea"],
    ["phoneLabel", "Phone display"],
    ["phoneHref", "Phone number for dialing"],
    ["emailLabel", "Email display"],
    ["emailHref", "Email address"],
    ["addressLabel", "Service area"],
    ["hoursLabel", "Hours"],
    ["formNameLabel", "Name field label"],
    ["formVehicleLabel", "Vehicle field label"],
    ["formServiceLabel", "Service field label"],
    ["formMessageLabel", "Message field label"],
    ["formSubmitLabel", "Form button label"]
  ],
  Theme: "theme",
  Stats: "stats",
  "About Points": "aboutPoints",
  Highlights: "highlights",
  Services: "services",
  Process: "process",
  Gallery: "gallery",
  Reviews: "reviews",
  Security: "security"
};

// ─── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
  renderSite(); // render hard-coded content immediately
  bindAdmin();
  bindQuoteForm();
  await loadSupabaseData();
  renderSite(); // re-render once Supabase data is in
});

// ─── Supabase data loading ────────────────────────────────────────────────────
async function loadSupabaseData() {
  try {
    const [folders, photos, reviews] = await Promise.all([
      sbFetch("gallery_folders?select=*&order=sort_order.asc,id.asc"),
      sbFetch("gallery_photos?select=*&order=folder_id.asc,sort_order.asc,id.asc"),
      sbFetch("reviews?select=*&order=id.asc")
    ]);
    supabaseGalleryFolders = folders || [];
    supabasePhotos = photos || [];
    supabaseReviews = reviews || [];
  } catch (err) {
    console.warn("Could not load Supabase data:", err.message);
    supabaseGalleryFolders = [];
    supabasePhotos = [];
    supabaseReviews = [];
  }
}

// Build a merged folder list (folders with their photos attached) for rendering
function buildFolders() {
  return supabaseGalleryFolders.map((folder) => {
    const photos = supabasePhotos
      .filter((p) => p.folder_id === folder.id)
      .map((p) => ({ id: p.id, label: p.label || "Photo", image: p.image || "assets/detail-bay.svg" }));
    return {
      id: folder.id,
      title: folder.title || "Vehicle folder",
      vehicle: folder.vehicle || "Detailed vehicle",
      description: folder.description || "",
      coverImage: folder.cover_image || (photos[0]?.image) || "assets/detail-bay.svg",
      coverWidth: Number(folder.cover_width) || 260,
      coverHeight: Number(folder.cover_height) || 260,
      coverFit: folder.cover_fit || "cover",
      photoWidth: Number(folder.photo_width) || 240,
      photoHeight: Number(folder.photo_height) || 180,
      imageFit: folder.image_fit || "cover",
      photos: photos.length ? photos : [{ label: "Detail photo", image: folder.cover_image || "assets/detail-bay.svg" }]
    };
  });
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderSite() {
  applyTheme();
  document.title = site.businessName;
  document.querySelectorAll("[data-bind]").forEach((node) => {
    const key = node.dataset.bind;
    if (site[key] !== undefined) node.textContent = site[key];
  });
  document.querySelectorAll("[data-image]").forEach((node) => {
    const key = node.dataset.image;
    if (site[key]) node.src = site[key];
  });
  const phoneLink = document.querySelector('[data-link="phone"]');
  const emailLink = document.querySelector('[data-link="email"]');
  if (phoneLink) phoneLink.href = `tel:${site.phoneHref}`;
  if (emailLink) emailLink.href = `mailto:${site.emailHref}`;
  renderStats();
  renderHighlights();
  renderServices();
  renderAboutPoints();
  renderProcess();
  renderGallery();
  renderAlbumPage();
  renderReviews();
  renderServiceOptions();
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--accent", site.theme.accent);
  root.style.setProperty("--accent-2", site.theme.accent2);
  root.style.setProperty("--bg", site.theme.bg);
  root.style.setProperty("--panel", site.theme.panel);
  root.style.setProperty("--text", site.theme.text);
  root.style.setProperty("--muted", site.theme.muted);
}

function renderStats() {
  const stats = document.getElementById("stats");
  if (!stats) return;
  stats.innerHTML = site.stats.map((item) => `
    <div class="stat">
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </div>
  `).join("");
}

function renderHighlights() {
  const highlights = document.getElementById("highlights");
  if (!highlights) return;
  highlights.innerHTML = site.highlights.map((item) => `
    <div class="strip-item">${escapeHtml(item)}</div>
  `).join("");
}

function renderServices() {
  const serviceGrid = document.getElementById("serviceGrid");
  if (!serviceGrid) return;
  serviceGrid.innerHTML = site.services.map((service) => `
    <article class="service-card ${service.featured ? "featured" : ""}">
      <h3>${escapeHtml(service.name)}</h3>
      <div class="price">${escapeHtml(service.price)}</div>
      <p>${escapeHtml(service.description)}</p>
      <ul class="feature-list">
        ${service.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderAboutPoints() {
  const aboutPoints = document.getElementById("aboutPoints");
  if (!aboutPoints) return;
  aboutPoints.innerHTML = site.aboutPoints.map((item) => `
    <span>${escapeHtml(item)}</span>
  `).join("");
}

function renderProcess() {
  const processList = document.getElementById("processList");
  if (!processList) return;
  processList.innerHTML = site.process.map((step, index) => `
    <article class="process-item">
      <span class="process-number">${index + 1}</span>
      <div>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.text)}</p>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;
  const folders = buildFolders();
  if (!folders.length) {
    galleryGrid.innerHTML = `<p class="form-note" style="padding:0 clamp(18px,5vw,72px)">No gallery folders yet. Add them in the admin panel.</p>`;
    return;
  }
  galleryGrid.innerHTML = folders.map((folder, index) => `
    <a class="gallery-card folder-card" href="gallery.html?car=${index}" style="--cover-width:${folder.coverWidth}px; --cover-height:${folder.coverHeight}px; --cover-fit:${escapeAttribute(folder.coverFit)}">
      <img src="${escapeAttribute(folder.coverImage)}" alt="${escapeAttribute(folder.title)}">
      <span>
        <strong>${escapeHtml(folder.title)}</strong>
        <small>${escapeHtml(folder.vehicle)} · ${folder.photos.length} photo${folder.photos.length !== 1 ? "s" : ""}</small>
      </span>
    </a>
  `).join("");
}

function renderAlbumPage() {
  const albumGrid = document.getElementById("albumGrid");
  if (!albumGrid) return;
  const folders = buildFolders();
  if (!folders.length) {
    albumGrid.innerHTML = `<p class="form-note">No gallery folders have been added yet.</p>`;
    return;
  }
  const index = Number(new URLSearchParams(window.location.search).get("car")) || 0;
  const folder = folders[index] || folders[0];
  document.title = `${folder.title} | ${site.businessName}`;
  const kickerEl = document.getElementById("albumKicker");
  const titleEl = document.getElementById("albumTitle");
  const descEl = document.getElementById("albumDescription");
  if (kickerEl) kickerEl.textContent = folder.vehicle;
  if (titleEl) titleEl.textContent = folder.title;
  if (descEl) descEl.textContent = folder.description;
  albumGrid.style.setProperty("--album-photo-width", `${folder.photoWidth}px`);
  albumGrid.style.setProperty("--album-photo-height", `${folder.photoHeight}px`);
  albumGrid.style.setProperty("--album-fit", folder.imageFit);
  albumGrid.innerHTML = folder.photos.map((photo) => `
    <figure class="album-photo">
      <img src="${escapeAttribute(photo.image)}" alt="${escapeAttribute(photo.label)}">
      <figcaption>${escapeHtml(photo.label)}</figcaption>
    </figure>
  `).join("");
}

function renderReviews() {
  const reviewGrid = document.getElementById("reviewGrid");
  if (!reviewGrid) return;
  if (!supabaseReviews.length) {
    reviewGrid.innerHTML = `<p class="form-note">No reviews yet. Add them in the admin panel.</p>`;
    return;
  }
  reviewGrid.innerHTML = supabaseReviews.map((review) => `
    <article class="review-card">
      <div class="stars">★★★★★</div>
      <h3>${escapeHtml(review.name)}</h3>
      <p>${escapeHtml(review.quote)}</p>
    </article>
  `).join("");
}

function renderServiceOptions() {
  const serviceSelect = document.getElementById("serviceSelect");
  if (!serviceSelect) return;
  serviceSelect.innerHTML = site.services.map((service) => `
    <option>${escapeHtml(service.name)}</option>
  `).join("");
}

// ─── Quote form ───────────────────────────────────────────────────────────────
function bindQuoteForm() {
  const quoteForm = document.getElementById("quoteForm");
  if (!quoteForm) return;
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Detail request from ${data.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name")}`,
      `Vehicle: ${data.get("vehicle")}`,
      `Service: ${data.get("service")}`,
      "",
      data.get("message") || "No extra notes provided."
    ].join("\n"));
    window.location.href = `mailto:${site.emailHref}?subject=${subject}&body=${body}`;
    document.getElementById("formNote").textContent = "Opening your email app with the request filled in.";
  });
}

// ─── Admin panel ──────────────────────────────────────────────────────────────
function bindAdmin() {
  if (!document.getElementById("adminShell")) return;
  document.querySelectorAll("[data-admin-open]").forEach((button) => {
    button.addEventListener("click", openAdmin);
  });
  document.querySelectorAll("[data-admin-close]").forEach((button) => {
    button.addEventListener("click", closeAdmin);
  });
  document.getElementById("adminShell").addEventListener("click", (e) => {
    if (e.target === document.getElementById("adminShell")) closeAdmin();
  });
  document.getElementById("loginButton").addEventListener("click", login);
  document.getElementById("passwordInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") login();
  });
  document.getElementById("saveButton").addEventListener("click", async () => {
    readAdminFields();
    renderSite();
    setAdminStatus("Saved.");
  });
  document.getElementById("previewButton").addEventListener("click", () => {
    readAdminFields();
    renderSite();
  });
  document.getElementById("resetButton").addEventListener("click", () => {
    if (!confirm("Reset the hard-coded site content back to defaults? Gallery and reviews in Supabase are not affected.")) return;
    site = structuredClone(defaults);
    renderSite();
    renderAdminFields();
    setAdminStatus("Site content reset to defaults.");
  });
  renderAdminTabs();
}

function openAdmin() {
  document.getElementById("adminShell").classList.add("is-open");
  document.getElementById("adminShell").setAttribute("aria-hidden", "false");
  document.body.classList.add("admin-locked");
  setTimeout(() => {
    const passwordInput = document.getElementById("passwordInput");
    if (!passwordInput.hidden) passwordInput.focus();
  }, 50);
}

function closeAdmin() {
  if (!document.getElementById("editorView").hidden) {
    readAdminFields();
    renderSite();
  }
  document.getElementById("adminShell").classList.remove("is-open");
  document.getElementById("adminShell").setAttribute("aria-hidden", "true");
  document.body.classList.remove("admin-locked");
}

function login() {
  const input = document.getElementById("passwordInput");
  const message = document.getElementById("loginMessage");
  if (input.value === getPassword()) {
    document.getElementById("loginView").hidden = true;
    document.getElementById("editorView").hidden = false;
    message.textContent = "";
    renderAdminFields();
    return;
  }
  message.textContent = "That password did not match.";
}

function getPassword() {
  return localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
}

function renderAdminTabs() {
  document.getElementById("adminTabs").innerHTML = Object.keys(sections).map((name) => `
    <button class="tab-button ${name === activeTab ? "is-active" : ""}" type="button" data-tab="${name}">${name}</button>
  `).join("");
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      activeTab = button.dataset.tab;
      renderAdminTabs();
      renderAdminFields();
    });
  });
}

function renderAdminFields() {
  const fields = document.getElementById("adminFields");
  const section = sections[activeTab];
  if (Array.isArray(section)) {
    fields.innerHTML = `<div class="field-group">${section.map(renderSimpleField).join("")}</div>`;
    bindImageInputs();
    return;
  }
  if (section === "theme") fields.innerHTML = renderThemeFields();
  if (section === "stats") fields.innerHTML = renderSimpleList("stats", ["value", "label"]);
  if (section === "aboutPoints") fields.innerHTML = renderHighlightFields("aboutPoints", "About point", "Add about point");
  if (section === "highlights") fields.innerHTML = renderHighlightFields();
  if (section === "services") fields.innerHTML = renderServicesFields();
  if (section === "process") fields.innerHTML = renderSimpleList("process", ["title", "text"]);
  if (section === "gallery") { fields.innerHTML = renderGalleryFields(); bindGalleryAdminButtons(); return; }
  if (section === "reviews") { fields.innerHTML = renderReviewsFields(); bindReviewsAdminButtons(); return; }
  if (section === "security") fields.innerHTML = renderSecurityFields();
  bindAdminFieldButtons();
  bindImageInputs();
}

// ─── Admin field renderers (hard-coded sections) ──────────────────────────────
function renderSimpleField([key, label, type = "text"]) {
  const value = getByPath(site, key) || "";
  if (type === "image") {
    const savedUpload = isDataUrl(value);
    return `
      <div class="field-row">
        <label><span>${label}</span><input data-image-url-field="${key}" value="${savedUpload ? "" : escapeAttribute(value)}" placeholder="${savedUpload ? "Uploaded image saved" : ""}"></label>
        <img class="image-preview" src="${escapeAttribute(value)}" alt="" loading="lazy">
        <input type="file" accept="image/*" data-image-upload="${key}">
        <small>Paste an image URL or upload a picture.</small>
      </div>
    `;
  }
  const input = type === "textarea"
    ? `<textarea rows="4" data-field="${key}">${escapeHtml(value)}</textarea>`
    : `<input data-field="${key}" value="${escapeAttribute(value)}">`;
  return `<div class="field-row"><label><span>${label}</span>${input}</label></div>`;
}

function renderThemeFields() {
  const colorFields = [
    ["theme.accent", "Main red"],
    ["theme.accent2", "Bright red"],
    ["theme.bg", "Page background"],
    ["theme.panel", "Panel color"],
    ["theme.text", "Text color"],
    ["theme.muted", "Muted text"]
  ];
  return `<div class="field-group mini-grid">${colorFields.map(([key, label]) => `
    <label><span>${label}</span><input type="color" data-field="${key}" value="${escapeAttribute(getByPath(site, key))}"></label>
  `).join("")}</div>`;
}

function renderSimpleList(key, props) {
  return `
    <div class="field-group" data-list="${key}">
      ${site[key].map((item, index) => `
        <div class="repeat-item">
          ${props.map((prop) => `
            <label><span>${titleCase(prop)}</span><textarea rows="2" data-list-field="${key}.${index}.${prop}">${escapeHtml(item[prop])}</textarea></label>
          `).join("")}
          <button class="button danger" type="button" data-remove="${key}.${index}">Remove</button>
        </div>
      `).join("")}
      <button class="button button-ghost" type="button" data-add="${key}">Add item</button>
    </div>
  `;
}

function renderHighlightFields(key = "highlights", label = "Highlight", addLabel = "Add highlight") {
  return `
    <div class="field-group">
      ${site[key].map((item, index) => `
        <div class="repeat-item">
          <label><span>${label}</span><input data-list-field="${key}.${index}" value="${escapeAttribute(item)}"></label>
          <button class="button danger" type="button" data-remove="${key}.${index}">Remove</button>
        </div>
      `).join("")}
      <button class="button button-ghost" type="button" data-add="${key}">${addLabel}</button>
    </div>
  `;
}

function renderServicesFields() {
  return `
    <div class="field-group">
      ${site.services.map((service, index) => `
        <div class="repeat-item">
          <div class="mini-grid">
            <label><span>Name</span><input data-list-field="services.${index}.name" value="${escapeAttribute(service.name)}"></label>
            <label><span>Price</span><input data-list-field="services.${index}.price" value="${escapeAttribute(service.price)}"></label>
          </div>
          <label><span>Description</span><textarea rows="3" data-list-field="services.${index}.description">${escapeHtml(service.description)}</textarea></label>
          <label><span>Features, one per line</span><textarea rows="4" data-list-field="services.${index}.features">${escapeHtml(service.features.join("\n"))}</textarea></label>
          <label><span>Featured package</span><select data-list-field="services.${index}.featured"><option value="false" ${!service.featured ? "selected" : ""}>No</option><option value="true" ${service.featured ? "selected" : ""}>Yes</option></select></label>
          <button class="button danger" type="button" data-remove="services.${index}">Remove service</button>
        </div>
      `).join("")}
      <button class="button button-ghost" type="button" data-add="services">Add service</button>
    </div>
  `;
}

function renderSecurityFields() {
  return `
    <div class="field-group">
      <p class="form-note">Default password: ${DEFAULT_PASSWORD}</p>
      <label><span>New admin password</span><input type="password" id="newPassword"></label>
      <button class="button button-primary" type="button" id="passwordSave">Update password</button>
      <p class="form-note">Password is stored in this browser only.</p>
    </div>
  `;
}

// ─── Gallery admin (Supabase) ─────────────────────────────────────────────────
function renderGalleryFields() {
  const folders = buildFolders();
  const rows = folders.map((folder) => `
    <div class="repeat-item" data-folder-id="${folder.id}">
      <div class="mini-grid">
        <label><span>Folder title</span><input class="sb-folder-field" data-folder-id="${folder.id}" data-col="title" value="${escapeAttribute(folder.title)}"></label>
        <label><span>Vehicle label</span><input class="sb-folder-field" data-folder-id="${folder.id}" data-col="vehicle" value="${escapeAttribute(folder.vehicle)}"></label>
      </div>
      <label><span>Folder description</span><textarea rows="2" class="sb-folder-field" data-folder-id="${folder.id}" data-col="description">${escapeHtml(folder.description)}</textarea></label>
      <label><span>Cover image URL</span><input class="sb-folder-field" data-folder-id="${folder.id}" data-col="cover_image" value="${isDataUrl(folder.coverImage) ? "" : escapeAttribute(folder.coverImage)}" placeholder="${isDataUrl(folder.coverImage) ? "Uploaded image saved" : ""}"></label>
      <img class="image-preview" src="${escapeAttribute(folder.coverImage)}" alt="" loading="lazy">
      <input type="file" accept="image/*" data-sb-folder-image="${folder.id}">
      <div class="mini-grid">
        <label><span>Card width</span><input type="number" min="180" max="720" class="sb-folder-field" data-folder-id="${folder.id}" data-col="cover_width" value="${folder.coverWidth}"></label>
        <label><span>Card height</span><input type="number" min="160" max="520" class="sb-folder-field" data-folder-id="${folder.id}" data-col="cover_height" value="${folder.coverHeight}"></label>
        <label><span>Cover fit</span><select class="sb-folder-field" data-folder-id="${folder.id}" data-col="cover_fit"><option value="cover" ${folder.coverFit === "cover" ? "selected" : ""}>Crop to frame</option><option value="contain" ${folder.coverFit === "contain" ? "selected" : ""}>Show full</option></select></label>
        <label><span>Photo fit</span><select class="sb-folder-field" data-folder-id="${folder.id}" data-col="image_fit"><option value="cover" ${folder.imageFit === "cover" ? "selected" : ""}>Crop to frame</option><option value="contain" ${folder.imageFit === "contain" ? "selected" : ""}>Show full</option></select></label>
        <label><span>Photo width</span><input type="number" min="140" max="520" class="sb-folder-field" data-folder-id="${folder.id}" data-col="photo_width" value="${folder.photoWidth}"></label>
        <label><span>Photo height</span><input type="number" min="120" max="420" class="sb-folder-field" data-folder-id="${folder.id}" data-col="photo_height" value="${folder.photoHeight}"></label>
      </div>
      <div class="nested-list">
        <strong>Photos in this folder</strong>
        ${folder.photos.map((photo) => `
          <div class="repeat-item photo-editor" data-photo-id="${photo.id}">
            <label><span>Photo label</span><input class="sb-photo-field" data-photo-id="${photo.id}" data-col="label" value="${escapeAttribute(photo.label)}"></label>
            <label><span>Photo URL</span><input class="sb-photo-field" data-photo-id="${photo.id}" data-col="image" value="${isDataUrl(photo.image) ? "" : escapeAttribute(photo.image)}" placeholder="${isDataUrl(photo.image) ? "Uploaded image saved" : ""}"></label>
            <img class="image-preview" src="${escapeAttribute(photo.image)}" alt="" loading="lazy">
            <input type="file" accept="image/*" data-sb-photo-image="${photo.id}">
            <button class="button danger" type="button" data-sb-remove-photo="${photo.id}">Remove photo</button>
          </div>
        `).join("")}
        <button class="button button-ghost" type="button" data-sb-add-photo="${folder.id}">Add photo to this folder</button>
      </div>
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="button button-primary" type="button" data-sb-save-folder="${folder.id}">Save folder</button>
        <button class="button danger" type="button" data-sb-remove-folder="${folder.id}">Remove folder</button>
      </div>
    </div>
  `).join("");

  return `
    <div class="field-group">
      <p class="form-note">Folders and photos are saved directly to Supabase. Click "Save folder" after making changes.</p>
      ${rows}
      <button class="button button-ghost" type="button" id="sbAddFolder">Add vehicle folder</button>
    </div>
  `;
}

function bindGalleryAdminButtons() {
  // Save folder
  document.querySelectorAll("[data-sb-save-folder]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const folderId = btn.dataset.sbSaveFolder;
      const data = readFolderFields(folderId);
      try {
        setAdminStatus("Saving folder...");
        await sbUpdate("gallery_folders", folderId, data);
        // Also save all photo fields in this folder
        const folderItem = document.querySelector(`.repeat-item[data-folder-id="${folderId}"]`);
        const photosInFolder = folderItem ? folderItem.querySelectorAll(`.repeat-item[data-photo-id]`) : [];
        const savePromises = [];
        photosInFolder.forEach((item) => {
          const photoId = item.dataset.photoId;
          const photoData = readPhotoFields(photoId);
          savePromises.push(sbUpdate("gallery_photos", photoId, photoData));
        });
        await Promise.all(savePromises);
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Folder saved to Supabase.");
      } catch (err) {
        setAdminStatus("Could not save folder: " + err.message, true);
      }
    });
  });

  // Remove folder
  document.querySelectorAll("[data-sb-remove-folder]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (!confirm("Remove this folder and all its photos?")) return;
      const folderId = btn.dataset.sbRemoveFolder;
      try {
        setAdminStatus("Removing folder...");
        // Delete photos first
        const photoIds = supabasePhotos.filter((p) => p.folder_id === Number(folderId) || p.folder_id === folderId).map((p) => p.id);
        await Promise.all(photoIds.map((id) => sbDelete("gallery_photos", id)));
        await sbDelete("gallery_folders", folderId);
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Folder removed.");
      } catch (err) {
        setAdminStatus("Could not remove folder: " + err.message, true);
      }
    });
  });

  // Add photo to folder
  document.querySelectorAll("[data-sb-add-photo]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const folderId = btn.dataset.sbAddPhoto;
      try {
        setAdminStatus("Adding photo...");
        await sbInsert("gallery_photos", { folder_id: folderId, label: "New photo", image: "assets/detail-bay.svg" });
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Photo added.");
      } catch (err) {
        setAdminStatus("Could not add photo: " + err.message, true);
      }
    });
  });

  // Remove photo
  document.querySelectorAll("[data-sb-remove-photo]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (!confirm("Remove this photo?")) return;
      const photoId = btn.dataset.sbRemovePhoto;
      try {
        setAdminStatus("Removing photo...");
        await sbDelete("gallery_photos", photoId);
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Photo removed.");
      } catch (err) {
        setAdminStatus("Could not remove photo: " + err.message, true);
      }
    });
  });

  // Add new folder
  const addFolderBtn = document.getElementById("sbAddFolder");
  if (addFolderBtn) {
    addFolderBtn.addEventListener("click", async () => {
      try {
        setAdminStatus("Adding folder...");
        const [newFolder] = await sbInsert("gallery_folders", {
          title: "New vehicle folder",
          vehicle: "Vehicle name",
          description: "Describe this car and the detail work shown.",
          cover_image: "assets/detail-bay.svg",
          cover_width: 260,
          cover_height: 260,
          cover_fit: "cover",
          photo_width: 240,
          photo_height: 180,
          image_fit: "cover"
        });
        // Add a starter photo
        await sbInsert("gallery_photos", { folder_id: newFolder.id, label: "New photo", image: "assets/detail-bay.svg" });
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Folder added. Fill in the details and click Save folder.");
      } catch (err) {
        setAdminStatus("Could not add folder: " + err.message, true);
      }
    });
  }

  // File uploads for folder cover images
  document.querySelectorAll("[data-sb-folder-image]").forEach((input) => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      const folderId = input.dataset.sbFolderImage;
      setAdminStatus("Uploading cover image...");
      try {
        const dataUrl = await compressImage(file);
        await sbUpdate("gallery_folders", folderId, { cover_image: dataUrl });
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Cover image saved.");
      } catch (err) {
        setAdminStatus("Could not upload image: " + err.message, true);
      } finally {
        input.value = "";
      }
    });
  });

  // File uploads for individual photos
  document.querySelectorAll("[data-sb-photo-image]").forEach((input) => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      const photoId = input.dataset.sbPhotoImage;
      setAdminStatus("Uploading photo...");
      try {
        const dataUrl = await compressImage(file);
        await sbUpdate("gallery_photos", photoId, { image: dataUrl });
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Photo saved.");
      } catch (err) {
        setAdminStatus("Could not upload photo: " + err.message, true);
      } finally {
        input.value = "";
      }
    });
  });
}

function readFolderFields(folderId) {
  const data = {};
  document.querySelectorAll(`.sb-folder-field[data-folder-id="${folderId}"]`).forEach((field) => {
    let value = field.value;
    if (["cover_width", "cover_height", "photo_width", "photo_height"].includes(field.dataset.col)) value = Number(value);
    data[field.dataset.col] = value;
  });
  return data;
}

function readPhotoFields(photoId) {
  const data = {};
  document.querySelectorAll(`.sb-photo-field[data-photo-id="${photoId}"]`).forEach((field) => {
    data[field.dataset.col] = field.value;
  });
  return data;
}

// ─── Reviews admin (Supabase) ─────────────────────────────────────────────────
function renderReviewsFields() {
  const rows = supabaseReviews.map((review) => `
    <div class="repeat-item" data-review-id="${review.id}">
      <label><span>Customer name</span><input class="sb-review-field" data-review-id="${review.id}" data-col="name" value="${escapeAttribute(review.name)}"></label>
      <label><span>Quote</span><textarea rows="3" class="sb-review-field" data-review-id="${review.id}" data-col="quote">${escapeHtml(review.quote)}</textarea></label>
      <div style="display:flex;gap:10px">
        <button class="button button-primary" type="button" data-sb-save-review="${review.id}">Save review</button>
        <button class="button danger" type="button" data-sb-remove-review="${review.id}">Remove</button>
      </div>
    </div>
  `).join("");

  return `
    <div class="field-group">
      <p class="form-note">Reviews are saved directly to Supabase. Click "Save review" after editing.</p>
      ${rows}
      <button class="button button-ghost" type="button" id="sbAddReview">Add review</button>
    </div>
  `;
}

function bindReviewsAdminButtons() {
  // Save review
  document.querySelectorAll("[data-sb-save-review]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const reviewId = btn.dataset.sbSaveReview;
      const data = {};
      document.querySelectorAll(`.sb-review-field[data-review-id="${reviewId}"]`).forEach((field) => {
        data[field.dataset.col] = field.value;
      });
      try {
        setAdminStatus("Saving review...");
        await sbUpdate("reviews", reviewId, data);
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Review saved.");
      } catch (err) {
        setAdminStatus("Could not save review: " + err.message, true);
      }
    });
  });

  // Remove review
  document.querySelectorAll("[data-sb-remove-review]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (!confirm("Remove this review?")) return;
      const reviewId = btn.dataset.sbRemoveReview;
      try {
        setAdminStatus("Removing review...");
        await sbDelete("reviews", reviewId);
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Review removed.");
      } catch (err) {
        setAdminStatus("Could not remove review: " + err.message, true);
      }
    });
  });

  // Add review
  const addReviewBtn = document.getElementById("sbAddReview");
  if (addReviewBtn) {
    addReviewBtn.addEventListener("click", async () => {
      try {
        setAdminStatus("Adding review...");
        await sbInsert("reviews", { name: "Customer name", quote: "Customer quote." });
        await loadSupabaseData();
        renderSite();
        renderAdminFields();
        setAdminStatus("Review added. Fill it in and click Save review.");
      } catch (err) {
        setAdminStatus("Could not add review: " + err.message, true);
      }
    });
  }
}

// ─── Hard-coded admin field buttons ──────────────────────────────────────────
function bindAdminFieldButtons() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      addItem(button.dataset.add);
      renderSite();
      renderAdminFields();
    });
  });
  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      const [key, index] = button.dataset.remove.split(".");
      site[key].splice(Number(index), 1);
      renderSite();
      renderAdminFields();
    });
  });
  const passwordSave = document.getElementById("passwordSave");
  if (passwordSave) {
    passwordSave.addEventListener("click", () => {
      const next = document.getElementById("newPassword").value.trim();
      if (next.length < 8) return setAdminStatus("Use at least 8 characters.", true);
      try {
        localStorage.setItem(PASSWORD_KEY, next);
        document.getElementById("newPassword").value = "";
        setAdminStatus("Password updated.");
      } catch {
        setAdminStatus("Password could not be saved.", true);
      }
    });
  }
}

function bindImageInputs() {
  document.querySelectorAll("[data-image-upload]").forEach((input) => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;
      readAdminFields();
      setAdminStatus("Processing photo...");
      try {
        const result = await compressImage(file);
        setByPath(site, input.dataset.imageUpload, result);
        renderSite();
        updateImageUploadPreview(input, result);
        setAdminStatus("Photo uploaded.");
      } catch {
        setAdminStatus("That photo could not be uploaded. Try a smaller file.", true);
      } finally {
        input.value = "";
      }
    });
  });
}

function addItem(key) {
  const templates = {
    stats: { value: "New stat", label: "Short label" },
    aboutPoints: "New about point",
    highlights: "New highlight",
    services: { name: "New service", price: "From $0", description: "Describe this service.", features: ["Feature one"], featured: false },
    process: { title: "New step", text: "Describe this step." }
  };
  if (templates[key]) site[key].push(structuredClone(templates[key]));
}

function updateImageUploadPreview(input, value) {
  const row = input.closest(".field-row, .repeat-item");
  const preview = row?.querySelector(".image-preview");
  const urlInput = row?.querySelector("[data-image-url-field]");
  if (preview) preview.src = value;
  if (urlInput) {
    urlInput.value = "";
    urlInput.placeholder = "Uploaded image saved";
  }
}

// ─── Field reading ────────────────────────────────────────────────────────────
function readAdminFields() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    setByPath(site, field.dataset.field, field.value);
  });
  document.querySelectorAll("[data-image-url-field]").forEach((field) => {
    const value = field.value.trim();
    if (value) setByPath(site, field.dataset.imageUrlField, value);
  });
  document.querySelectorAll("[data-list-field]").forEach((field) => {
    const path = field.dataset.listField;
    let value = field.value;
    if (path.endsWith(".features")) value = value.split("\n").map((item) => item.trim()).filter(Boolean);
    if (path.endsWith(".featured")) value = value === "true";
    setByPath(site, path, value);
  });
}

// ─── Admin status ─────────────────────────────────────────────────────────────
function setAdminStatus(message, isError = false) {
  const status = document.getElementById("adminStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

// ─── Image compression ────────────────────────────────────────────────────────
function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => compressDataUrl(reader.result).then(resolve).catch(reject);
    reader.readAsDataURL(file);
  });
}

function compressDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onerror = reject;
    image.onload = () => {
      const scale = Math.min(1, UPLOAD_MAX_SIZE / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.fillStyle = "#0b0b0b";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", UPLOAD_QUALITY));
    };
    image.src = dataUrl;
  });
}

// ─── Utilities ────────────────────────────────────────────────────────────────
function isDataUrl(value) {
  return typeof value === "string" && value.startsWith("data:image/");
}

function getByPath(source, path) {
  return path.split(".").reduce((obj, key) => obj?.[key], source);
}

function setByPath(source, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((obj, key) => obj[key], source);
  target[last] = value;
}

function titleCase(value) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
