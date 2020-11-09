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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const services = document.querySelectorAll('.container header nav a');
console.log(services)
services[0].textContent = siteContent["nav"]['nav-item-1'];
services[1].textContent = siteContent["nav"]['nav-item-2'];
services[2].textContent = siteContent["nav"]['nav-item-3'];
services[3].textContent = siteContent["nav"]['nav-item-4'];
services[4].textContent = siteContent["nav"]['nav-item-5'];
services[5].textContent = siteContent["nav"]['nav-item-6'];
const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"]
const titleButton = document.querySelector('button');
titleButton.textContent = siteContent["cta"]["button"];
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
const features = document.querySelectorAll('.top-content .text-content h4');
features[0].textContent = siteContent["main-content"]["features-h4"];
features[1].textContent = siteContent["main-content"]["about-h4"]
const featuresContent = document.querySelectorAll('.top-content .text-content p');
featuresContent[0].textContent = siteContent["main-content"]['features-content'];
featuresContent[1].textContent = siteContent["main-content"]['about-content'];
// const middleImg = document.querySelector('#middle-img');
// logo.setAttribute('src', siteContent["main-content"]["middle-img-src"])