let judul = document.getElementById("judul");
let cek = document.getElementById("cek");
let leaf = document.getElementById("leaf");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let digimon = document.getElementById("digimon");
window.onscroll = function () {
  let Y = window.scrollY;
  judul.style.transform = "translateY(" + Y / 2 + "px)";
  cek.style.transform = "translateY(" + Y / -2 + "px)";
  leaf.style.transform = "translateX(" + Y / 5 + "px)";
  hill5.style.transform = "translateX(" + Y / 2 + "px)";
  hill4.style.transform = "translateX(" + Y / -3 + "px)";
  digimon.style.transform = "translateX(" + Y / 5 + "px)";
};
