import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = () => {

    const tl = gsap.timeline({
        defaults: { duration: 1, opacity: 0, ease: 'back.out(0.6)' },
    });

    tl.to(".tag", {
        duration: 0,
    });

    tl.from(
        "#hero-section",
        // { width: "0", height: "0", borderRadius: 0 },
        { scale: 0, borderRadius: 0 },
        "<");

    tl.from(["#logo", "#header-btn"], {
        y: "-50vw",
    });

    tl.from(["#hero-text", "#hero-title"], {
        x: "-50vw",
    }, "<");

    tl.from(["#hero-image"], {
        x: "50vw",
    }, "<");

    tl.from(["#title-icon"], {
        scale: 0,
        rotate: 180,
        duration: 0.6,
        ease: 'back.out(1.8)'
    });

    // TAGS
    ScrollTrigger.create({
        trigger: "#tags-list",
        start: "top 80%",
        toggleActions: "restart",
        onEnter: () => {
            gsap.fromTo(
                ".tag",
                { opacity: 0, y: 180 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "back.out(0.6)",
                }
            );
        },
        onLeaveBack: () => {
            gsap.to(
                ".tag",
                { opacity: 0, y: 180 },
            );
        },
    });
};