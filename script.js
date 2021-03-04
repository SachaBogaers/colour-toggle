
let navToggleList = document.querySelector(".nav-toggle__list");
let navToggleListColors = document.querySelectorAll(".nav-toggle__list__color");
let navToggleButton = document.querySelector(".nav-toggle__button");
let body = document.querySelector("body");


navToggleButton.addEventListener("click", function () {
	navToggleList.classList.toggle('hidden');
});

let buttons = document.querySelectorAll(".nav-toggle__list__color");

buttons.forEach(function (button) {
	button.addEventListener("click", function (e) {
		let color = button.querySelector("span").innerHTML.toLowerCase();
		body.className = "";
		body.classList.toggle(`background--${color}`);
	})
})
