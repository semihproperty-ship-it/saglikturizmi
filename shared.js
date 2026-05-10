// saglikturizmi.info — Shared JS
// Renders header, footer, WhatsApp CTA, FAQ accordion, breadcrumb

(function () {
  const PHONE = '905397232292';

  // ── Current page detection
  const path = window.location.pathname;
  const isActive = (href) => path === href || path.startsWith(href + '/') && href !== '/';

  // ── Header
  function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML = `
      <header class="header">
        <div class="container header-inner">
          <a href="/" class="logo" aria-label="saglikturizmi.info ana sayfa">
            <div class="logo-mark">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L14 6v4c0 3-2.5 5-5 6C6.5 15 4 13 4 10V6l5-4z" fill="rgba(255,255,255,0.25)" stroke="#fff" stroke-width="1.2"/>
                <path d="M6.5 9h2v2.5h1V9h2" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="logo-text">saglikturizmi<span>.info</span></span>
          </a>
          <nav class="nav" aria-label="Ana navigasyon">
            ${[
              ['/rehber/', 'Sağlık Turizmi Rehberi'],
              ['/doktorlar/', 'Doktorlar İçin'],
              ['/klinikler/', 'Klinikler İçin'],
              ['/dijital-pazarlama/', 'Dijital Pazarlama'],
              ['/araclar/', 'Araçlar'],
              ['/blog/', 'Blog'],
              ['/sablonlar/', 'Şablonlar'],
              ['/iletisim/', 'İletişim'],
            ].map(([href, label]) =>
              `<a href="${href}" class="nav-link${isActive(href) ? ' active' : ''}">${label}</a>`
            ).join('')}
          </nav>
          <div class="header-ctas">
            <a href="/araclar/" class="btn btn-ghost btn-sm">Araçları Gör</a>
            <a href="/araclar/klinik-saglik-turizmi-hazirlik-skoru/" class="btn btn-primary btn-sm">Klinik Analizi</a>
          </div>
        </div>
      </header>`;
  }

  // ── Footer
  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="/" class="logo">
                <div class="logo-mark">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L14 6v4c0 3-2.5 5-5 6C6.5 15 4 13 4 10V6l5-4z" fill="rgba(255,255,255,0.25)" stroke="#fff" stroke-width="1.2"/>
                    <path d="M6.5 9h2v2.5h1V9h2" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span style="font-weight:800;font-size:15px;color:#fff">saglikturizmi<span style="color:#A78BFA">.info</span></span>
              </a>
              <p>saglikturizmi.info; doktorlar, klinikler ve sağlık turizmi profesyonelleri için dijital büyüme, hasta adayı yönetimi ve pazarlama sistemleri üzerine eğitim ve analiz platformudur.</p>
              <small>Bu platform bilgilendirme amaçlıdır. Tanıtım ve reklam süreçlerinde güncel mevzuat ve uzman görüşü dikkate alınmalıdır.</small>
            </div>
            <div>
              <div class="footer-col-title">Sağlık Turizmi</div>
              <a href="/rehber/" class="footer-link">Nedir?</a>
              <a href="/doktorlar/" class="footer-link">Doktorlar İçin</a>
              <a href="/klinikler/" class="footer-link">Klinikler İçin</a>
              <a href="/rehber/uluslararasi-pazar/" class="footer-link">Uluslararası Pazar</a>
            </div>
            <div>
              <div class="footer-col-title">Dijital Pazarlama</div>
              <a href="/dijital-pazarlama/meta-reklamlari/" class="footer-link">Meta Reklamları</a>
              <a href="/dijital-pazarlama/whatsapp-crm/" class="footer-link">WhatsApp ve CRM</a>
              <a href="/dijital-pazarlama/landing-page/" class="footer-link">Landing Page</a>
              <a href="/dijital-pazarlama/icerik-stratejisi/" class="footer-link">İçerik Stratejisi</a>
            </div>
            <div>
              <div class="footer-col-title">Araçlar</div>
              <a href="/araclar/klinik-saglik-turizmi-hazirlik-skoru/" class="footer-link">Hazırlık Skoru</a>
              <a href="/araclar/lead-cevap-hizi-hesaplayici/" class="footer-link">Lead Hesaplayıcı</a>
              <a href="/araclar/meta-reklam-uyum-kontrol-araci/" class="footer-link">Reklam Uyum Listesi</a>
              <a href="/sablonlar/" class="footer-link">Şablonlar</a>
            </div>
            <div>
              <div class="footer-col-title">Platform</div>
              <a href="/blog/" class="footer-link">Blog</a>
              <a href="/sablonlar/" class="footer-link">Rehberler</a>
              <a href="/hakkinda/" class="footer-link">Hakkında</a>
              <a href="/iletisim/" class="footer-link">İletişim</a>
            </div>
          </div>
          <hr class="divider" style="border-color:rgba(255,255,255,0.08)">
          <div class="footer-bottom">
            <span>© 2025 saglikturizmi.info — Tüm hakları saklıdır.</span>
            <div class="footer-legal">
              <a href="/gizlilik/">Gizlilik Politikası</a>
              <a href="/kullanim-kosullari/">Kullanım Koşulları</a>
              <a href="/kvkk/">KVKK</a>
            </div>
          </div>
        </div>
      </footer>`;
  }

  // ── WhatsApp CTA Block
  function renderWACTA(containerId, msg) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const text = encodeURIComponent(msg || 'Merhaba, kliniğim için sağlık turizmi sistemini değerlendirmek istiyorum.');
    el.innerHTML = `
      <div class="wa-cta-block">
        <div class="wa-cta-block-text">
          <h3>Kliniğinizin sistemini birlikte değerlendirelim.</h3>
          <p>Araçları kullandıktan sonra bir sonraki adımı netleştirmek için doğrudan WhatsApp üzerinden ulaşabilirsiniz.</p>
        </div>
        <a href="https://wa.me/${PHONE}?text=${text}" target="_blank" rel="noopener noreferrer" class="wa-cta">
          ${waIcon()} WhatsApp ile Ulaşın — +90 539 723 22 92
        </a>
      </div>`;
  }

  function waIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="white" stroke-width="1.5" fill="none"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/></svg>`;
  }

  // ── Inline WA button
  window.waLink = function(msg) {
    const text = encodeURIComponent(msg || 'Merhaba, sağlık turizmi sistemi hakkında bilgi almak istiyorum.');
    return `https://wa.me/${PHONE}?text=${text}`;
  };

  window.waBtn = function(msg, label) {
    return `<a href="${window.waLink(msg)}" target="_blank" rel="noopener noreferrer" class="wa-cta">${waIcon()} ${label || 'WhatsApp ile Ulaşın'}</a>`;
  };

  // ── FAQ Accordion
  function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('open');
        // close all
        document.querySelectorAll('.faq-q').forEach(b => {
          b.classList.remove('open');
          b.nextElementSibling.style.display = 'none';
          b.querySelector('.faq-icon').textContent = '+';
        });
        if (!isOpen) {
          btn.classList.add('open');
          btn.nextElementSibling.style.display = 'block';
          btn.querySelector('.faq-icon').textContent = '−';
        }
      });
      // init closed
      btn.nextElementSibling.style.display = 'none';
    });
  }

  // ── Breadcrumb
  window.renderBreadcrumb = function(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `<nav class="breadcrumb" aria-label="Breadcrumb">
      ${items.map((item, i) =>
        i < items.length - 1
          ? `<a href="${item.href}">${item.label}</a><span>›</span>`
          : `<span style="color:var(--text-mid)">${item.label}</span>`
      ).join('')}
    </nav>`;
  };

  // ── Score gauge
  window.renderScoreGauge = function(containerId, score, max, label) {
    const pct = Math.round((score / max) * 100);
    const color = pct >= 81 ? 'var(--purple-main)' : pct >= 61 ? '#059669' : pct >= 36 ? '#D97706' : '#DC2626';
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div style="text-align:center;padding:32px">
        <div class="score-display" style="color:${color}">${pct}</div>
        <div class="caption mt-8">100 üzerinden</div>
        <div style="font-weight:800;font-size:20px;margin-top:12px;color:${color}">${label}</div>
        <div class="progress-bar mt-16">
          <div class="progress-fill" style="width:${pct}%;background:${color}"></div>
        </div>
      </div>`;
  };

  // ── Init
  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    initFAQ();
    // Render all wa-cta-auto divs
    document.querySelectorAll('[data-wa-msg]').forEach(el => {
      el.innerHTML = window.waBtn(el.dataset.waMsg, el.dataset.waLabel);
    });
    // Render all wa-blocks
    document.querySelectorAll('[data-wa-block]').forEach(el => {
      renderWACTA(el.id, el.dataset.waBlock);
    });
    // Sticky header scroll effect
    const header = document.querySelector('.header');
    if (header) {
      window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 20 ? '0 1px 0 rgba(59,10,87,0.08)' : 'none';
      });
    }
  });

  window.STShared = { renderWACTA, waIcon, PHONE };
})();
