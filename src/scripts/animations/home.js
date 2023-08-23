import { gsap } from "gsap";
import { animateTitle } from "../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animations = {
	init() {
		this.generateUI();
	},
	generateUI() {
		this.animateHero();
		this.animateAbout();
		this.animateSkills();
		this.animateProjects();
	},
	animateHero() {
		let tl = gsap.timeline({ ease: "power3.out" });

		tl.set(".hero", { visibility: "visible" })
			.call(animateTitle, [".name", 0])
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
			)
			.from(".scroll svg", { y: -7.5, duration: 0.75, repeat: -1, yoyo: true }, 1);
	},
	animateAbout() {
		let tl = gsap.timeline({ ease: "power3.out", paused: true });
		gsap.set("about__body p, about__body a", { opacity: 0 });

		tl.set(".about", { visibility: "visible" }).call(animateTitle, [".about h2", 0]).fromTo(
			".about__body",
			{
				y: 30,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.2,
			},
			0.5
		);

		ScrollTrigger.create({
			trigger: ".about",
			start: "top 90%",
			onEnter: () => {
				tl.play();
			},
		});
	},
	animateSkills() {
		let tl = gsap.timeline({ ease: "power3.out", paused: true });
		gsap.set("skills__body p", { opacity: 0 });

		tl.set(".skills", { visibility: "visible" }).call(animateTitle, [".skills h2", 0]).fromTo(
			".skills__body *",
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
			0.5
		);

		ScrollTrigger.create({
			trigger: ".skills",
			start: "top 90%",
			onEnter: () => {
				tl.play();
			},
		});
	},
	animateProjects() {
		let tl = gsap.timeline({ ease: "power3.out", paused: true });
		tl.set(".projects", { visibility: "visible" })
			.call(animateTitle, [".projects h2", 0])
			.from(
				".projects__header p",
				{
					opacity: 0,
					duration: 1,
					ease: "power3.out",
				},
				0.5
			)
			.fromTo(
				".projects__body *",
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
				0.5
			)
			.to(".division", { scaleX: 1, duration: 0.6, stagger: 0.15, opacity: 1 }, 0.75);

		ScrollTrigger.create({
			trigger: ".projects",
			start: "top 90%",
			onEnter: () => {
				tl.play();
			},
		});
	},
};

animations.init();
