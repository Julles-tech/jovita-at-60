(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------
     Countdown — event starts 2026-08-23 5:30 PM, Philippine time
     --------------------------------------------------------- */
  var EVENT_DATE = new Date("2026-08-23T17:30:00+08:00");
  var daysEl = document.getElementById("cd-days");
  var hoursEl = document.getElementById("cd-hours");
  var minsEl = document.getElementById("cd-mins");
  var secsEl = document.getElementById("cd-secs");

  function pad(n) { return String(n).padStart(2, "0"); }

  var lastValues = { d: null, h: null, m: null, s: null };

  function pulse(el, value, key) {
    var formatted = pad(value);
    if (lastValues[key] !== formatted) {
      lastValues[key] = formatted;
      el.textContent = formatted;
      if (!prefersReducedMotion) {
        el.classList.remove("tick");
        void el.offsetWidth; /* restart animation */
        el.classList.add("tick");
      }
    }
  }

  function updateCountdown() {
    var now = new Date();
    var diff = EVENT_DATE.getTime() - now.getTime();

    if (diff <= 0) {
      pulse(daysEl, 0, "d");
      pulse(hoursEl, 0, "h");
      pulse(minsEl, 0, "m");
      pulse(secsEl, 0, "s");
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    pulse(daysEl, days, "d");
    pulse(hoursEl, hours, "h");
    pulse(minsEl, minutes, "m");
    pulse(secsEl, seconds, "s");
  }

  if (daysEl) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---------------------------------------------------------
     Sparkle flourish — hero + closing only, restrained
     --------------------------------------------------------- */
  function scatterSparkles(container, count) {
    if (!container || prefersReducedMotion) return;
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.className = "sparkle";
      var size = 3 + Math.random() * 4;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = 20 + Math.random() * 70 + "%";
      s.style.animationDuration = 3 + Math.random() * 3 + "s";
      s.style.animationDelay = Math.random() * 4 + "s";
      container.appendChild(s);
    }
  }

  scatterSparkles(document.querySelector(".hero__sparkles"), 16);
  scatterSparkles(document.querySelector(".closing__sparkles"), 20);

  /* ---------------------------------------------------------
     Live background — ambient sparkles twinkling in and out
     behind the whole page
     --------------------------------------------------------- */
  function scatterLiveSparkles(container) {
    if (!container || prefersReducedMotion) return;
    var height = container.scrollHeight || container.offsetHeight || 4000;
    var count = Math.max(50, Math.min(180, Math.round(height / 40)));
    var colors = ["var(--peach)", "var(--blush)", "var(--terracotta)"];
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.className = "live-bg__spark";
      var size = 2 + Math.random() * 3;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.background = colors[i % colors.length];
      s.style.animationDuration = 2.5 + Math.random() * 4 + "s";
      s.style.animationDelay = Math.random() * 6 + "s";
      container.appendChild(s);
    }
  }

  scatterLiveSparkles(document.querySelector(".live-bg"));

  /* ---------------------------------------------------------
     Headline glitter — one-shot sparkle burst after the entrance settles
     --------------------------------------------------------- */
  function twinkleHeadline(container) {
    if (!container || prefersReducedMotion) return;
    var spots = [
      { x: 8, y: 10, size: 7, delay: 1.15 },
      { x: 90, y: 6, size: 5, delay: 1.55 },
      { x: 82, y: 38, size: 8, delay: 1.3 },
      { x: 12, y: 52, size: 6, delay: 1.75 },
      { x: 94, y: 76, size: 7, delay: 1.45 },
      { x: 6, y: 88, size: 6, delay: 1.9 },
      { x: 96, y: 28, size: 5, delay: 1.65 },
      { x: 4, y: 34, size: 5, delay: 2.05 },
      { x: 60, y: 2, size: 6, delay: 1.4 }
    ];
    spots.forEach(function (spot) {
      var s = document.createElement("span");
      s.className = "headline-sparkle";
      s.style.setProperty("--s", spot.size + "px");
      s.style.left = spot.x + "%";
      s.style.top = spot.y + "%";
      s.style.animationDelay = spot.delay + "s";
      container.appendChild(s);
    });
  }

  twinkleHeadline(document.querySelector(".hero__headline-sparkles"));
})();
