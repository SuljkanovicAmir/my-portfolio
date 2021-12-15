
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

let i = 0, myTitle;
myTitle = "Hello, I'm Amir Suljkanović.\r\nI'm a web developer.";

function typing () {
  if(i < myTitle.length) {
    document.querySelector('#mytitle').textContent += myTitle.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
setTimeout(typing, 400);
let j = 0, myP;
myP = "I have 1 year experience at HTML, CSS and Javascript. \r\nI value honesty and integrity above all else. These ideals \r\nguide my approach to problem solving and life in general." ;

/*
function typingP () {
  if(j < myP.length) {
    document.querySelector('#myp').textContent += myP.charAt(j);
    j++;
    setTimeout(typingP, 30);
  }
}


setTimeout(typingP, 3500);
*/
function validate() {
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let msg = document.querySelector("#message");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "" || msg.value == "") {
    emptyerror();
  } else {
    sendMail(name.value, email.value, msg.value);
    success();
  }
});
}
validate();
 

function sendMail (name, email, msg) {
  emailjs.send('portfolio_email', 'template_nrdx09h',{
  email: email,
  name: name,
  msg: msg,
  });
};

function emptyerror() {
  Swal.fire({
    title: "Fields can't be empty!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Something went wrong!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Successfully sent message",
  });
}
 
function swalMessage () {
  Swal.fire('Links to projects will be added later');
}


/*
let projectImg = document.querySelectorAll('.img').forEach(item => {
  item.addEventListener('click', () => {
   swalMessage();
});
});
*/

const logo = document.querySelector('.picture-header');
const mainParagraph = document.querySelector('#myp')
const socials = document.querySelector('.socials')

const tl = gsap.timeline();
  tl.to('.picture-header', {y: -1200, duration: 1}, "-=2");
  tl.to('.picture-header', {y: 20, duration: 2.2});
  tl.to('.picture-header', {y: 00, duration: 1});


  tl.to('#myp', {x: -1700, duration: 0,}, "-=15");
  tl.to('#myp', {x: 00, duration: 2.2});

  if (window.innerWidth < 1024) {
    false;
  } else {
    tl.to('.socials', {x: 150, duration: 0}, "-=15");
    tl.to('.socials', {x: -30, duration: 1});
    tl.to('.socials', {x: 00, duration: 0.5});
  }