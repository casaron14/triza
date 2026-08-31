(function () {
  "use strict";

  /* =========================================================================
     Triza Maleko — vCard generator
     Edit the CONTACT object below to update the details written to the .vcf
     file. Clicking either "Download Contact" button downloads a copy.
     ========================================================================= */

  var CONTACT = {
    firstName: "Triza",
    lastName: "Maleko",
    title: "Digital Entrepreneur & Crypto Investor",
    org: "Triza Maleko",
    phone: "+255 652 447 775",
    whatsapp: "+255 652 447 775",
    email: "trizahglove@gmail.com",
    city: "Dar es Salaam",
    country: "Tanzania",
    note: "Former classroom teacher helping people understand and earn from blockchain opportunities."
  };

  function esc(value) {
    return String(value)
      .replace(/\r/g, "")
      .replace(/\n/g, "\\n")
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,");
  }

  function buildVCard(c) {
    var lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:" + esc(c.lastName) + ";" + esc(c.firstName) + ";;;",
      "FN:" + esc(c.firstName + " " + c.lastName),
      "ORG:" + esc(c.org),
      "TITLE:" + esc(c.title),
      "TEL;TYPE=WORK,VOICE:" + esc(c.phone),
      "TEL;TYPE=WHATSAPP:" + esc(c.whatsapp),
      "EMAIL;TYPE=WORK,INTERNET:" + esc(c.email),
      "ADR;TYPE=WORK:;" + esc(c.city) + ";" + esc(c.country),
      "NOTE:" + esc(c.note),
      "REV:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z",
      "END:VCARD"
    ];
    return lines.join("\r\n") + "\r\n";
  }

  function fileName() {
    return "Triza-Maleko.vcf";
  }

  function download() {
    var blob = new Blob([buildVCard(CONTACT)], { type: "text/vcard;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  var trigger = document.getElementById("downloadContact");
  if (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      download();
    });
  }
})();
