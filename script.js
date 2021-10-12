const header = document.getElementById("header");
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const accordion = document.getElementsByClassName('contentBx');

document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};

for(i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}

