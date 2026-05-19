const STORAGE_KEY = "redline-detailing-site-v1";
const PASSWORD_KEY = "redline-detailing-admin-password";
const DEFAULT_PASSWORD = "DetailBoss2026!";
const UPLOAD_MAX_SIZE = 1400;
const UPLOAD_QUALITY = 0.78;

const defaults = {
  businessName: "Redline Auto Detailing",
  businessInitials: "RA",
  businessTagline: "Deep gloss. Clean finish. Every time.",
  navAbout: "About",
  navServices: "Services",
  navGallery: "Gallery",
  navReviews: "Reviews",
  navContact: "Contact",
  heroKicker: "Black and red premium detailing",
  heroTitle: "Make your car look freshly delivered again.",
  heroText: "Paint-safe washes, interior resets, ceramic protection, and finishing work for drivers who care about the details.",
  primaryCta: "Book a detail",
  secondaryCta: "View packages",
  heroImage: "assets/detail-bay.svg",
  servicesKicker: "Packages",
  servicesTitle: "Choose the finish your vehicle deserves.",
  servicesIntro: "Edit these packages, prices, descriptions, and labels from the admin panel whenever your offers change.",
  aboutKicker: "Meet the detailer",
  aboutTitle: "A little about the person behind the polish.",
  aboutText: "I started this business because clean cars are personal. Every vehicle gets careful prep, honest communication, and the kind of finish I would want on my own ride.",
  aboutImage: "assets/detail-bay.svg",
  processKicker: "How it works",
  processTitle: "A straightforward detail from first message to final wipe-down.",
  galleryKicker: "Gallery",
  galleryTitle: "Recent shine folders.",
  galleryIntro: "Click a vehicle folder to see the photos from that specific car.",
  reviewsKicker: "Reviews",
  reviewsTitle: "Customers notice the difference.",
  contactKicker: "Book now",
  contactTitle: "Ready for a sharper finish?",
  contactText: "Send your vehicle, preferred package, and a few photos. We will reply with timing and a quote.",
  phoneLabel: "(555) 012-3456",
  phoneHref: "+15550123456",
  emailLabel: "book@redline-detailing.com",
  emailHref: "book@redline-detailing.com",
  addressLabel: "Detroit metro area",
  hoursLabel: "Mon-Sat, 8 AM-6 PM",
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
    { value: "5-star", label: "detail experience" },
    { value: "Paint-safe", label: "wash methods" },
    { value: "Mobile", label: "or shop service" }
  ],
  aboutPoints: ["Owner-operated service", "Paint-safe process", "Clear quotes before work starts"],
  highlights: ["Exterior details", "Interior resets", "Ceramic protection", "Fleet-ready cleaning"],
  services: [
    {
      name: "Essential Wash",
      price: "From $95",
      description: "A careful exterior refresh for weekly drivers that need a clean, glossy reset.",
      features: ["Foam pre-soak", "Hand wash", "Wheel faces", "Tire dressing"],
      featured: false
    },
    {
      name: "Full Detail",
      price: "From $225",
      description: "Inside-and-out cleaning for vehicles that need deeper attention and a sharper finish.",
      features: ["Exterior wash", "Interior deep clean", "Steam touch points", "Spray sealant"],
      featured: true
    },
    {
      name: "Ceramic Protection",
      price: "From $650",
      description: "Gloss, slickness, and longer-lasting protection for paint that deserves the premium treatment.",
      features: ["Decon wash", "Paint prep", "Machine polish", "Ceramic coating"],
      featured: false
    }
  ],
  process: [
    { title: "Request a quote", text: "Tell us about the vehicle, condition, location, and package you want." },
    { title: "Confirm the plan", text: "We lock in timing, pricing, and any special areas that need attention." },
    { title: "Detail day", text: "Your vehicle gets a careful wash, clean, polish, or protection service." }
  ],
  galleryFolders: [
    {
      title: "Black coupe detail",
      vehicle: "Black sports coupe",
      description: "Exterior wash, gloss finish, wheel detail, and final inspection.",
      coverImage: "assets/detail-bay.svg",
      coverWidth: 520,
      coverHeight: 260,
      coverFit: "cover",
      photoWidth: 260,
      photoHeight: 190,
      imageFit: "cover",
      photos: [
        { label: "Gloss finish", image: "assets/detail-bay.svg" },
        { label: "Foam wash prep", image: "assets/foam-wash.svg" },
        { label: "Wheel detail", image: "assets/wheel-care.svg" }
      ]
    },
    {
      title: "Interior reset",
      vehicle: "Daily driver interior",
      description: "Seat, trim, touch point, and cabin refresh photos from one vehicle.",
      coverImage: "assets/interior-reset.svg",
      coverWidth: 260,
      coverHeight: 260,
      coverFit: "cover",
      photoWidth: 240,
      photoHeight: 180,
      imageFit: "cover",
      photos: [
        { label: "Interior reset", image: "assets/interior-reset.svg" },
        { label: "Wheel care", image: "assets/wheel-care.svg" }
      ]
    },
    {
      title: "Foam wash prep",
      vehicle: "Weekend wash package",
      description: "Pre-soak and safe hand wash photos grouped by vehicle.",
      coverImage: "assets/foam-wash.svg",
      coverWidth: 260,
      coverHeight: 260,
      coverFit: "cover",
      photoWidth: 240,
      photoHeight: 180,
      imageFit: "cover",
      photos: [
        { label: "Foam wash", image: "assets/foam-wash.svg" },
        { label: "Final gloss", image: "assets/detail-bay.svg" }
      ]
    }
  ],
  reviews: [
    { name: "Marcus R.", quote: "My truck looked better than the day I bought it. The red carpet level of care is real." },
    { name: "Janelle T.", quote: "Fast replies, clean work, and the interior smelled brand new without being overpowering." },
    { name: "Andre M.", quote: "The ceramic coating made the paint look deeper and washing is so much easier now." }
  ]
};

