const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll(".container header nav a");
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

const prepended = document.createElement("a");
prepended.textContent = "Home";
prepended.href = "#";

const appended = document.createElement("a");
appended.textContent = "Visit Us!";
appended.href = "#";

const nav = document.querySelector(".container header nav");
nav.prepend(prepended);
nav.appendChild(appended);

navLinks = document.querySelectorAll(".container header nav a"); //updating navLinks with new <a> elements

//navLinks.style.color = "green";  <- why doesn't this work?

navLinks.forEach(link => {
  link.style.color = "green";
});

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1; //this still needs all words on their own lines somehow

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const codeCircleImg = document.querySelector("#cta-img");
codeCircleImg.src = siteContent.cta["img-src"];

const topH4s = document.querySelectorAll(".top-content h4");
topH4s[0].textContent = siteContent["main-content"]["features-h4"]; //use forEach here?
topH4s[1].textContent = siteContent["main-content"]["about-h4"];

const topPs = document.querySelectorAll(".top-content p");
topPs[0].textContent = siteContent["main-content"]["features-content"]; //use forEach here?
topPs[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomH4s = document.querySelectorAll(".bottom-content h4");
bottomH4s[0].textContent = siteContent["main-content"]["services-h4"]; //use forEach here?
bottomH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4s[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomPs = document.querySelectorAll(".bottom-content p");
bottomPs[0].textContent = siteContent["main-content"]["services-content"]; //use forEach here?
bottomPs[1].textContent = siteContent["main-content"]["product-content"];
bottomPs[2].textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");
contactPs[0].textContent = siteContent.contact.address; //needs to be on two lines...use forEach here?
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;
