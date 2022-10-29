export default function makePage1() {
    //create the contentMain branch

    const contentMain = document.createElement('div');
    contentMain.setAttribute("id", "contentMain");

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

    contentHolder.appendChild(contentMain);
    contentMain.appendChild(contentBreak1);
    contentMain.appendChild(mainText);
    contentMain.appendChild(lowerText);
    contentMain.appendChild(contentBreak2);

    const topButton1 = document.getElementById("topButton1");
    const topButton2 = document.getElementById("topButton2");
    const topButton3 = document.getElementById("topButton3");

    topButton1.style.color = "white";
    topButton1.style.background = "#14213d";

    topButton2.style.color = "#14213d";
    topButton2.style.background = "transparent";

    topButton3.style.color = "#14213d";
    topButton3.style.background = "transparent";

}