let site = loadSite();
let activeTab = "Brand";

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
  Security: "security",
  Backup: "backup"
};

document.addEventListener("DOMContentLoaded", () => {
  renderSite();
  bindAdmin();
  bindQuoteForm();
  setTimeout(optimizeStoredImages, 250);
});

function loadSite() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const loaded = saved ? mergeDeep(structuredClone(defaults), JSON.parse(saved)) : structuredClone(defaults);
  return normalizeSite(loaded);
}

function normalizeSite(loaded) {
  if (!loaded.galleryFolders && Array.isArray(loaded.gallery)) {
    loaded.galleryFolders = [{
      title: "Recent work",
      vehicle: "Vehicle gallery",
      description: "Photos from one completed detail.",
      coverImage: loaded.gallery[0]?.image || "assets/detail-bay.svg",
      coverHeight: 260,
      photoWidth: 240,
      photoHeight: 180,
      imageFit: "cover",
      photos: loaded.gallery
    }];
  }
  loaded.galleryFolders = loaded.galleryFolders.map((folder) => ({
    title: folder.title || "Vehicle folder",
    vehicle: folder.vehicle || "Detailed vehicle",
    description: folder.description || "",
    coverImage: folder.coverImage || folder.photos?.[0]?.image || "assets/detail-bay.svg",
    coverWidth: Number(folder.coverWidth) || 260,
    coverHeight: Number(folder.coverHeight) || 260,
    coverFit: folder.coverFit || "cover",
    photoWidth: Number(folder.photoWidth) || 240,
    photoHeight: Number(folder.photoHeight) || 180,
    imageFit: folder.imageFit || "cover",
    photos: Array.isArray(folder.photos) && folder.photos.length ? folder.photos : [{ label: "Detail photo", image: folder.coverImage || "assets/detail-bay.svg" }]
  }));
  return loaded;
}

function saveSite() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(site));
    setAdminStatus("Saved.");
    return true;
  } catch {
    setAdminStatus("Could not save. Try replacing one or two large photos with smaller versions.", true);
    return false;
  }
}

function getPassword() {
  return localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
}

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
  galleryGrid.innerHTML = site.galleryFolders.map((folder, index) => `
    <a class="gallery-card folder-card" href="gallery.html?car=${index}" style="--cover-width:${Number(folder.coverWidth) || 260}px; --cover-height:${Number(folder.coverHeight) || 260}px; --cover-fit:${escapeAttribute(folder.coverFit || "cover")}">
      <img src="${escapeAttribute(folder.coverImage)}" alt="${escapeAttribute(folder.title)}">
      <span>
        <strong>${escapeHtml(folder.title)}</strong>
        <small>${escapeHtml(folder.vehicle)} - ${folder.photos.length} photos</small>
      </span>
    </a>
  `).join("");
}

