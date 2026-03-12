/* =========================
   PRELOADER
========================= */

window.addEventListener("load", function () {

const loader = document.getElementById("preloader");

if(loader){
setTimeout(() => {

loader.style.opacity = "0";
loader.style.transition = "0.5s";

setTimeout(() => {
loader.style.display = "none";
}, 500);

}, 2000);
}

});


/* =========================
   EMAILJS CONTACT FORM
========================= */

(function(){
emailjs.init("GQgCTraDhjYHcWTQL");
})();


document.addEventListener("DOMContentLoaded", function(){

const button = document.getElementById("sendBtn");
const popup = document.getElementById("successPopup");

if(button){

button.addEventListener("click", function(e){

e.preventDefault();

let firstName = document.querySelector('.row input:nth-child(1)').value;
let lastName = document.querySelector('.row input:nth-child(2)').value;
let email = document.querySelector('.contact-form input[type="email"]').value;
let message = document.querySelector('.contact-form textarea').value;

button.classList.add("loading");

let params = {
from_name: firstName + " " + lastName,
email: email,
message: message
};

emailjs.send("service_f5m7ecn","template_k6ttgh6",params)
.then(function(){

button.classList.remove("loading");

/* SHOW POPUP */

popup.classList.add("show");

setTimeout(()=>{
popup.classList.remove("show");
},3000);


/* CLEAR FORM */

document.querySelector('.row input:nth-child(1)').value="";
document.querySelector('.row input:nth-child(2)').value="";
document.querySelector('.contact-form input[type="email"]').value="";
document.querySelector('.contact-form textarea').value="";


},
function(){

alert("Failed to send message ❌");
button.classList.remove("loading");

});

});

}

});