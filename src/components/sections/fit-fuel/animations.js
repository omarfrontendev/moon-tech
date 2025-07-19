import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#fit-guide-text", "#fit-guide-image"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#fit-guide-section",
        start: "top 100%",
        toggleActions: "restart",
        onEnter: () => {
            gsap.fromTo(
                ["#fit-guide-text"],
                { opacity: 0, x: "50vw", duration: 0 },
                {
                    delay: .3,
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );
            gsap.fromTo(
                ["#fit-guide-image"],
                { opacity: 0, x: "-50vw", duration: 0 },
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