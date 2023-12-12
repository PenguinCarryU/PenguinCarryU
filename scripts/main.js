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


var myImages = document.querySelectorAll("img");

myImages.forEach(function(myImage) 
{
  myImage.onclick = function() 
  {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/character/wraith/隱鬼.png") {
      myImage.setAttribute("src", "images/character/wraith/Dead-By-Daylight-Wraith-1.png");
    } else if (mySrc === "images/character/wraith/Dead-By-Daylight-Wraith-1.png") {
      myImage.setAttribute("src", "images/character/wraith/隱鬼.png");      
    } 

    else if (mySrc === "images/character/doctor/醫生.png") {
      myImage.setAttribute("src", "images/character/doctor/doctor.jpg");
    } else if (mySrc === "images/character/doctor/doctor.jpg") {
      myImage.setAttribute("src", "images/character/doctor/醫生.png");
    }

    else if (mySrc === "images/character/oni/鬼武士.png") {
      myImage.setAttribute("src", "images/character/oni/oni.jpg");
    } else if (mySrc === "images/character/oni/oni.jpg") {
      myImage.setAttribute("src", "images/character/oni/鬼武士.png");
    }

    else if (mySrc === "images/character/blight/枯魔.png") {
      myImage.setAttribute("src", "images/character/blight/blight.jpg");
    } else if (mySrc === "images/character/blight/blight.jpg") {
      myImage.setAttribute("src", "images/character/blight/枯魔.png");
    }

    else if (mySrc === "images/character/bili/比利.png") {
      myImage.setAttribute("src", "images/character/bili/bili.jpg");
    } else if (mySrc === "images/character/bili/bili.jpg") {
      myImage.setAttribute("src", "images/character/bili/比利.png");
    }

    else if (mySrc === "images/character/trapper/夾子.png") {
      myImage.setAttribute("src", "images/character/trapper/trapper備用.jpg");
    } else if (mySrc === "images/character/trapper/trapper備用.jpg") {
      myImage.setAttribute("src", "images/character/trapper/夾子.png");
    }

    else if (mySrc === "images/character/bubba/bubba.png") {
      myImage.setAttribute("src", "images/character/bubba/bubba.jpg");
    } else if (mySrc === "images/character/bubba/bubba.jpg") {
      myImage.setAttribute("src", "images/character/bubba/bubba.png");
    }

    else if (mySrc === "images/character/artist/artist.png") {
      myImage.setAttribute("src", "images/character/artist/artist.jpg");
    } else if (mySrc === "images/character/artist/artist.jpg") {
      myImage.setAttribute("src", "images/character/artist/artist.png");
    }
  };
});

window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
    const button = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // 当滚动位置大于20时显示按钮
    } else {
        button.style.display = "none"; // 否则隐藏按钮
    }
}

// 点击按钮时返回顶部
function scrollToTop() {
    document.body.scrollTop = 0; // 兼容旧版本浏览器
    document.documentElement.scrollTop = 0; // 现代浏览器
}




var myButton = document.getElementById("user");

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
        else if (myName === "小蝶") {
            localStorage.setItem("name", myName);
            localStorage.setItem("needInputName", "false"); // 已輸入過名字，改為false
            myHeading.innerHTML = "是小蝶來吶~";
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


window.addEventListener('load', function() {
    var audio = document.getElementById("background");
    if (audio) {
      audio.volume = 0.1;
    }
  });

window.addEventListener('load', function() {
    var audio = document.getElementById("Wraith_Breathing");
    if (audio) {
      audio.volume = 0.1;
    }
  });
  window.addEventListener('load', function() {
    var audio = document.getElementById("doctor-laugh");
    if (audio) {
      audio.volume = 0.2;
    }
  });
  window.addEventListener('load', function() {
    var audio = document.getElementById("Oni_Breathing");
    if (audio) {
      audio.volume = 0.2;
    }
  });
  window.addEventListener('load', function() {
    var audio = document.getElementById("oni_scream");
    if (audio) {
      audio.volume = 0.2;
    }
  });
  