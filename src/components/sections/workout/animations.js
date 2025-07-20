import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#workout-title", "#workout-btn", "#workout-image"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#workout-section",
        start: "top 100%",
        toggleActions: "restart",
        once: true,
        onEnter: () => {
            gsap.fromTo(
                ["#workout-title", "#workout-btn"],
                { opacity: 0, x: "-50vw", duration: 0 },
                {
                    delay: .3,
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );

            gsap.fromTo(
                ["#workout-image"],
                { opacity: 0, x: "50vw", duration: 0 },
                {
                    delay: .3,
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );
        },
    });
};