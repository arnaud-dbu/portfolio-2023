import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export const animateTitle = (selector, staggerDelay) => {
	const text = new SplitText(selector, { types: "chars" });
	const chars = text.chars;

	gsap
		.fromTo(
			chars,
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.03,
				duration: 1,
				ease: "power4.out",
			}
		)
		.delay(staggerDelay);
};
