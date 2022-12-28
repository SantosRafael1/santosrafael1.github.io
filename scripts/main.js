const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/fox.jpg") {
        myImage.setAttribute("src", "images/fox2.jpg");
    } else {
        myImage.setAttribute("src", "images/fox.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello, ${myName}!!`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}!!`;
}

myButton.onclick = function () {
    setUserName();
}