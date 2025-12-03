/* =========================================
   组件 4: ParallaxTextSection (视差文字条)
   效果：随着滚动，两行文字向相反方向移动
   ========================================= */
import {LegacyRef, useRef} from "react";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ParallaxTextSection = () => {
    const container = useRef<HTMLDivElement>();

    useGSAP(() => {
        gsap.to(".text-row-1", {
            xPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                scrub: 1,
            }
        });
        gsap.to(".text-row-2", {
            xPercent: -100,
            ease: "none",
            scrollTrigger: {
                trigger: container.current as HTMLDivElement,
                scrub: 1,
            }
        });
    }, { scope: container });

    return (
        <div ref={container as LegacyRef<HTMLDivElement>} className="py-32  z-10 relative overflow-hidden flex flex-col justify-center">
            <div className="text-row-1 text-[10vw] whitespace-nowrap text-white font-bold opacity-20 select-none">
                DESIGN • DEVELOPMENT • STORYTELLING • DESIGN •
            </div>
            <div className="text-row-2 text-[10vw] whitespace-nowrap text-purple-500 font-bold opacity-30 select-none -mt-10">
                TYPESCRIPT • REACT • JAVASCRIPT • CREATIVE • TAILWINDCSS • REACT •
            </div>
        </div>
    );
};

export default ParallaxTextSection;