export default function makePage3() {
    //create the contentBook branch

    const contentBook = document.createElement('div');
    contentBook.setAttribute("id", "contentBook");

    const centreBox2 = document.createElement('div');
    centreBox2.setAttribute("id", "centreBox2");
    const menuText = document.createElement('div');
    menuText.setAttribute("id", "menuText");
    menuText.textContent = "Book a Table";

    const br = document.createElement('br');

    const starter2 = document.createElement('div');
    starter2.setAttribute("id", "starter2");
    starter2.textContent = 'To book a table,'

    const main = document.createElement('div');
    main.setAttribute("id", "main");
    main.textContent = 'call today on 07724 554333.'

    const main2 = document.createElement('div');
    main2.setAttribute("id", "main2");
    main2.textContent = "Don't miss out."


    contentHolder.appendChild(contentBook);
    contentBook.appendChild(centreBox2);
    centreBox2.appendChild(menuText);
    centreBox2.appendChild(br);
    centreBox2.appendChild(starter2);
    centreBox2.appendChild(main);
    centreBox2.appendChild(main2);


    const topButton1 = document.getElementById("topButton1");
    const topButton2 = document.getElementById("topButton2");
    const topButton3 = document.getElementById("topButton3");

    topButton3.style.color = "white";
    topButton3.style.background = "#14213d";

    topButton1.style.color = "#14213d";
    topButton1.style.background = "transparent";

    topButton2.style.color = "#14213d";
    topButton2.style.background = "transparent";


}
