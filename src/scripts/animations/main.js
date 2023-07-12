import { gsap } from "gsap";
import { animateTitle } from "../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animations = {
	init() {
		this.generateUI();
	},
	generateUI() {
		this.animateContact();
		this.generateScrollTrigger();
	},
	animateContact() {
		let tl = gsap.timeline({ ease: "power3.out", paused: true });
		tl.set(".contact", { visibility: "visible" })
			.call(animateTitle, [".contact .title", 0])
			.fromTo(
				".contact .text",
				{
					y: 30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					stagger: 0.03,
				},
				0.4
			)
			.from(".circle", { scale: 0, duration: 1 }, 0.65)
			.from(".icon", { opacity: 0, duration: 1 }, 1.5);

		ScrollTrigger.create({
			trigger: ".contact",
			start: "25% center",
			onEnter: () => {
				tl.play();
			},
		});
	},
	generateScrollTrigger() {
		let tl = gsap.timeline({ ease: "power3.out" });
		tl.to(".hero-attribute", {
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".hero-attribute",
				scrub: true,
				start: "top top",
			},
		})
			.to(".bg-body", {
				backgroundColor: "black",
				scrollTrigger: {
					trigger: ".contact",
					scrub: true,
					start: "top 50%",
					end: "50% 50%",
				},
			})
			.to(".circle", {
				borderColor: "white",
				scrollTrigger: {
					trigger: ".contact",
					scrub: true,
					start: "top 50%",
					end: "50% 50%",
				},
			})
			.to(".icon", {
				fill: "white",
				scrollTrigger: {
					trigger: ".contact",
					scrub: true,
					start: "top 50%",
					end: "50% 50%",
				},
			});
	},
};

animations.init();
