import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#dream-title", "#card"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#dream-title",
        start: "top 100%",
        toggleActions: "restart",
        onEnter: () => {
            gsap.fromTo(
                ["#dream-title"],
                { opacity: 0, scale: 0, duration: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );
        },
    });

    ScrollTrigger.create({
        trigger: "#achievements-row",
        start: "top 100%",
        toggleActions: "restart",
        onEnter: () => {
            gsap.fromTo(
                ["#card"],
                { opacity: 0, scale: 0, duration: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: .15,
                    ease: "back.out(0.6)",
                }
            );
        },
    });
};