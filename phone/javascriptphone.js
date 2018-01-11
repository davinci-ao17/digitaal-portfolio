

function opleidingmenu() {
  document.getElementById("cv").innerHTML = "Terug";
  document.getElementById("cv").onclick = back;
  document.getElementById("oplmenu").innerHTML = "Huidige opleiding";
  setTimeout(function(){document.getElementById("oplmenu").href = "phone/pages/opleidingphone.html";},10);
  document.getElementById("wrkmenu").innerHTML = "Vorige opleiding";
  document.getElementById("wrkmenu").href = "phone/pages/vorigeopleidingphone.html"
}

function werkmenu() {

}

function back() {

}
