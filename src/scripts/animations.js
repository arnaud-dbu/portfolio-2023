import { gsap } from "gsap";
import { animateText } from "./utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animations = {
	init() {
		this.cacheElements();
		this.generateUI();
	},
	cacheElements() {},
	generateUI() {
		this.animateHero();
		this.generateScrollTrigger();
	},
	animateHero() {
		const heroTimeline = gsap.timeline();

		heroTimeline
			.call(animateText, [".position", 0])
			.call(animateText, [".positionDetail", 0.025])
			.call(animateText, [".name", 0.1])
			.set(
				".img-container",
				{
					visibility: "visible",
				},
				0.2
			)
			.fromTo(
				".img-container",
				{
					clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
					webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
				},
				{
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
					duration: 1,
					ease: "power3.out",
				}
			)
			.from(
				".img",
				{
					scale: 1.4,
					ease: "power3.out",
					duration: 2,
				},
				0
			)
			.from(
				".scroll",
				{
					opacity: 0,
					duration: 1,
					ease: "power3.out",
				},
				1
			);
	},
	generateScrollTrigger() {
		let mainTimeline = gsap.timeline();
		mainTimeline.from(".about", {
			scrollTrigger: {
				trigger: ".about",
				start: "top 50%",
				onEnter: () => {
					this.animateAbout();
				},
			},
		});
	},
	animateAbout() {
		const aboutTimeline = gsap.timeline({ ease: "power3.out" });

		aboutTimeline
			.call(animateText, [".about h2", 0])
			.from(
				".about p",
				{
					y: 30,
					opacity: 0,
					duration: 1,
				},
				0.5
			)
			.from(
				".about a",
				{
					y: 100,
					opacity: 0,
					duration: 2,
				},
				0.7
			);
	},
};

animations.init();
