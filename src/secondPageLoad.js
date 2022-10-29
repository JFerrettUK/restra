export default function makePage2() {
    //create the contentMenu branch

    const contentMenu = document.createElement('div');
    contentMenu.setAttribute("id", "contentMenu");

    const centreBox = document.createElement('div');
    centreBox.setAttribute("id", "centreBox");

    const menuText = document.createElement('div');
    menuText.setAttribute("id", "menuText");
    menuText.textContent = "Taste the Best";

    const br = document.createElement('br');

    const starter = document.createElement('div');
    starter.setAttribute("id", "starter");
    starter.textContent = 'Grilled Shrimp'

    const starter2 = document.createElement('div');
    starter2.setAttribute("id", "starter2");
    starter2.textContent = 'Six shrimp in a chipotle marinade'

    const starter3 = document.createElement('div');
    starter3.setAttribute("id", "starter3");
    starter3.textContent = 'served with chipotle aioli'

    const starterPrice = document.createElement('div');
    starterPrice.setAttribute("id", "starterPrice");
    starterPrice.textContent = '£8.50'

    const br2 = document.createElement('br');

    const main = document.createElement('div');
    main.setAttribute("id", "main");
    main.textContent = 'Greek Pizza'

    const main2 = document.createElement('div');
    main2.setAttribute("id", "main2");
    main2.textContent = 'Olive oil, kalamata olives, red onions,'

    const main3 = document.createElement('div');
    main3.setAttribute("id", "main3");
    main3.textContent = 'mozzarella cheese, and feta cheese,'

    const main4 = document.createElement('div');
    main4.setAttribute("id", "main4");
    main4.textContent = 'and a garlic puree'

    const mainPrice = document.createElement('div');
    mainPrice.setAttribute("id", "mainPrice");
    mainPrice.textContent = '£15'

    const br3 = document.createElement('br');

    const dessert = document.createElement('div');
    dessert.setAttribute("id", "dessert");
    dessert.textContent = 'Sticky Toffee Pudding'

    const dessert2 = document.createElement('div');
    dessert2.setAttribute("id", "dessert2");
    dessert2.textContent = 'Dark, sticky and treacley,'

    const dessert3 = document.createElement('div');
    dessert3.setAttribute("id", "dessert3");
    dessert3.textContent = 'smothered in toffee sauce'

    const dessert4 = document.createElement('div');
    dessert4.setAttribute("id", "dessert4");
    dessert4.textContent = 'and extra cream'

    const dessertPrice = document.createElement('div');
    dessertPrice.setAttribute("id", "dessertPrice");
    dessertPrice.textContent = '£6.50'

    contentHolder.appendChild(contentMenu);
    contentMenu.appendChild(centreBox);
    centreBox.appendChild(menuText);
    centreBox.appendChild(br);
    centreBox.appendChild(starter);
    centreBox.appendChild(starter2);
    centreBox.appendChild(starter3);
    centreBox.appendChild(starterPrice);
    centreBox.appendChild(br2);
    centreBox.appendChild(main);
    centreBox.appendChild(main2);
    centreBox.appendChild(main3);
    centreBox.appendChild(main4);
    centreBox.appendChild(mainPrice);
    centreBox.appendChild(br3);
    centreBox.appendChild(dessert);
    centreBox.appendChild(dessert2);
    centreBox.appendChild(dessert3);
    centreBox.appendChild(dessert4);
    centreBox.appendChild(dessertPrice);

    const topButton1 = document.getElementById("topButton1");
    const topButton2 = document.getElementById("topButton2");
    const topButton3 = document.getElementById("topButton3");

    topButton2.style.color = "white";
    topButton2.style.background = "#14213d";

    topButton1.style.color = "#14213d";
    topButton1.style.background = "transparent";

    topButton3.style.color = "#14213d";
    topButton3.style.background = "transparent";

}