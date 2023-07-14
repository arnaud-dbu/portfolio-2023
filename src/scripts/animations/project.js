import { gsap } from "gsap";
import { animateTitle } from "../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animations = {
	init() {
		this.generateUI();
	},
	generateUI() {
		this.animateProjectTop();
		this.animateProjectImages();
		this.generateScrollToTopButton();
	},
	animateProjectTop() {
		let tl = gsap.timeline({ ease: "power3.out" });
		gsap.set("project__details p", { opacity: 0 });
		gsap.set("project__details a", { opacity: 1 });

		tl.set(".project__top", { visibility: "visible" }).call(animateTitle, [".title", 0]).fromTo(
			".project__top *",
			{
				y: 20,
			},
			{
				y: 0,
				duration: 0.4,
				stagger: 0.03,
			},
			0
		);
	},
	animateProjectImages() {
		const images = document.querySelectorAll(".project__images img");

		images.forEach((image) => {
			let tl = gsap.timeline({ ease: "power3.out", paused: true });

			tl.set(image, { visibility: "visible" }).from(image, {
				y: 50,
				opacity: 0,
				duration: 1,
			});

			ScrollTrigger.create({
				trigger: image,
				start: "top 85%",
				onEnter: () => {
					tl.play();
				},
			});
		});
	},
	generateScrollToTopButton() {
		const button = document.querySelector(".scrollToTop");

		button.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	},
};

animations.init();
