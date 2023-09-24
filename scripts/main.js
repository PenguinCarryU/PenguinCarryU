let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!"; /* 用以改變h1的內容*/
myHeading.style.color = "red";          // 修改 <h1> 元素的顏色

let allLiElements = document.querySelectorAll("a");
for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].style.color = "white";
}
let allLiElements1 = document.querySelectorAll("p");
for (let i = 0; i < allLiElements.length; i++) {
    allLiElements1[i].style.color = "#91e3dc";
}
//alert("Warning！");  //彈出式視窗
/* 
document.querySelector("html").onclick = function () {  
    alert("不要點我!");		//視窗被點擊時 且可重複觸發
    };                          
*/


/*
myImage.onclick = function () {             //當圖片被點擊時
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/RiotX_ChampionList_ksante.jpg") {       //如果是卡桑帝的圖片
    myImage.setAttribute("src", "images/RiotX_ChampionList_bard.jpg");      //更改為巴德
  } else {
    myImage.setAttribute("src", "images/RiotX_ChampionList_ksante.jpg");    //變回卡桑帝
  }
};
*/

var myButton = document.querySelector("button");

function setUserName() {
    let needInputName = localStorage.getItem("needInputName");
    if (needInputName === "true") {
        let myName = prompt("請輸入您的名稱");
        if (!myName || myName === null) {
            setUserName();
        } else if (myName === "陳文凱") {
            localStorage.setItem("name", myName);
            localStorage.setItem("needInputName", "false"); // 已輸入過名字，改為false
            myHeading.innerHTML = "管理員使用中";
        } 
        else {
            localStorage.setItem("name", myName);
            localStorage.setItem("needInputName", "false"); // 已輸入過名字，改為false
            myHeading.innerHTML = "weclome to DeadByDaylight " + myName;
        }
        
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.innerHTML = "weclome to DeadByDaylight " + storedName;
    }
}

if (!localStorage.getItem("name")) {
    localStorage.setItem("needInputName", "true"); // 需要輸入名字便設為true
    setUserName();
} else {
    setUserName(); // 如果已經輸入過 提取前一次輸入的名字
}

myButton.onclick = function () {
    localStorage.setItem("needInputName", "true"); // 點擊按鈕後即可換使用者名稱
    setUserName();
};