function renderAlbumPage() {
  const albumGrid = document.getElementById("albumGrid");
  if (!albumGrid) return;
  if (!site.galleryFolders.length) {
    albumGrid.innerHTML = `<p class="form-note">No gallery folders have been added yet.</p>`;
    return;
  }
  const index = Number(new URLSearchParams(window.location.search).get("car")) || 0;
  const folder = site.galleryFolders[index] || site.galleryFolders[0];
  document.title = `${folder.title} | ${site.businessName}`;
  document.getElementById("albumKicker").textContent = folder.vehicle;
  document.getElementById("albumTitle").textContent = folder.title;
  document.getElementById("albumDescription").textContent = folder.description;
  albumGrid.style.setProperty("--album-photo-width", `${Number(folder.photoWidth) || 240}px`);
  albumGrid.style.setProperty("--album-photo-height", `${Number(folder.photoHeight) || 180}px`);
  albumGrid.style.setProperty("--album-fit", folder.imageFit || "cover");
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
  reviewGrid.innerHTML = site.reviews.map((review) => `
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

function bindAdmin() {
  if (!document.getElementById("adminShell")) return;
  document.querySelectorAll("[data-admin-open]").forEach((button) => {
    button.addEventListener("click", openAdmin);
  });
  document.querySelectorAll("[data-admin-close]").forEach((button) => {
    button.addEventListener("click", closeAdmin);
  });
  document.getElementById("loginButton").addEventListener("click", login);
  document.getElementById("passwordInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") login();
  });
  document.getElementById("saveButton").addEventListener("click", () => {
    readAdminFields();
    saveSite();
    renderSite();
    renderAdminFields();
  });
  document.getElementById("previewButton").addEventListener("click", () => {
    readAdminFields();
    renderSite();
  });
  document.getElementById("resetButton").addEventListener("click", () => {
    if (!confirm("Reset the website back to the starter content?")) return;
    site = structuredClone(defaults);
    saveSite();
    renderSite();
    renderAdminFields();
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
    saveSite();
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

function renderAdminTabs() {
  document.getElementById("adminTabs").innerHTML = Object.keys(sections).map((name) => `
    <button class="tab-button ${name === activeTab ? "is-active" : ""}" type="button" data-tab="${name}">${name}</button>
  `).join("");
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      saveSite();
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
  if (section === "gallery") fields.innerHTML = renderGalleryFields();
  if (section === "reviews") fields.innerHTML = renderSimpleList("reviews", ["name", "quote"]);
  if (section === "security") fields.innerHTML = renderSecurityFields();
  if (section === "backup") fields.innerHTML = renderBackupFields();
  bindAdminFieldButtons();
  bindImageInputs();
}

function renderSimpleField([key, label, type = "text"]) {
  const value = getByPath(site, key) || "";
  if (type === "image") {
    const savedUpload = isDataUrl(value);
    return `
      <div class="field-row">
        <label><span>${label}</span><input data-image-url-field="${key}" value="${savedUpload ? "" : escapeAttribute(value)}" placeholder="${savedUpload ? "Uploaded image saved" : ""}"></label>
        <img class="image-preview" src="${escapeAttribute(value)}" alt="" loading="lazy">
        <input type="file" accept="image/*" data-image-upload="${key}">
        <small>Paste an image URL or upload a picture. Uploads are compressed and saved right away.</small>
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

function renderGalleryFields() {
  return `
    <div class="field-group">
      <p class="form-note">Each folder becomes a clickable vehicle card on the home page. The photos inside it show on that vehicle's gallery page.</p>
      ${site.galleryFolders.map((folder, index) => `
        <div class="repeat-item">
          <div class="mini-grid">
            <label><span>Folder title</span><input data-list-field="galleryFolders.${index}.title" value="${escapeAttribute(folder.title)}"></label>
            <label><span>Vehicle label</span><input data-list-field="galleryFolders.${index}.vehicle" value="${escapeAttribute(folder.vehicle)}"></label>
          </div>
          <label><span>Folder description</span><textarea rows="3" data-list-field="galleryFolders.${index}.description">${escapeHtml(folder.description)}</textarea></label>
          <label><span>Cover image URL</span><input data-image-url-field="galleryFolders.${index}.coverImage" value="${isDataUrl(folder.coverImage) ? "" : escapeAttribute(folder.coverImage)}" placeholder="${isDataUrl(folder.coverImage) ? "Uploaded image saved" : ""}"></label>
          <img class="image-preview" src="${escapeAttribute(folder.coverImage)}" alt="" loading="lazy">
          <input type="file" accept="image/*" data-image-upload="galleryFolders.${index}.coverImage">
          <div class="mini-grid">
            <label><span>Main folder card width</span><input type="number" min="180" max="720" data-list-field="galleryFolders.${index}.coverWidth" value="${escapeAttribute(folder.coverWidth)}"></label>
            <label><span>Folder card height</span><input type="number" min="160" max="520" data-list-field="galleryFolders.${index}.coverHeight" value="${escapeAttribute(folder.coverHeight)}"></label>
            <label><span>Main folder display style</span><select data-list-field="galleryFolders.${index}.coverFit"><option value="cover" ${folder.coverFit === "cover" ? "selected" : ""}>Crop to frame</option><option value="contain" ${folder.coverFit === "contain" ? "selected" : ""}>Show full photo</option></select></label>
            <label><span>Photo display style</span><select data-list-field="galleryFolders.${index}.imageFit"><option value="cover" ${folder.imageFit === "cover" ? "selected" : ""}>Crop to frame</option><option value="contain" ${folder.imageFit === "contain" ? "selected" : ""}>Show full photo</option></select></label>
            <label><span>Gallery photo width</span><input type="number" min="140" max="520" data-list-field="galleryFolders.${index}.photoWidth" value="${escapeAttribute(folder.photoWidth)}"></label>
            <label><span>Gallery photo height</span><input type="number" min="120" max="420" data-list-field="galleryFolders.${index}.photoHeight" value="${escapeAttribute(folder.photoHeight)}"></label>
          </div>
          <div class="nested-list">
            <strong>Photos in this folder</strong>
            ${folder.photos.map((photo, photoIndex) => `
              <div class="repeat-item photo-editor">
                <label><span>Photo label</span><input data-list-field="galleryFolders.${index}.photos.${photoIndex}.label" value="${escapeAttribute(photo.label)}"></label>
                <label><span>Photo URL</span><input data-image-url-field="galleryFolders.${index}.photos.${photoIndex}.image" value="${isDataUrl(photo.image) ? "" : escapeAttribute(photo.image)}" placeholder="${isDataUrl(photo.image) ? "Uploaded image saved" : ""}"></label>
                <img class="image-preview" src="${escapeAttribute(photo.image)}" alt="" loading="lazy">
                <input type="file" accept="image/*" data-image-upload="galleryFolders.${index}.photos.${photoIndex}.image">
                <button class="button danger" type="button" data-remove-photo="${index}.${photoIndex}">Remove photo</button>
              </div>
            `).join("")}
            <button class="button button-ghost" type="button" data-add-photo="${index}">Add photo to this folder</button>
          </div>
          <button class="button danger" type="button" data-remove="galleryFolders.${index}">Remove folder</button>
        </div>
      `).join("")}
      <button class="button button-ghost" type="button" data-add="galleryFolders">Add vehicle folder</button>
    </div>
  `;
}

function renderSecurityFields() {
  return `
    <div class="field-group">
      <p class="form-note">Current starter password: ${DEFAULT_PASSWORD}</p>
      <label><span>New admin password</span><input type="password" id="newPassword"></label>
      <button class="button button-primary" type="button" id="passwordSave">Update password</button>
      <p class="form-note">This protects the local editor from casual changes. Use server hosting with real authentication before taking payments or storing customer data.</p>
    </div>
  `;
}

function renderBackupFields() {
  return `
    <div class="field-group">
      <label><span>Export or import all site content</span><textarea rows="10" id="backupBox">${escapeHtml(JSON.stringify(site, null, 2))}</textarea></label>
      <div class="admin-actions">
        <button class="button button-ghost" type="button" id="copyBackup">Refresh export</button>
        <button class="button button-primary" type="button" id="importBackup">Import content</button>
      </div>
    </div>
  `;
}

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
    if (path.endsWith(".coverWidth") || path.endsWith(".coverHeight") || path.endsWith(".photoWidth") || path.endsWith(".photoHeight")) value = Number(value);
    setByPath(site, path, value);
  });
}

