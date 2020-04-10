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

navLinks.forEach(link => {
  link.style.textDecoration = "none";
  link.style.color = "green";
  link.style.fontSize = "1.1rem";
  link.style.lineHeight = "1.2";
  link.style.padding = "0.4%";
  link.style.borderRadius = "5px";
  link.addEventListener("mouseenter", (event) => {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "green";
  });
  link.addEventListener("mouseleave", (event) => {
    event.target.style.color = "green";
    event.target.style.backgroundColor = "white";
  });
});

//are two separate event listeners ok, or is it better to do one with a conditional statement?
//is there a way to do the above styling by altering the css hover pseudoclass style? 

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1; //this still needs all words on their own lines somehow
//ctaH1.textContent = "DOM \n IS \n AWESOME"
ctaH1.style.width = "70%";
ctaH1.style.textAlign = "center";
//ctaH1.style.border = "1px solid black";

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;
ctaButton.style.borderRadius = "5px";
ctaButton.addEventListener("click", (event) => {
  const newText = document.createElement("p");
  newText.textContent = "You won't regret it!";
  newText.style.fontFamily = "'Bangers', cursive";
  newText.style.fontSize = "2rem";
  newText.style.marginTop = "5%";
  const ctaText = document.querySelector(".cta-text");
  ctaText.appendChild(newText);
}, {once: true});

const codeCircleImg = document.querySelector("#cta-img");
codeCircleImg.src = siteContent.cta["img-src"];

const topH4s = document.querySelectorAll(".top-content h4");
topH4s[0].textContent = siteContent["main-content"]["features-h4"]; //use forEach for all of these?
topH4s[1].textContent = siteContent["main-content"]["about-h4"];

const topPs = document.querySelectorAll(".top-content p");
topPs[0].textContent = siteContent["main-content"]["features-content"];
topPs[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomH4s = document.querySelectorAll(".bottom-content h4");
bottomH4s[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4s[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomPs = document.querySelectorAll(".bottom-content p");
bottomPs[0].textContent = siteContent["main-content"]["services-content"];
bottomPs[1].textContent = siteContent["main-content"]["product-content"];
bottomPs[2].textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");
//contactPs[0].textContent = "123 Way 456 Street \n Somewhere, USA"
contactPs[0].textContent = siteContent.contact.address; //needs to be on two lines
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;
