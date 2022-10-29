import makePage1 from './firstPageLoad';
import makePage2 from './secondPageLoad';
import makePage3 from './thirdPageLoad';
import refreshPage from './refreshPage';


export default function menuSwitch() {
    const topButton1 = document.getElementById("topButton1");
    const topButton2 = document.getElementById("topButton2");
    const topButton3 = document.getElementById("topButton3");

    function activate1 () {
        refreshPage();
        makePage1();
    }

    function activate2 () {
        refreshPage();
        makePage2();
    }

    function activate3 () {
        refreshPage();
        makePage3();
    }

    topButton1.addEventListener('click', activate1);
    topButton2.addEventListener('click', activate2);
    topButton3.addEventListener('click', activate3);

}
