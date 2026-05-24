/* =====================
   Smooth Scroll
===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* =====================
   Fade In On Scroll
===================== */
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



/* =====================
   Store Modal
===================== */
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".store-item").forEach(item => {
  item.addEventListener("click", () => {
    const title = item.dataset.title;
    const desc = item.dataset.desc;

    modalContent.innerHTML = `
      <h2>${title}</h2>
      <p>${desc}</p>
    `;
    modal.classList.add("open");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

window.addEventListener("click", e => {
  if (e.target == modal) {
    modal.classList.remove("open");
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 800);
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

/* =====================
   Language System
===================== */

let currentLang = localStorage.getItem("lang") || "ja";

/* Apply language */
function applyLanguage(lang) {
  document.querySelectorAll("[data-ja][data-en]").forEach(el => {
    let text = el.getAttribute("data-" + lang);

    /* convert slash to line break */
    if (text.includes("/")) {
      text = text.split("/").join("<br>");
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.textContent = lang === "ja" ? "EN" : "JP";
  }
}

/* Apply saved language on load */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});

/* Toggle language */
document.getElementById("langToggle")?.addEventListener("click", () => {
  currentLang = currentLang === "ja" ? "en" : "ja";

  localStorage.setItem("lang", currentLang);
  applyLanguage(currentLang);
});


/* =====================
   Hamburger Menu
===================== */
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

console.log("JS loaded");

document.querySelectorAll(".nav-link").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");
    hamburger.classList.remove("active");

  });

});

document.getElementById("logoTop").addEventListener("click", function (e) {

  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});

window.addEventListener("load", () => {

  const splash = document.querySelector(".splash");
  const loader = document.querySelector(".anniversary-loader");

  setTimeout(() => {

    splash.classList.add("active");

  }, 3000); // after SVG draw

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

  }, 4200);

});

// fade-up

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});

// Stylist
const params = new URLSearchParams(window.location.search);
const stylist = params.get("stylist");

if (stylist) {
  document.getElementById("stylist").value = stylist;
}
