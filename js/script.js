/**
 * script.js — content.js の内容からページを組み立てる（通常は編集不要）
 */
(function () {
  "use strict";

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const list = (items, cls) => (items && items.length ? `<ul class="${cls}">${items.map((i) => `<li>${i}</li>`).join("")}</ul>` : "");
  const numbered = (items) =>
    items && items.length ? `<ol class="num-list">${items.map((i) => `<li>${i}</li>`).join("")}</ol>` : "";
  const paragraphs = (items) => (items || []).map((p) => `<p>${p}</p>`).join("");
  const arrow = (url, text, cls) => `<a class="btn ${cls || ""}" href="${esc(url)}" target="_blank" rel="noopener">${text}</a>`;

  function setMeta(selector, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.setAttribute("content", value);
  }

  function applyMeta(m) {
    document.title = m.pageTitle;
    setMeta('meta[name="description"]', m.description);
    setMeta('meta[property="og:title"]', m.pageTitle);
    setMeta('meta[property="og:description"]', m.description);
    setMeta('meta[property="og:url"]', m.siteUrl);
  }

  function hero(h) {
    const avatar = h.avatar
      ? `<div class="hero__author"><img class="hero__avatar" src="${esc(h.avatar.src)}" alt="${esc(h.avatar.alt)}" width="56" height="56"><span class="hero__name">${h.avatar.name}</span></div>`
      : "";
    const visual = h.visual
      ? `<div class="hero__visual"><img src="${esc(h.visual.src)}" alt="${esc(h.visual.alt)}"></div>`
      : "";
    return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero__inner${h.visual ? " hero__inner--visual" : ""}">
        <div class="hero__text">
          <p class="hero__brand">${h.brand}</p>
          <h1 class="hero__title" id="hero-title">${h.titleLines.join("<br>")}</h1>
          <p class="hero__subtitle">${h.subtitle}</p>
          <div class="hero__lead">${paragraphs(h.lead)}</div>
          ${avatar}
          <a class="btn btn--ghost" href="#${esc(h.buttonTarget)}" data-scroll>${h.buttonText}</a>
        </div>
        ${visual}
      </div>
    </section>`;
  }

  function topCta(c, url) {
    const image = c.image
      ? `<a class="cta-soft__image" href="${esc(url)}" target="_blank" rel="noopener"><img src="${esc(c.image.src)}" alt="${esc(c.image.alt)}" width="1855" height="848"></a>`
      : "";
    return `
    <section class="container" aria-labelledby="top-cta-title">
      <div class="cta-soft">
        ${image}
        <div class="cta-soft__text">
          <h2 class="cta-soft__title" id="top-cta-title">${c.heading}</h2>
          <p>${c.text}</p>
        </div>
        ${arrow(url, c.buttonText)}
      </div>
    </section>`;
  }

  function overview(o, features) {
    const items = features
      .map(
        (f) => `
          <li>
            <a class="overview__item" href="#${esc(f.id)}" data-scroll>
              <span class="overview__rank">${f.rank}<small>位</small></span>
              <span class="overview__body">
                <strong class="overview__name">${f.name}</strong>
                <span class="overview__summary">${f.summary}</span>
                <span class="overview__for">${o.forLabel}${f.audience}</span>
              </span>
              <span class="overview__arrow" aria-hidden="true">→</span>
            </a>
          </li>`
      )
      .join("");
    return `
    <section class="section" id="overview" aria-labelledby="overview-title">
      <div class="container">
        <h2 class="heading" id="overview-title">${o.heading}</h2>
        <p class="overview__lead">${o.lead}</p>
        <ol class="overview__list">${items}</ol>
        <aside class="point-box"><p class="point-box__label">${o.noteLabel}</p><p>${o.note}</p></aside>
      </div>
    </section>`;
  }

  function figure(f) {
    return `<figure class="figure"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy"><figcaption>${f.caption}</figcaption></figure>`;
  }

  function prompt(p, id) {
    return `
      <div class="prompt">
        <p class="prompt__label">${p.label}</p>
        <pre class="prompt__text" id="${id}">${esc(p.text)}</pre>
        <button type="button" class="btn btn--outline copy-btn" data-copy-target="${id}">
          <span class="copy-btn__label">${p.buttonText}</span>
          <span class="copy-btn__done" role="status" aria-live="polite">${p.copiedText}</span>
        </button>
      </div>`;
  }

  function caution(c) {
    return `<aside class="point-box point-box--caution"><p class="point-box__label">${c.label}</p>${list(c.items, "point-box__list")}</aside>`;
  }

  function block(b, featureId) {
    return `
        <div class="block">
          ${b.heading ? `<h3 class="sub-heading">${b.heading}</h3>` : ""}
          ${paragraphs(b.paragraphs)}
          ${list(b.list, "check-list")}
          ${numbered(b.ordered)}
          ${(b.figures || []).map(figure).join("")}
          ${b.prompt ? prompt(b.prompt, featureId + "-prompt") : ""}
          ${b.caution ? caution(b.caution) : ""}
        </div>`;
  }

  function feature(f) {
    return `
    <section class="step" id="${esc(f.id)}" aria-labelledby="${esc(f.id)}-title">
      <div class="container">
        <header class="step__head">
          <p class="step__no" aria-hidden="true"><span>RANK</span>${f.rank}</p>
          <div>
            <h2 class="step__title" id="${esc(f.id)}-title"><span class="visually-hidden">第${f.rank}位　</span>${f.name}</h2>
            <p class="step__lead">${f.lead}</p>
          </div>
        </header>
        <div class="step__body">
          ${f.blocks.map((b) => block(b, f.id)).join("")}
          <p class="source">${f.source.label}<a href="${esc(f.source.url)}" target="_blank" rel="noopener noreferrer">${f.source.linkText}</a></p>
        </div>
      </div>
    </section>`;
  }

  function chooser(c) {
    const items = c.items
      .map(
        (i) =>
          `<li><a class="chooser__item" href="#${esc(i.target)}" data-scroll><span class="chooser__need">${i.need}</span><span class="chooser__to">${i.to}</span></a></li>`
      )
      .join("");
    return `
    <section class="section section--soft" aria-labelledby="chooser-title">
      <div class="container">
        <h2 class="heading" id="chooser-title">${c.heading}</h2>
        <p>${c.lead}</p>
        <ul class="chooser">${items}</ul>
        <aside class="point-box"><p class="point-box__label">${c.nextStep.label}</p><p>${c.nextStep.text}</p></aside>
      </div>
    </section>`;
  }

  function message(m) {
    return `
    <section class="section" aria-labelledby="message-title">
      <div class="container">
        <h2 class="heading" id="message-title">${m.heading}</h2>
        <div class="message">${paragraphs(m.paragraphs)}</div>
      </div>
    </section>`;
  }

  function finalCta(c, t, url) {
    return `
    <section class="section" aria-labelledby="final-cta-title">
      <div class="container">
        <div class="cta-final">
          <h2 class="cta-final__title" id="final-cta-title">${c.heading}</h2>
          <div class="cta-final__text">${paragraphs(c.text)}</div>
          ${arrow(url, c.buttonText, "btn--large")}
        </div>
        <div class="textbook">
          <p>${t.bridge}</p>
          <a class="textbook__banner" href="${esc(url)}" target="_blank" rel="noopener">
            <img src="${esc(t.banner)}" alt="${esc(t.bannerAlt)}" loading="lazy">
          </a>
          <p>${t.support}</p>
        </div>
      </div>
    </section>`;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => true, () => false);
    }
    return Promise.resolve(false);
  }

  function bind() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".copy-btn[data-copy-target]");
      if (btn) {
        const target = document.getElementById(btn.dataset.copyTarget);
        copyText(target.textContent).then((ok) => {
          if (!ok) return;
          btn.classList.add("is-copied");
          clearTimeout(btn._t);
          btn._t = setTimeout(() => btn.classList.remove("is-copied"), 2200);
        });
        return;
      }
      const link = e.target.closest("a[data-scroll]");
      if (link) {
        const dest = document.querySelector(link.getAttribute("href"));
        if (dest) {
          e.preventDefault();
          dest.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
          history.replaceState(null, "", link.getAttribute("href"));
        }
      }
    });
  }

  function init() {
    const main = document.getElementById("main");
    if (typeof CONTENT === "undefined") return;
    const c = CONTENT;
    applyMeta(c.meta);
    main.innerHTML =
      hero(c.hero) +
      topCta(c.topCta, c.lineUrl) +
      overview(c.overview, c.features) +
      c.features.map(feature).join("") +
      chooser(c.chooser) +
      message(c.message) +
      finalCta(c.finalCta, c.textbook, c.lineUrl);
    document.getElementById("footer").innerHTML = `<p>${c.footer.copyright}</p><p>${c.footer.notice}</p>`;
    bind();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
