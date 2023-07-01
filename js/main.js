const btn = document.querySelector("#start-btn");
const section = document.querySelector(".content");

const email = document.querySelector("#email-box");

const lbl = document.createElement("label");

const img = document.createElement("img") 


function printValue(e){
    e.preventDefault();
    section.appendChild(lbl);
    alert(email.value);
    lbl.innerText = "Welcome, " + email.value;
    lbl.style.color= "red";
    lbl.style.fontSize ="40px";
    img.style.width= "300px"
    img.src= "/images/IMG-20230617-WA0011.jpg"
    section.appendChild(img)
}

function onHover(){
    img.style.width ="500px"
}
function onHover(){
    img.style.width ="500px"
}
btn.addEventListener("click", printValue);
img.addEventListener("mouseover",onHover)


