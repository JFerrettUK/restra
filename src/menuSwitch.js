export default function menuSwitch() {
    const topButton1 = document.getElementById("topButton1");
    const topButton2 = document.getElementById("topButton2");
    const topButton3 = document.getElementById("topButton3");

    function activate1 () {
        topButton1.style.color = "white";
        topButton1.style.background = "#14213d";

        topButton2.style.color = "#14213d";
        topButton2.style.background = "transparent";

        topButton3.style.color = "#14213d";
        topButton3.style.background = "transparent";
    }

    function activate2 () {
        topButton2.style.color = "white";
        topButton2.style.background = "#14213d";

        topButton1.style.color = "#14213d";
        topButton1.style.background = "transparent";

        topButton3.style.color = "#14213d";
        topButton3.style.background = "transparent";
    }

    function activate3 () {
        topButton3.style.color = "white";
        topButton3.style.background = "#14213d";

        topButton1.style.color = "#14213d";
        topButton1.style.background = "transparent";

        topButton2.style.color = "#14213d";
        topButton2.style.background = "transparent";
    }

    topButton1.addEventListener('click', activate1);
    topButton2.addEventListener('click', activate2);
    topButton3.addEventListener('click', activate3);

}
