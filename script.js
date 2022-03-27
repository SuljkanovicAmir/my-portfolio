
let scrollUp = document.querySelector('.scroll-up')


scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });




const navLink = document.querySelectorAll(".navigation");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


  document.querySelectorAll('.fade-in'); 


window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      document.querySelector(".scroll-up").style.visibility = "visible";
    } else {
      document.querySelector(".scroll-up").style.visibility = "hidden";
    }
} 





let myVar;

function myFunction() {
  
  myVar = setTimeout(showPage, 800);
}

function showPage() { 
  document.querySelector('.loader-wrapper').style.display = "none";
  document.querySelector(".main-body").style.display = "grid";
  document.querySelector('.main-body').style.animation = "mynewmove 4s 2";
  VANTA.NET({
    el: ".firstScreen",
    mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x343232,
  backgroundColor: 0x0,
  points: 17.00,
  maxDistance: 12.00,
  spacing: 14.00,
  showDots: false
  })
  AOS.init({
    duration: 1100,
    delay: 200,
  });
}


function darkMode() {
  let element = document.body;
  element.classList.toggle("dark");
  document.querySelector('.main-body').classList.toggle('dark')
  document.querySelector('.firstScreen').classList.toggle('dark')
  document.querySelector('.logoText').classList.toggle('dark')
  document.querySelector('.main-section').classList.toggle('dark')
  document.querySelector('.mytitle').classList.toggle('dark')
  document.querySelector('.main-container').classList.toggle('dark')
  document.querySelector('.aboutMe').classList.toggle('dark')
  document.querySelector('.form-container').classList.toggle('dark')
  document.querySelector('.form-text').classList.toggle('dark')
  document.querySelectorAll('.text').forEach(function(field) {
    field.classList.toggle('dark')
    });
    document.querySelectorAll('.myproject').forEach(function(field) {
      field.classList.toggle('dark')
      });
  document.querySelector('.pText').classList.toggle('dark');
  document.querySelector('.form-title').classList.toggle('dark');
  document.querySelector('.socials').classList.toggle('dark');
  document.querySelector('.scroll-up').classList.toggle('dark');
  document.querySelector('.title2').classList.toggle('dark');
  document.querySelector('.form-btn').classList.toggle('dark');
  document.querySelector('.loader').classList.toggle('dark');
  document.querySelector('.loader-text').classList.toggle('dark');
  document.querySelector('.loader-wrapper').classList.toggle('dark');
  document.querySelector('.darkmodeImg').classList.toggle('dark');
  document.querySelector('.arrowBtn').classList.toggle('dark');
  document.querySelector('.firstBtn').classList.toggle('dark');
  document.querySelector('.burger-menu').classList.toggle('dark');
  document.querySelector('.xbutton').classList.toggle('dark');
  let mainBody = document.querySelector('.main-body');
if (mainBody.classList.contains('dark')) {
  VANTA.NET({
    el: ".firstScreen",
    mouseControls: true,
           touchControls: true,
           gyroControls: false,
           scale: 1.0,
           scaleMobile: 1.0,
           color: 0xcac6b5,
           backgroundColor: 0xf0f0f0,
           spacing: 22.0,
           showDots: false,
  })} else {
    VANTA.NET({
      el: ".firstScreen",
      mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x343232,
    backgroundColor: 0x0,
    points: 17.00,
    maxDistance: 12.00,
    spacing: 14.00,
    showDots: false
    })
  }
 
} 

