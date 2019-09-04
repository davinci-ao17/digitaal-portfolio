

function opleidingmenu() {
  document.getElementById("cv").innerHTML = "Terug";
  document.getElementById("cv").onclick = back;
  document.getElementById("cv").href = "#";
  document.getElementById("oplmenu").innerHTML = "Huidige opleiding";
  setTimeout(function(){document.getElementById("oplmenu").href = "phone/pages/opleidingphone.html";},10);
  document.getElementById("wrkmenu").innerHTML = "Vorige opleiding";
  document.getElementById("wrkmenu").href = "phone/pages/vorigeopleidingphone.html"
}

function werkmenu() {
  document.getElementById("cv").innerHTML = "Terug";
  document.getElementById("cv").onclick = back;
  document.getElementById("cv").href = "#";
  document.getElementById("oplmenu").innerHTML = "Huidige opleiding";
  document.getElementById("oplmenu").href = "phone/pages/werkphone.html";
  document.getElementById("wrkmenu").innerHTML = "Vorige opleiding";
  setTimeout(function(){document.getElementById("wrkmenu").href = "phone/pages/vorigwerkphone.html"},10);
}

function back() {
  document.getElementById("oplmenu").innerHTML = "Opleidingen";
  document.getElementById("oplmenu").href = "#";
  document.getElementById("wrkmenu").innerHTML = "Werk";
  document.getElementById("wrkmenu").href = "#"
  document.getElementById("cv").innerHTML = "Mijn cv";
  document.getElementById("cv").onclick = null;
  setTimeout(function(){document.getElementById("cv").href = "phone/pages/overmijphone.html";},10);
}
