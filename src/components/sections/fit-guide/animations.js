import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    gsap.to(["#fit-guid-title", "#shape"], {
        opacity: 0
    })

    ScrollTrigger.create({
        trigger: "#fit-guid",
        start: "top 100%",
        toggleActions: "restart",
        once: true,
        onEnter: () => {
            gsap.fromTo(
                "#fit-guid-title",
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
                "#shape",
                { opacity: 0, scale: 0, duration: 0 },
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