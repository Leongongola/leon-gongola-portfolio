// function for the hambuger menu to rotate
function myFunction() {
    var x = document.querySelector(".menu-container");
    x.classList.toggle("change");
  }
// function for drop down menu to display block if its display is none or vise versa
function dropmenu(){
    var x = document.getElementById('menu-dropdown');
    if (x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}
// adding eventlistener for the click to show the drop down menu
const navmenu = document.getElementById("menu-dropdown");
navmenu.addEventListener("click", () => {
    navmenu.classList.toggle("active");
});