function bindAdminFieldButtons() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      addItem(button.dataset.add);
      saveSite();
      renderSite();
      renderAdminFields();
    });
  });
  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      const [key, index] = button.dataset.remove.split(".");
      site[key].splice(Number(index), 1);
      saveSite();
      renderSite();
      renderAdminFields();
    });
  });
  document.querySelectorAll("[data-add-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      site.galleryFolders[Number(button.dataset.addPhoto)].photos.push({ label: "New photo", image: "assets/detail-bay.svg" });
      saveSite();
      renderSite();
      renderAdminFields();
    });
  });
  document.querySelectorAll("[data-remove-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      readAdminFields();
      const [folderIndex, photoIndex] = button.dataset.removePhoto.split(".").map(Number);
      site.galleryFolders[folderIndex].photos.splice(photoIndex, 1);
      if (!site.galleryFolders[folderIndex].photos.length) {
        site.galleryFolders[folderIndex].photos.push({ label: "Detail photo", image: site.galleryFolders[folderIndex].coverImage });
      }
      saveSite();
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
        setAdminStatus("Password updated and saved.");
      } catch {
        setAdminStatus("Password could not be saved in this browser.", true);
      }
    });
  }
  const copyBackup = document.getElementById("copyBackup");
  if (copyBackup) copyBackup.addEventListener("click", () => {
    readAdminFields();
    document.getElementById("backupBox").value = JSON.stringify(site, null, 2);
  });
  const importBackup = document.getElementById("importBackup");
  if (importBackup) importBackup.addEventListener("click", () => {
    try {
      site = mergeDeep(structuredClone(defaults), JSON.parse(document.getElementById("backupBox").value));
      saveSite();
      renderSite();
      renderAdminFields();
    } catch {
      alert("That content could not be imported. Check the JSON formatting.");
    }
  });
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
        saveSite();
        renderSite();
        updateImageUploadPreview(input, result);
        setAdminStatus("Photo uploaded and saved.");
      } catch {
        setAdminStatus("That photo could not be uploaded. Try a smaller image file.", true);
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
    process: { title: "New step", text: "Describe this step." },
    galleryFolders: {
      title: "New vehicle folder",
      vehicle: "Vehicle name",
      description: "Describe this car and the detail work shown.",
      coverImage: "assets/detail-bay.svg",
      coverWidth: 260,
      coverHeight: 240,
      coverFit: "cover",
      photoWidth: 240,
      photoHeight: 180,
      imageFit: "cover",
      photos: [{ label: "New photo", image: "assets/detail-bay.svg" }]
    },
    reviews: { name: "Customer name", quote: "Customer quote." }
  };
  site[key].push(structuredClone(templates[key]));
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

async function optimizeStoredImages() {
  const paths = [
    "heroImage",
    "aboutImage",
    ...site.galleryFolders.flatMap((folder, folderIndex) => [
      `galleryFolders.${folderIndex}.coverImage`,
      ...folder.photos.map((_, photoIndex) => `galleryFolders.${folderIndex}.photos.${photoIndex}.image`)
    ])
  ];
  let changed = false;
  for (const path of paths) {
    const value = getByPath(site, path);
    if (!isDataUrl(value) || value.length < 600000) continue;
    try {
      setByPath(site, path, await compressDataUrl(value));
      changed = true;
    } catch {
      // Keep the original if the browser cannot decode this image.
    }
  }
  if (changed) {
    saveSite();
    renderSite();
    setAdminStatus("Large saved photos were optimized.");
  }
}

function isDataUrl(value) {
  return typeof value === "string" && value.startsWith("data:image/");
}

function setAdminStatus(message, isError = false) {
  const status = document.getElementById("adminStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
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

function mergeDeep(target, source) {
  Object.keys(source).forEach((key) => {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      target[key] = mergeDeep(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
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
