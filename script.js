
let navToggleList = document.querySelector(".nav-toggle__list");
let navToggleListColors = document.querySelectorAll(".nav-toggle__list__color");
let navToggleButton = document.querySelector(".nav-toggle__button");
let body = document.querySelector("body");

navToggleButton.addEventListener("mouseover", function () {
	navToggleList.classList.remove('hidden');
});

navToggleButton.addEventListener("click", function () {
	navToggleList.classList.toggle('hidden');
});

let buttons = document.querySelectorAll(".nav-toggle__list__color");
let showText = true;

buttons.forEach(function (button) {
	button.addEventListener("click", function (e) {
		let color = button.querySelector("span").innerHTML;
		body.className = "";
		body.classList.toggle(`background--${color.toLowerCase()}`);
		navToggleList.classList.toggle('hidden');
		buttons.forEach(function (button) {
			button.classList.remove('active')
		})
		button.classList.add('active')
		if (showText) {
			let text = document.querySelector(".color__text");
			console.log("color", color.toLowerCase())
			if (color.toLowerCase() === "reset") {
				text.innerHTML = "";
			} else {
				text.innerHTML = `${color}`;
			};
		}
	})
});

document.addEventListener('keydown', function (event) {
	switch (event.key) {
		case '1':
			body.className = "";
			body.classList.toggle(`background--red`);
			break;
		case 2:
			body.className = "";
			body.classList.toggle(`background--orange`);
			break;
		case 3:
			body.className = "";
			body.classList.toggle(`background--yellow`);
			break;
		case 4:
			body.className = "";
			body.classList.toggle(`background--green`);
			break;
		case 5:
			body.className = "";
			body.classList.toggle(`background--blue`);
			break;
		case 6:
			body.className = "";
			body.classList.toggle(`background--purple`);
			break;
		case 7:
			body.className = "";
			body.classList.toggle(`background--reset`);
			break
	}
});