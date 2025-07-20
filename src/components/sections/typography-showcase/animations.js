import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#typography-title", "#typography-btns", "#headline-title", "#headline-btn", "#hubot-sans-box", "#typography-image"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#typography-title",
        start: "top 100%",
        toggleActions: "restart",
        once: true,
        onEnter: () => {
            gsap.fromTo(
                ["#typography-title", "#typography-btns"],
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
        trigger: "#headline-box",
        start: "top 100%",
        toggleActions: "restart",
        once: true,
        onEnter: () => {

            gsap.fromTo(
                ["#headline-title", "#headline-btn", "#hubot-sans-box"],
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
                ["#typography-image"],
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