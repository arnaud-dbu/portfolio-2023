// UPDATE: I was able to get this working again... Enjoy!

const cursor = document.querySelector(".cursor");
const cursorShadow = document.querySelector(".cursor-shadow");
const cursorinner = document.querySelector(".cursor2");
const buttons = document.querySelectorAll("a, button");

document.addEventListener("mousemove", function (e) {
	const x = e.clientX;
	const y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
	cursorShadow.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
	const x = e.clientX;
	const y = e.clientY;
	cursorinner.style.left = x + "px";
	cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
	cursor.classList.add("click");
	cursorShadow.classList.add("click");
	cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
	cursor.classList.remove("click");
	cursorShadow.classList.remove("click");
	cursorinner.classList.remove("cursorinnerhover");
});

buttons.forEach((item) => {
	item.addEventListener("mouseover", () => {
		cursor.classList.add("hidden");
		cursorShadow.classList.add("hidden");
	});
	item.addEventListener("mouseleave", () => {
		cursor.classList.remove("hidden");
		cursorShadow.classList.remove("hidden");
	});
});
