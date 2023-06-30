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
	animateAbout() {
		const aboutTimeline = gsap.timeline({ ease: "power3.out" });

		aboutTimeline
			.set(
				".about",
				{
					visibility: "visible",
				},
				0
			)
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
	animateSkills() {
		const tl = gsap.timeline({ ease: "power3.out" });

		tl.set(
			".skills",
			{
				visibility: "visible",
			},
			0
		)
			.call(animateText, [".skills h2", 0])
			.from(
				".skill",
				{
					y: 30,
					opacity: 0,
					duration: 1,
					stagger: 0.2,
				},
				0.5
			)
			.from(
				".skill *",
				{
					y: 30,
					opacity: 0,
					duration: 1,
					stagger: 0.05,
				},
				0
			)
			.to(
				".division",
				{
					height: "100%",
					duration: 0.5,
				},
				0.5
			);
	},
	animateProjects() {
		const tl = gsap.timeline({ ease: "power3.out" });

		tl.set(
			".projects",
			{
				visibility: "visible",
			},
			0
		)
			.call(animateText, [".projects__header h2", 0])
			.from(
				".projects__header p",
				{
					y: 10,
					opacity: 0,
					duration: 1,
				},
				0.5
			)
			.to(
				".projects__header .division-line",
				{
					scaleX: 1,
					duration: 0.5,
				},
				0.5
			)
			.from(
				".project",
				{
					y: 20,
					opacity: 0,
					duration: 1,
					stagger: 0.3,
				},
				1
			)
			.to(
				".projects__header .division-line",
				{
					scaleX: 1,
					duration: 0.5,
				},
				0.5
			);
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
			.call(animateText, [".contact span", 0])
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
