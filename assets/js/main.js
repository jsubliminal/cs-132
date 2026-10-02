(function () {
  "use strict";

  const S = window.SITE;
  if (!S) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inline(str) {
    return escapeHTML(str || "")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  function get(path) {
    return path.split(".").reduce((o, k) => (o == null ? o : o[k]), S);
  }

  function $(id) {
    return document.getElementById(id);
  }

  function surname(name) {
    const parts = name.trim().split(/\s+/);
    return parts[parts.length - 1];
  }

  function sheetCsvUrl(url) {
    if (/output=csv|format=csv|tqx=out:csv/.test(url)) return url;
    const id = (url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/) || [])[1];
    if (!id || id === "e") return url;
    const gid = (url.match(/[#&?]gid=(\d+)/) || [])[1] || "0";
    return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`;
  }

  function parseCSV(text) {
    const rows = [];
    let row = [], field = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (quoted) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') quoted = false;
        else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); row = []; field = "";
      } else field += c;
    }
    if (field !== "" || row.length) { row.push(field); rows.push(row); }
    return rows.filter((r) => r.some((v) => v.trim() !== ""));
  }

  function toNumber(v) {
    const n = parseFloat(String(v).replace(/[^0-9.\-]/g, ""));
    return Number.isFinite(n) ? n : null;
  }

  async function loadSheetChart(node, chart) {
    try {
      const res = await fetch(sheetCsvUrl(chart.url));
      if (!res.ok) throw new Error(res.status);
      const rows = parseCSV(await res.text());
      const header = rows.shift().map((h) => h.trim());
      const li = chart.label ? header.indexOf(chart.label) : 0;
      const vi = chart.value ? header.indexOf(chart.value) : 1;
      if (li < 0 || vi < 0) throw new Error("column not found");
      const data = rows
        .map((r) => ({ label: r[li], value: toNumber(r[vi]) }))
        .filter((d) => d.label && d.value !== null);
      if (!data.length) throw new Error("no numeric rows");
      node.innerHTML = barChart({ ...chart, data });
    } catch (err) {
      node.innerHTML = `<p class="chart-error">Couldn't load this sheet (${escapeHTML(err.message)}). Check that it is shared as "Anyone with the link" and the column names match.</p>`;
    }
  }

  function sheetButton(sheet) {
    if (!sheet || !sheet.url) return "";
    return `<a class="btn btn-glass" href="${escapeHTML(sheet.url)}" target="_blank" rel="noopener">${escapeHTML(sheet.label || "Open sheet")}</a>`;
  }

  document.querySelectorAll("[data-bind]").forEach((node) => {
    const value = get(node.getAttribute("data-bind"));
    if (value != null) node.innerHTML = inline(value);
  });
  document.title = `${S.meta.shortTitle} | ${S.meta.groupName}`;

  $("hero-title").innerHTML = (S.meta.heroLines || [S.meta.shortTitle])
    .map((line) => `<span class="line">${escapeHTML(line)}</span>`).join("");
  $("hero-names").textContent = S.team.members.map((m) => surname(m.name)).join(", ");

  const images = S.images || {};
  $("hero-images").innerHTML = (images.hero || []).map((img) => `
    <img class="hero-img hero-img-${img.side === "right" ? "right" : "left"}${img.blur ? " is-blurred" : ""}"
         src="${escapeHTML(img.src)}" alt="${escapeHTML(img.alt || "")}">`).join("");
  const rqImage = $("rq-image");
  if (rqImage && images.questions && images.questions.src) {
    rqImage.innerHTML = `<img src="${escapeHTML(images.questions.src)}" alt="${escapeHTML(images.questions.alt || "")}">`;
  } else if (rqImage) {
    rqImage.remove();
  }

  const BG = S.background || {};
  $("bg-stats").innerHTML = (BG.stats || []).map((st) => `
    <div class="bg-stat">
      <span class="bg-stat-value">${escapeHTML(st.value)}</span>
      <span class="bg-stat-label">${inline(st.label)}</span>
    </div>`).join("") + ((BG.stats || []).length ? `<p class="bg-stat-source">Source: PSA (2024).</p>` : "");

  $("bg-blocks").innerHTML = (BG.blocks || []).map((d) => `
    <section class="data-block reveal">
      <h3>${inline(d.title)}</h3>
      <div class="data-block-body">${(d.body || []).map((p) => `<p>${inline(p)}</p>`).join("")}</div>
    </section>`).join("");

  $("sdg-cards").innerHTML = (BG.sdgs || []).map((g) => `
    <article class="sdg-card reveal" style="--sdg:${escapeHTML(g.color || "#0f74d6")}">
      <header class="sdg-tile">
        <span class="sdg-tile-num">${escapeHTML(g.num)}</span>
        <span class="sdg-tile-name">${inline(g.short || "")}</span>
      </header>
      <div class="sdg-body">
        <p class="sdg-goal"><span>Goal ${escapeHTML(g.num)}.</span> ${inline(g.name)}</p>
        ${(g.targets || []).map((t) => `
          <section class="sdg-target">
            <h4><span class="sdg-target-id">${escapeHTML(t.id)}</span>${inline(t.title)}</h4>
            <blockquote>${inline(t.text)}</blockquote>
            ${t.connection ? `<p class="sdg-connection"><strong>Our project:</strong> ${inline(t.connection)}</p>` : ""}
            ${(t.rqs || []).length ? `<p class="sdg-rqs">${t.rqs.map((r) => `<a href="#questions">${escapeHTML(r)}</a>`).join("")}</p>` : ""}
          </section>`).join("")}
        ${g.why ? `<p class="sdg-why">${inline(g.why)}</p>` : ""}
      </div>
    </article>`).join("");

  function renderHypothesis(h) {
    if (!h) return '<span class="muted">To be added.</span>';
    if (typeof h === "string") return inline(h);
    return `
      <span class="hyp"><span class="hyp-tag">H<sub>0</sub></span><span>${inline(h.null)}</span></span>
      <span class="hyp"><span class="hyp-tag">H<sub>1</sub></span><span>${inline(h.alternative)}</span></span>`;
  }

  $("sdg-list").innerHTML = (S.questions.sdgs || []).map((g) => `
    <li><strong>${escapeHTML(g.num)}. ${inline(g.name)}:</strong> ${inline(g.detail)}</li>`).join("");

  $("questions-list").innerHTML = S.questions.items.map((q, i) => `
    <article class="rq-card ${i % 2 ? "is-glass glass" : "is-solid"} reveal">
      <button class="rq-toggle" type="button" aria-expanded="false" aria-controls="rq-detail-${i}">
        <span class="rq-num">${i + 1}.</span>
        <span class="rq-question">${inline(q.question)}</span>
        <span class="rq-more">
          <span class="rq-more-label">Hypotheses &amp; objective</span>
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 6 8.5l4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </button>
      <div class="rq-detail" id="rq-detail-${i}">
        <div class="rq-detail-inner">
          <dl>
            <div>
              <dt>Hypotheses</dt>
              <dd>${renderHypothesis(q.hypothesis)}</dd>
            </div>
            <div>
              <dt>Objective</dt>
              <dd>${inline(q.objective)}${q.objectiveItems ? `<ul class="obj-items">${q.objectiveItems.map((it) => `<li>${inline(it)}</li>`).join("")}</ul>` : ""}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>`).join("");

  document.querySelectorAll(".rq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      btn.closest(".rq-card").classList.toggle("is-open", !open);
    });
  });

  $("datasets").innerHTML = S.data.datasets.map((d) => `
    <article class="dataset reveal">
      <div class="dataset-top">
        <span class="dataset-abbr">${escapeHTML(d.abbr)}</span>
      </div>
      <h3>${inline(d.name)}</h3>
      <p class="dataset-pub">${inline(d.publisher)}</p>
      <dl class="facts">
        ${d.facts.map(([k, v]) => `<div><dt>${inline(k)}</dt><dd>${inline(v)}</dd></div>`).join("")}
      </dl>
      ${d.body.map((p) => `<p>${inline(p)}</p>`).join("")}
      ${d.url ? `<a class="btn" href="${escapeHTML(d.url)}" target="_blank" rel="noopener">View catalog entry</a>` : ""}
    </article>`).join("");

  $("data-details").innerHTML = (S.data.details || []).map((d) => `
    <section class="data-block reveal">
      <h3>${inline(d.title)}</h3>
      <div class="data-block-body">
        ${(d.body || []).map((p) => `<p>${inline(p)}</p>`).join("")}
        ${d.groups ? `<div class="var-groups">${d.groups.map((g) => `
          <div class="var-group">
            <h4>${inline(g.title)}</h4>
            <ul>${g.items.map((it) => `<li>${inline(it)}</li>`).join("")}</ul>
          </div>`).join("")}</div>` : ""}
      </div>
    </section>`).join("");

  $("constraints-list").innerHTML = S.data.constraints.map((c) => `
    <li><span class="constraint-title">${inline(c.title)}</span> ${inline(c.body)}</li>`).join("");

  function barChart(chart) {
    const data = chart.data || [];
    const max = chart.max || Math.max(...data.map((d) => d.value), 0) || 1;
    const unit = chart.unit || "";
    const rows = data.map((d) => {
      const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
      return `
        <div class="bar-row">
          <span class="bar-label">${inline(d.label)}</span>
          <span class="bar-track"><span class="bar-fill" style="--w:${pct}%"></span></span>
          <span class="bar-value">${escapeHTML(d.value.toLocaleString())}${escapeHTML(unit)}</span>
        </div>`;
    }).join("");
    return `<div class="bar-chart" role="img" aria-label="${escapeHTML(chart.alt || chart.title || "Bar chart")}">${rows}</div>`;
  }

  function renderChart(chart) {
    let inner = "";
    if (chart.type === "image") {
      inner = `<img src="${escapeHTML(chart.src)}" alt="${escapeHTML(chart.alt || "")}" loading="lazy">`;
    } else if (chart.type === "bar") {
      inner = barChart(chart);
    } else if (chart.type === "sheet") {
      inner = `<div class="sheet-chart" data-sheet-chart="${sheetCharts.push(chart) - 1}"><p class="chart-loading">Loading from Google Sheets</p></div>`;
    } else {
      return "";
    }
    return `
      <figure class="chart">
        ${chart.title ? `<figcaption class="chart-title">${inline(chart.title)}</figcaption>` : ""}
        ${inner}
        ${chart.caption ? `<p class="chart-caption">${inline(chart.caption)}</p>` : ""}
      </figure>`;
  }

  const sheetCharts = [];
  const questionById = Object.fromEntries(S.questions.items.map((q) => [q.id, q]));

  $("findings-list").innerHTML = S.findings.items.map((f) => {
    const q = questionById[f.rq];
    const charts = (f.charts || []).map(renderChart).join("");
    const placeholder = `
      <div class="placeholder">
        <span>Chart forthcoming</span>
        <small>Analysis for ${escapeHTML(f.rq)} is still in progress.</small>
      </div>`;
    return `
      <article class="finding glass reveal" id="finding-${escapeHTML(f.rq.toLowerCase())}">
        <header class="finding-head">
          <span class="finding-rq">${escapeHTML(f.rq)}</span>
          <div>
            <h3>${inline(f.title)}</h3>
            ${q ? `<p class="finding-q">${inline(q.label)}</p>` : ""}
          </div>
          ${sheetButton(f.sheet)}
        </header>
        ${f.summary ? `<p class="finding-summary">${inline(f.summary)}</p>` : ""}
        <div class="finding-charts">${charts || placeholder}</div>
      </article>`;
  }).join("");

  document.querySelectorAll("[data-sheet-chart]").forEach((node) => {
    loadSheetChart(node, sheetCharts[+node.dataset.sheetChart]);
  });

  const sheets = (S.sheets || []).filter((x) => x && x.url);
  $("sheets-list").innerHTML = sheets.length
    ? sheets.map((x, i) => `
      <li>
        <a class="sheet-card glass${i === 0 ? " is-main" : ""}" href="${escapeHTML(x.url)}" target="_blank" rel="noopener">
          <span class="sheet-icon" aria-hidden="true"><svg viewBox="0 0 20 20"><rect x="2.5" y="2.5" width="15" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 7.5h15M2.5 12.5h15M8 7.5v10" stroke="currentColor" stroke-width="1.6"/></svg></span>
          <span class="sheet-label">${inline(x.label)}</span>
          ${x.note ? `<span class="sheet-note">${inline(x.note)}</span>` : ""}
          <span class="sheet-url">${escapeHTML(x.url)}</span>
        </a>
      </li>`).join("")
    : `<li class="sheets-empty">Our Google Sheets will be linked here.</li>`;

  $("method-steps").innerHTML = S.methodology.steps.map((s, i) => `
    <div class="method-step reveal">
      <span class="method-num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${inline(s.title)}</h3>
      <p>${inline(s.body)}</p>
    </div>`).join("");

  $("var-rows").innerHTML = S.methodology.variables.map((v) => `
    <tr>
      <td><code>${escapeHTML(v.name)}</code></td>
      <td>${inline(v.label)}</td>
      <td>${inline(v.use)}</td>
    </tr>`).join("");

  $("team-list").innerHTML = S.team.members.map((m) => `
    <li class="member reveal">
      <span class="member-name">${escapeHTML(m.name)}</span>
      ${m.role ? `<span class="member-role">${inline(m.role)}</span>` : ""}
    </li>`).join("");

  $("references-list").innerHTML = (S.references || []).map((r) => `<li>${inline(r)}</li>`).join("");

  $("sources-list").innerHTML = S.sources.map((s) => `
    <li>
      <a href="${escapeHTML(s.url)}" target="_blank" rel="noopener">${inline(s.label)}</a>
      <span>${inline(s.publisher)}</span>
    </li>`).join("");

  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("can-reveal");
    const revealer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        revealer.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));
  }

  const topbar = document.querySelector(".topbar");
  const toned = Array.from(document.querySelectorAll("main [data-tone], .footer"));
  const links = Array.from(document.querySelectorAll(".nav a"));
  let ticking = false;

  function syncTopbar() {
    ticking = false;
    const probe = topbar.offsetHeight / 2;
    const under = toned.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= probe && r.bottom > probe;
    });
    if (under) topbar.dataset.tone = under.dataset.tone || "white";
    topbar.classList.toggle("is-scrolled", window.scrollY > 8);

    const mid = window.innerHeight * 0.45;
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let activeId = "";
    links.forEach((a) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t && t.getBoundingClientRect().top <= mid) activeId = a.getAttribute("href");
    });
    if (bottom && links.length) activeId = links[links.length - 1].getAttribute("href");
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === activeId));
    moveLens(links.find((a) => a.getAttribute("href") === activeId));
  }

  const lens = document.querySelector(".nav-lens");
  function moveLens(link) {
    if (!lens) return;
    if (!link) { lens.style.opacity = "0"; return; }
    lens.style.opacity = "1";
    lens.style.width = `${link.offsetWidth}px`;
    lens.style.transform = `translateX(${link.offsetLeft}px)`;
  }

  if (window.matchMedia("(hover: hover)").matches) {
    let pending = null;
    document.addEventListener("pointermove", (e) => {
      const el = e.target.closest && e.target.closest(".glass");
      if (!el) return;
      pending = { el, x: e.clientX, y: e.clientY };
      requestAnimationFrame(() => {
        if (!pending) return;
        const r = pending.el.getBoundingClientRect();
        pending.el.style.setProperty("--mx", `${pending.x - r.left}px`);
        pending.el.style.setProperty("--my", `${pending.y - r.top}px`);
        pending = null;
      });
    }, { passive: true });
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(syncTopbar); }
  }, { passive: true });
  window.addEventListener("resize", syncTopbar);
  syncTopbar();
})();
