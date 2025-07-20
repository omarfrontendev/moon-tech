import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#tracking-title", "#tracking-image"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#tracking-section",
        start: "top 100%",
        toggleActions: "restart",
        once: true,
        onEnter: () => {
            gsap.fromTo(
                ["#tracking-title"],
                { opacity: 0, scale: 0, duration: 0 },
                {
                    delay: .3,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );

            gsap.fromTo(
                ["#tracking-image"],
                { opacity: 0, y: "50vw", duration: 0 },
                {
                    delay: .3,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );
        },
    });
};