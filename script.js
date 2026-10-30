// Language toggle (EN default, ID optional) + copy email.
(function () {
  "use strict";

  var ID = {
    "skip": "Lewati ke konten",
    "nav.work": "Proyek",
    "nav.skills": "Keahlian",
    "nav.exp": "Pengalaman",
    "nav.contact": "Kontak",

    "hero.eyebrow": "Senior IT Developer Support · menuju DBA",
    "hero.title": "Saya menjaga database di balik sistem pembiayaan tetap cepat dan akurat.",
    "hero.lede": "Sehari-hari saya menangani sistem manajemen pembiayaan yang dipakai perusahaan multifinance di Indonesia: SQL Server, stored procedure, laporan regulasi, serta kode .NET dan Angular di sekitarnya. Saya sedang mengarahkan pekerjaan ini ke database administration.",
    "hero.cta1": "Lihat case study",
    "hero.cta2": "Hubungi saya",
    "console.role": "Sr. IT Dev Support",
    "console.status": "Query berhasil dijalankan.",

    "work.eyebrow": "Proyek unggulan",
    "work.title": "Case study tuning SQL Server",
    "work.lede": "Database multifinance fiktif dengan sekitar 4,8 juta angsuran dan tiga query lambat yang hampir selalu muncul di sistem pembiayaan. Tiap query disertai diagnosis, perbaikan, biaya perbaikannya, dan skrip rollback.",
    "lbl.problem": "Masalah",
    "lbl.fix": "Solusi",
    "lbl.cost": "Biaya",
    "s1.title": "Pencarian kontrak berdasarkan nomor",
    "s1.problem": "Tidak ada index di <code>ContractNo</code>, dan aplikasi mengirim parameter <code>NVARCHAR</code> ke kolom <code>VARCHAR</code>.",
    "s1.fix": "Unique index plus tipe parameter yang benar. Index saja tetap scan karena <code>CONVERT_IMPLICIT</code>.",
    "s1.cost": "Satu index kecil, plus mencari semua pemanggil yang mengirim tipe salah.",
    "s2.title": "Laporan tunggakan per bucket DPD",
    "s2.problem": "<code>DATEDIFF</code> dan <code>ISNULL</code> di kolom membuat filter non-sargable, sehingga semua angsuran terbaca.",
    "s2.fix": "Query ditulis ulang agar sargable, ditambah filtered index yang hanya berisi angsuran belum lunas.",
    "s2.cost": "Setiap posting pembayaran ikut mengubah index. Hasilnya setara hanya jika tidak ada pembayaran sebagian.",
    "s3.title": "Rekap penagihan bulanan per cabang",
    "s3.problem": "Tiga correlated subquery membaca ulang tabel angsuran, difilter dengan <code>YEAR()</code> dan <code>MONTH()</code>.",
    "s3.fix": "Satu kali baca dengan rentang tanggal half-open dan covering index di <code>DueDate</code>.",
    "s3.cost": "Index lebar di tabel terbesar. Ukurannya diukur dulu sebelum diputuskan dipakai.",
    "method.title": "Cara saya melakukan tuning",
    "method.1": "Catat baseline: logical reads, CPU, durasi.",
    "method.2": "Baca actual plan: scan, warning, dan estimasi yang meleset.",
    "method.3": "Ubah satu hal, lalu ukur lagi.",
    "method.4": "Pastikan hasil query identik.",
    "method.5": "Hitung biaya write dan storage.",
    "method.6": "Selalu sertakan skrip rollback.",
    "work.cta": "Baca di GitHub",

    "skills.eyebrow": "Toolkit",
    "skills.title": "Teknologi yang saya pakai",
    "skills.db": "Database",
    "skills.sp": "Stored procedure",
    "skills.tune": "Query tuning & execution plan",
    "skills.mig": "Skrip migrasi yang aman",
    "skills.rep": "Laporan & dokumen",
    "skills.dyn": "Dynamic report builder",
    "skills.docx": "Template kontrak .docx",
    "skills.ops": "Production support",
    "skills.rca": "Root cause analysis",
    "skills.uat": "Koordinasi UAT",
    "skills.bug": "Bug fixing di production",
    "skills.domain": "Domain",
    "skills.fin": "Pembiayaan konvensional & syariah",
    "skills.reg": "Pelaporan SLIK OJK & SIPP",
    "skills.tax": "Laporan bukti potong PPh 23",

    "exp.eyebrow": "Pengalaman",
    "exp.title": "Perjalanan saya",
    "exp.now": "Sekarang",
    "exp.b1": "Memelihara dan mendukung sistem manajemen pembiayaan untuk beberapa klien multifinance, mencakup pembiayaan konvensional dan syariah.",
    "exp.b2": "Menangani insiden production dari awal sampai selesai: reproduksi, perbaikan, dokumentasi root cause analysis, dan koordinasi UAT dengan klien.",
    "exp.b3": "Membangun laporan dinamis berbasis SQL, termasuk laporan bukti potong PPh 23 dan laporan hak akses user dengan hierarki join yang kompleks.",
    "exp.b4": "Memperbaiki selisih jurnal pada transaksi pencairan pembiayaan dan menulis skrip migrasi idempotent yang aman dijalankan ulang.",
    "exp.b5": "Memelihara template dokumen kontrak yang dihasilkan dari C# dan stored procedure.",
    "edu.title": "Rekayasa Perangkat Lunak (RPL)",
    "now.eyebrow": "Saat ini",
    "now.1": "Menambah karya SQL Server publik: skrip maintenance dan API .NET Core berbasis stored procedure.",
    "now.2": "Belajar bahasa Jepang, menargetkan JLPT N3.",

    "contact.eyebrow": "Kontak",
    "contact.title": "Sedang mencari DBA atau SQL Server developer?",
    "contact.lede": "Saya terbuka untuk posisi database dan backend di perbankan dan fintech. Email adalah cara tercepat menghubungi saya.",
    "contact.copy": "Salin",
    "footer.note": "HTML dan CSS biasa, di-host di GitHub Pages."
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var EN = {};
  nodes.forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.innerHTML; });

  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang button"));

  function apply(lang) {
    var dict = lang === "id" ? ID : EN;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked */ }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* storage blocked */ }
  if (saved === "id") apply("id");

  // Copy email
  var copyBtn = document.getElementById("copy-email");
  var emailEl = document.getElementById("email");
  if (copyBtn && emailEl) {
    copyBtn.addEventListener("click", function () {
      var text = emailEl.textContent.trim();
      var done = function () {
        var label = copyBtn.textContent;
        copyBtn.textContent = document.documentElement.lang === "id" ? "Tersalin" : "Copied";
        setTimeout(function () { copyBtn.textContent = label; }, 1600);
      };
      var fallback = function () {
        var range = document.createRange();
        range.selectNodeContents(emailEl);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
    });
  }
})();
