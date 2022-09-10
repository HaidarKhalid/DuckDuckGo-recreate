
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
let slideNav = document.getElementById("slide-nav-bar-content")
function openSideBar() {
	slideNav.classList.toggle("active")
}

function closeSideBar() {
	slideNav.classList.toggle("active")
}



let contactNavBar = document.getElementById("contact-nav-bar-content")

function openContactBar() {
	 contactNavBar.classList.toggle("active")
}