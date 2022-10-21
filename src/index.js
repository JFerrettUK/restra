//main parent element
const contentElement = document.getElementById('content');

//create the main parent directories
const contactHead = document.createElement('div');
contactHead.setAttribute("id", "contactHead");

const navMenu = document.createElement('div');
navMenu.setAttribute("id", "navMenu");

const contentMain = document.createElement('div');
contentMain.setAttribute("id", "contentMain");

const bottomBanner = document.createElement('div');
bottomBanner.setAttribute("id", "bottomBanner");

contentElement.appendChild(contactHead);
contentElement.appendChild(navMenu);
contentElement.appendChild(contentMain);
contentElement.appendChild(bottomBanner);

//create the ContactHead tree

const contactHeadBody = document.getElementById('contactHead');
var addressText = document.createTextNode("2904 15th Street NW. Nevada DV 12223   (202) 912 2333");
contactHeadBody.appendChild(addressText);

//create the navMenu tree

const navMenuBody = document.getElementById('navMenu');
const logo = document.createElement("img");
logo.src = "/src/restralogo.png";
logo.setAttribute("id", "logo");
navMenuBody.appendChild(logo);


//create the contentMain tree



//create the bottomBanner tree