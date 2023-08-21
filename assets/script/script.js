const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	
});

document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);

//COOKIES 

let cookies = document.querySelector(".cookies");

let btnSuccess = document.querySelector(".btn-success");

btnSuccess.addEventListener("click", () => {
	console.log("click");
	cookies.style.visibility = "hidden";
})
