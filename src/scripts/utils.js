import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export const animateText = (selector, staggerDelay) => {
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
				stagger: 0.04,
				duration: 1.5,
				ease: "power4.out",
			}
		)
		.delay(staggerDelay);
};
