console.log("js working");
// Highlight active menu on scroll (optional – professional touch)
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
function toggleDark() {
    document.body.classList.toggle("dark");
}
<script>

/* PRELOADER HIDE */
window.addEventListener("load",function(){
document.getElementById("preloader").style.display="none"
});

/* DARK MODE */
function toggleDark(){
document.body.classList.toggle("dark")
}

</script>
// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");

if(toggle){
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggle.textContent="☀️";
    }else{
        toggle.textContent="🌙";
    }
});
}

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});
}
function openImage(img){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src = img.src;
}

function filterImages(category){
    const images = document.querySelectorAll(".gallery-img");

    images.forEach(img => {
        if(category === "all"){
            img.style.display = "";
        }
        else if(img.classList.contains(category)){
            img.style.display = "";
        }
        else{
            img.style.display = "none";
        }
    });
}

function openImage(img){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}
function openModal(name){
document.getElementById("imgModal").style.display="block";
document.getElementById("modalImg").src="images/" + name + ".jpg";
}
function searchFaculty() {

let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let name = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(name.includes(input)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

function filterType(type){

let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

if(type=="all"){
cards[i].style.display="block";
}
else if(cards[i].classList.contains(type)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

function filterDept(){

let dept=document.getElementById("deptFilter").value;
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

if(dept=="all"){
cards[i].style.display="block";
}
else if(cards[i].classList.contains(dept)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

function showImage(src){
document.getElementById("popup").style.display="flex";
document.getElementById("popupImg").src=src;
}

function closeImage(){
document.getElementById("popup").style.display="none";
}