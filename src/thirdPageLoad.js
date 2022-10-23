export default function makePage2() {
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

    //create the ContactHead branch

    const contactHeadBody = document.getElementById('contactHead');
    var addressText = document.createTextNode("2904 15th Street NW. Nevada DV 12223   (202) 912 2333");
    contactHeadBody.appendChild(addressText);

    //create the navMenu branch

    const logo = document.createElement("img");
    logo.src = "/src/restralogo.png";
    logo.setAttribute("id", "logo");

    const breakDiv = document.createElement('div');
    breakDiv.setAttribute("id", "break");

    const menuCont = document.createElement('div');
    menuCont.setAttribute("id", "menuCont");

    navMenu.appendChild(logo);
    navMenu.appendChild(breakDiv);
    navMenu.appendChild(menuCont);

    //create the menuCont branch

    const locationButton = document.createElement("button");
    locationButton.setAttribute("id", "topButton1");
    locationButton.setAttribute("class", "buttonTop");
    locationButton.textContent = "HOME";

    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "topButton2");
    menuButton.setAttribute("class", "buttonTop");
    menuButton.textContent = "MENUS";

    const reserveButton = document.createElement("button");
    reserveButton.setAttribute("id", "activeButton");
    reserveButton.setAttribute("class", "buttonTop");
    reserveButton.textContent = "BOOKING";

    menuCont.appendChild(locationButton);
    menuCont.appendChild(menuButton);
    menuCont.appendChild(reserveButton);

    //create the contentMain branch

    const contentBreak1 = document.createElement('div');
    contentBreak1.setAttribute("id", "contentBreak1");

    const mainText = document.createElement('div');
    mainText.setAttribute("id", "mainText");
    mainText.textContent = "seasoned satisfaction";


    const lowerText = document.createElement('div');
    lowerText.setAttribute("id", "lowerText");
    lowerText.textContent = "our flavours will leave you simmering in joy";


    const contentBreak2 = document.createElement('div');
    contentBreak2.setAttribute("id", "contentBreak2");

    contentMain.appendChild(contentBreak1);
    contentMain.appendChild(mainText);
    contentMain.appendChild(lowerText);
    contentMain.appendChild(contentBreak2);

    //create the bottomBanner branch

    const socialImg = document.createElement("img");
    socialImg.src = "/src/social-icons.png";
    socialImg.setAttribute("id", "socialImg");

    const lowerLinks = document.createElement('div');
    lowerLinks.setAttribute("id", "lowerLinks");

    bottomBanner.appendChild(socialImg);
    bottomBanner.appendChild(lowerLinks);

    //create the lowerLinks branch

    const careers = document.createElement('div');
    careers.setAttribute("class", "link");
    careers.textContent = "CAREERS";

    const contact = document.createElement('div');
    contact.setAttribute("class", "link");
    contact.textContent = "CONTACT";

    const emailSignup = document.createElement('div');
    emailSignup.setAttribute("class", "link");
    emailSignup.textContent = "EMAIL SIGNUP";

    lowerLinks.appendChild(careers);
    lowerLinks.appendChild(contact);
    lowerLinks.appendChild(emailSignup);
}