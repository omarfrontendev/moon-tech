import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#pelette-title", "#pelette-card"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#pelette-section",
        start: "top 100%",
        toggleActions: "restart",
        onEnter: () => {
            gsap.fromTo(
                ["#pelette-title"],
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
                ["#pelette-card"],
                { scale: 0, duration: 0 },
                {
                    delay: .3,
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