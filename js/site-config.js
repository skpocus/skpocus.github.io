(function () {
  window.SKPocusConfig = {
    siteName: "SKPocus Photography",
    tagline: "Capturing timeless memories through photography and videography.",
    email: "skpocus335@gmail.com",
    phone: "",
    phones: ["9962728464", "6374612102"],
    city: "Chennai, Tamil Nadu",
    instagramUrl: "https://www.instagram.com/skpocus_photography?igsh=bm9zYnVuM2hqOTEw"
  };

  function applyConfig() {
    var config = window.SKPocusConfig || {};
    var siteName = config.siteName || "SKPocus Photography";
    var tagline = config.tagline || "Capturing timeless memories through photography and videography.";
    var city = config.city || "";
    var email = config.email || "";
    var phone = config.phone || "";
    var phones = Array.isArray(config.phones) && config.phones.length ? config.phones : (phone ? [phone] : []);
    var instagramUrl = config.instagramUrl || "";

    document.title = siteName + " | Photography & Videography";

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        siteName + " offers photography and videography for weddings, candid moments, maternity, newborn, and model shoots in " + city + "."
      );
    }

    document.querySelectorAll('.site-name').forEach(function (el) {
      el.textContent = siteName;
    });

    document.querySelectorAll('.site-tagline').forEach(function (el) {
      el.textContent = tagline;
    });

    document.querySelectorAll('.site-email').forEach(function (el) {
      el.textContent = email;
      if (email) {
        el.setAttribute('href', 'mailto:' + email);
      }
    });

    document.querySelectorAll('.site-phone').forEach(function (el) {
      if (phones.length) {
        el.innerHTML = phones.map(function (number) {
          return '<a href="tel:' + number + '">' + number + '</a>';
        }).join('<br>');
      } else {
        el.textContent = 'Available on request';
      }
    });

    document.querySelectorAll('.site-city').forEach(function (el) {
      el.textContent = city;
    });

    document.querySelectorAll('.site-instagram').forEach(function (el) {
      if (instagramUrl) {
        el.setAttribute('href', instagramUrl);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    });

    document.querySelectorAll('.hero-link h2').forEach(function (el) {
      el.textContent = tagline;
    });

    document.querySelectorAll('.hero-social-links a, .footer-social-links a').forEach(function (el, index) {
      if (index === 0 && instagramUrl) {
        el.setAttribute('href', instagramUrl);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
  } else {
    applyConfig();
  }
})();
