import { gsap } from "gsap";
import { fadeFromBottom, animateTitle, fadeFrom } from "./utils";
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
		this.animateAbout();
		this.animateSkills();
		this.animateProjects();
		this.animateContact();
		// this.generateScrollTrigger();
	},
	animateHero() {
		let tl = gsap.timeline();

		tl.call(animateTitle, [".name", 0])
			.call(animateTitle, [".position", 0])
			.to(".scroll", { opacity: 1, duration: 1 }, 0.7)
			.to(".positionDetail", { opacity: 1, duration: 1 }, 0.7)
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
	animateAbout() {
		let tl = gsap.timeline({ ease: "power3.out" });
		tl.call(animateTitle, [".about h2", 0]).call(fadeFromBottom, [".about__body *", 0.5, 0.1]);
	},
	animateSkills() {
		let tl = gsap.timeline({ ease: "power3.out" });
		tl.call(animateTitle, [".skills h2", 0]).call(fadeFromBottom, [".skills__body *", 0.5, 0.03]);
	},
	animateProjects() {
		let tl = gsap.timeline({ ease: "power3.out" });
		tl.call(animateTitle, [".projects h2", 0])
			.call(fadeFrom, [".projects__header p", 0.5])
			.call(fadeFromBottom, [".projects__body *", 0.5, 0.03])
			.to(".division", { scaleX: 1, duration: 0.6, stagger: 0.15, opacity: 1 }, 0.75);
	},
	animateContact() {
		let tl = gsap.timeline({ ease: "power3.out" });
		tl.call(animateTitle, [".contact .title", 0])
			.call(fadeFromBottom, [".contact .text", 0.4])
			.from(".circle", { scale: 0, duration: 1 }, 0.65)
			.from(".icon", { opacity: 0, duration: 1 }, 1.5);
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

			.from(".about", {
				scrollTrigger: {
					trigger: ".about",
					start: "top 50%",
					once: true,
					onEnter: () => {
						this.animateAbout();
					},
				},
			})
			.from(".skills", {
				scrollTrigger: {
					trigger: ".skills",
					start: "top 50%",
					once: true,
					onEnter: () => {
						this.animateSkills();
					},
				},
			})
			.from(".projects", {
				scrollTrigger: {
					trigger: ".projects",
					start: "top 50%",
					once: true,
					onEnter: () => {
						this.animateProjects();
					},
				},
			})
			.from(".contact", {
				scrollTrigger: {
					trigger: ".contact",
					start: "top 70%",
					once: true,
					onEnter: () => {
						this.animateFooter();
					},
				},
			});
	},

	animateFooter() {
		const tl = gsap.timeline({ ease: "power3.out" });

		tl.set(
			".contact",
			{
				visibility: "visible",
			},
			0
		)
			.call(animateTitle, [".contact span", 0])
			.from(
				".contact p",
				{
					y: 10,
					opacity: 0,
					duration: 1,
				},
				0.5
			)
			.from(
				".contact a",
				{
					y: 10,
					opacity: 0,
					duration: 1,
				},
				0.7
			);
	},
};

animations.init();
