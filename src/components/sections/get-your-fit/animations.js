import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#get-fit-text", "#scenarios-btn"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#get-your-fit-section",
        start: "top 100%",
        toggleActions: "restart",
        onEnter: () => {
            gsap.fromTo(
                "#get-fit-text",
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
                "#git-fit-image",
                { opacity: 0, y: "50vw", duration: 0 },
                {
                    delay: .3,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(0.6)",
                }
            );
            gsap.fromTo(
                "#scenarios-btn",
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