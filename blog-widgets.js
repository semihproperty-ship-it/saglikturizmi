/* blog-widgets.js — yazı içi ilgili-yazı kutusu + alta kaydırılabilir "Diğer Yazılar" şeridi.
   Yalnızca blog yazı sayfalarında çalışır. Tasarıma dokunmadan, JS ile eklenir. */
(function () {
  var POSTS = [{"s": "saglik-turizminde-dijital-pazarlama", "c": "Strateji", "t": "Sağlık Turizminde Dijital Pazarlama: Uçtan Uca Strateji", "e": "SEO, reklam, sosyal medya, CRM ve yönetmelik uyumunu kapsayan, birbirini besleyen katmanlarla uçtan uca strateji rehberi."}, {"s": "saglik-turizminde-crm", "c": "CRM & Takip", "t": "Sağlık Turizminde CRM ve Hasta Takibi", "e": "Hasta adaylarını sistematik takip eden bir CRM'i WhatsApp ve e-posta ile entegre ederek dağınık mesajlaşmayı düzenli bir hasta yolculuğuna çevirmek."}, {"s": "saglik-turizminde-google-reklamlari-seo", "c": "SEO & Reklam", "t": "Sağlık Turizminde Google Reklamları ve SEO", "e": "SEO kalıcı zemini örerken reklam hızlı aday akışı sağlar. İkisini yönetmelik sınırları içinde birlikte yürütmenin rehberi."}, {"s": "saglik-turizminde-sosyal-medya", "c": "Sosyal Medya", "t": "Sağlık Turizminde Sosyal Medya Nasıl Olmalı?", "e": "Sosyal medya bir satış değil güven kanalıdır; yönetmelik uyumlu içerik sınırları, platform seçimi ve uygulanabilir içerik planı."}, {"s": "saglik-turizmi-web-sitesi-nasil-olmali", "c": "Web", "t": "Sağlık Turizmi Web Sitesi Nasıl Olmalı?", "e": "Hız, mobil uyum, güven unsurları, içerik yapısı ve yönetmelik uyumunu kapsayan dönüşüm odaklı kontrol listesi."}, {"s": "saglik-turizminde-hasta-yorumu-yonetimi", "c": "Marka & Güven", "t": "Sağlık Turizminde Hasta Yorumu Nasıl Toplanır?", "e": "Sahte yorumun riskleri, izinle ve doğru anda etik geri bildirim toplama, olumsuz yorum yönetimi ve mahremiyet ilkeleri."}, {"s": "saglik-dijital-icerik-reklam-uyum-rehberi", "c": "Mevzuat & Uyum", "t": "Sağlıkta Dijital İçerik ve Reklam Uyum Rehberi", "e": "12 Kasım 2025 tarihli Sağlık Hizmetleri Tanıtım Yönetmeliği'nin sade özeti: reklam yasak, bilgilendirme serbest ayrımı ve pratik uyum çerçevesi."}, {"s": "klinik-pazarlama-nedir", "c": "Kavramlar", "t": "Klinik Pazarlaması ve Klinik Medyası Nedir?", "e": "Sahip olunan medya, görünürlük, güven ve dönüşüm katmanlarıyla kliniklerin dijital büyümesini reklam değil bilgilendirme esasıyla ele alan kavram rehberi."}, {"s": "saglik-turizminde-dijital-pazarlama-nereden-baslamali", "c": "Strateji", "t": "Sağlık Turizminde Dijital Pazarlama Nereden Başlamalı?", "e": "Reklam vermeden önce kurulması gereken altyapı: web sitesi, içerik, hekim profili, hasta deneyimi içerikleri ve iletişim kanalı standardı."}, {"s": "lead-cevap-hizinin-hasta-donusumune-etkisi", "c": "Satış", "t": "Lead Cevap Hızının Hasta Dönüşümüne Etkisi", "e": "İlk 5 dakikada cevap verilen lead'in dönüşüm oranı, 1 saat sonra cevap verilenden ne kadar fazla? Sahadaki gözlemler ve neden bu kadar kritik."}, {"s": "saglik-turizminde-crm-kullaniminin-temelleri", "c": "CRM", "t": "Sağlık Turizminde CRM Kullanımının Temelleri", "e": "Bir CRM yazılımı satın almak yetmez — süreç tasarımı, görev atamaları, takip aralıkları ve KPI'lar olmadan CRM sadece bir veri deposudur."}, {"s": "meta-reklamlarinda-saglik-uyumu-rehberi", "c": "Reklam", "t": "Meta Reklamlarında Sağlık Uyumu Rehberi", "e": "\"Öncesi-sonrası\" görseli, kesin sonuç vaadi, hassas hedefleme — Meta'nın sağlık reklamlarında en sık yayından kaldırma nedenleri."}, {"s": "cok-dilli-landing-page-tasarim-prensipleri", "c": "Web", "t": "Çok Dilli Landing Page Tasarım Prensipleri", "e": "Almanca konuşan hastayı Türkçe sayfaya yönlendirmek dönüşümü öldürür. Pazar bazlı landing page yapısının doğru kurulumu."}, {"s": "whatsapp-ile-ilk-temas-standardi-nasil-kurulur", "c": "İletişim", "t": "WhatsApp ile İlk Temas Standardı Nasıl Kurulur?", "e": "İlk WhatsApp mesajı bir karşılama mesajı değildir; satış sürecinin başlangıcıdır. Şablon, ton ve takip akışlarının nasıl kurulacağı."}, {"s": "saglik-turizminde-satis-ekibi-yapilandirmasi", "c": "Operasyon", "t": "Sağlık Turizminde Satış Ekibi Yapılandırması", "e": "Bir hasta danışmanı ne yapmalı, koordinatör ne yapmalı, hasta deneyimi yöneticisi ne yapmalı? Klinik ölçeğine göre takım yapısı."}, {"s": "hasta-yorumlari-ve-referans-yonetimi", "c": "Marka", "t": "Hasta Yorumları ve Referans Yönetimi", "e": "Memnun bir hasta marka için altın değerinde — ama yalnızca yorumu doğru zamanda istediğinizde. Yorum toplama ve yönetiminin metodolojisi."}, {"s": "saglik-turizmi-nasil-yapilir", "c": "Temel Rehber", "t": "Sağlık Turizmi Nasıl Yapılır? Sistemli Başlangıç Rehberi", "e": "Sağlık turizmini yalnızca reklam kampanyası olarak ele alan klinikler uzun vadede büyüyemiyor. 5 temel sistem ve doğru kurulum sırası."}, {"s": "klinikler-lead-donusturemiyor", "c": "CRM", "t": "Klinikler Neden Lead Alır Ama Randevuya Dönüştüremez?", "e": "Lead alma değil, lead yönetimi problemi. İlk temas süresi, iletişim standardı ve CRM disiplininin hasta dönüşümüne etkisi."}, {"s": "whatsapp-ilk-mesaj", "c": "WhatsApp", "t": "Sağlık Turizminde WhatsApp İlk Mesajı Nasıl Olmalı?", "e": "Bot gibi kokan ilk mesajlar hasta adayını ilk saniyede kaybettirir. İnsan gibi hissettiren mesaj yapısı, örnekleri ve dikkat edilmesi gerekenler."}];

  var m = location.pathname.match(/\/blog\/([^\/]+)\/?/);
  var cur = m ? m[1] : "";
  if (!cur || cur === "index.html") return;               // liste sayfasında çalışma
  var others = POSTS.filter(function (p) { return p.s !== cur; });
  if (others.length < 2) return;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  /* --- stiller (açık tema) --- */
  var css = [
    ".blog-inline-promo{display:block;text-decoration:none;margin:34px 0;padding:20px 24px;border:1px solid var(--purple-xlight,#e5ddff);border-left:4px solid var(--purple-main,#7C3AED);border-radius:14px;background:var(--bg-lavender,#f6f3ff);transition:box-shadow .2s,transform .2s}",
    ".blog-inline-promo:hover{box-shadow:0 10px 30px rgba(124,58,237,.14);transform:translateY(-2px)}",
    ".bip-label{font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--purple-main,#7C3AED);margin-bottom:8px;display:flex;align-items:center;gap:7px}",
    ".bip-label::before{content:'';width:15px;height:2px;background:var(--purple-main,#7C3AED);border-radius:2px}",
    ".bip-title{font-weight:700;font-size:17px;line-height:1.35;color:var(--text-dark,#1a1230);margin-bottom:6px}",
    ".bip-desc{font-size:14px;line-height:1.6;color:var(--text-mid,#5b5470);margin-bottom:10px}",
    ".bip-cta{font-size:13.5px;font-weight:700;color:var(--purple-main,#7C3AED)}",
    ".blog-carousel-section{background:var(--bg-soft,#faf8ff);border-top:1px solid var(--border,#eee);padding:56px 0}",
    ".bcs-head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:22px;flex-wrap:wrap}",
    ".bcs-title{font-size:22px;font-weight:800;color:var(--text-dark,#1a1230);margin:0}",
    ".bcs-hint{font-size:12.5px;color:var(--text-light,#8b8397)}",
    ".blog-carousel{display:flex;gap:18px;overflow-x:auto;padding:4px 4px 18px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}",
    ".blog-carousel::-webkit-scrollbar{height:8px}",
    ".blog-carousel::-webkit-scrollbar-thumb{background:var(--purple-xlight,#d9cdfb);border-radius:8px}",
    ".blog-carousel::-webkit-scrollbar-track{background:transparent}",
    ".bcc{scroll-snap-align:start;flex:0 0 300px;max-width:300px;background:#fff;border:1px solid var(--border,#eee);border-radius:14px;padding:22px;text-decoration:none;color:inherit;display:flex;flex-direction:column;transition:border-color .2s,transform .2s,box-shadow .2s}",
    ".bcc:hover{border-color:var(--purple-main,#7C3AED);transform:translateY(-3px);box-shadow:0 12px 30px rgba(124,58,237,.12)}",
    ".bcc-cat{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--purple-main,#7C3AED);margin-bottom:10px}",
    ".bcc-title{font-weight:700;font-size:16px;line-height:1.35;color:var(--text-dark,#1a1230);margin-bottom:8px}",
    ".bcc-desc{font-size:13.5px;line-height:1.6;color:var(--text-mid,#5b5470);margin-bottom:14px;flex:1;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",
    ".bcc-cta{font-size:13px;font-weight:700;color:var(--purple-main,#7C3AED);margin-top:auto}",
    "@media(max-width:600px){.bcc{flex:0 0 82%;max-width:82%}}"
  ].join("");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* --- 1) yazı ortasına ilgili-yazı kutusu --- */
  var article = document.querySelector("article.seo-article .container-xs")
             || document.querySelector("article .container-xs")
             || document.querySelector("article");
  if (article) {
    var pick = shuffle(others)[0];
    var promo = document.createElement("a");
    promo.href = "/blog/" + pick.s + "/";
    promo.className = "blog-inline-promo";
    promo.innerHTML =
      '<div class="bip-label">İlgili Yazı</div>' +
      '<div class="bip-title">' + esc(pick.t) + '</div>' +
      '<div class="bip-desc">' + esc(pick.e) + '</div>' +
      '<div class="bip-cta">Yazıyı oku →</div>';
    var kids = Array.prototype.slice.call(article.children);
    var h2s = kids.filter(function (el) { return el.tagName === "H2"; });
    var target = null;
    if (h2s.length >= 2) target = h2s[Math.floor(h2s.length / 2)];
    else if (kids.length) target = kids[Math.floor(kids.length / 2)];
    if (target) article.insertBefore(promo, target); else article.appendChild(promo);
  }

  /* --- 2) en alta kaydırılabilir "Diğer Yazılar" şeridi (rastgele sıra) --- */
  var footer = document.getElementById("site-footer");
  var cards = shuffle(others).map(function (p) {
    return '<a class="bcc" href="/blog/' + p.s + '/">' +
      '<div class="bcc-cat">' + esc(p.c) + '</div>' +
      '<div class="bcc-title">' + esc(p.t) + '</div>' +
      '<div class="bcc-desc">' + esc(p.e) + '</div>' +
      '<span class="bcc-cta">Yazıyı oku →</span></a>';
  }).join("");
  var sec = document.createElement("section");
  sec.className = "blog-carousel-section";
  sec.innerHTML =
    '<div class="container-md">' +
      '<div class="bcs-head"><h2 class="bcs-title">Diğer Yazılar</h2>' +
      '<span class="bcs-hint">← kaydırarak keşfedin →</span></div>' +
      '<div class="blog-carousel">' + cards + '</div>' +
    '</div>';
  if (footer && footer.parentNode) footer.parentNode.insertBefore(sec, footer);
  else document.body.appendChild(sec);
})();
