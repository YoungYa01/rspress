import gsap from "gsap";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import ParallaxCard from "../ParallaxCard";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HorizontalScroll = () => {
    const wrapperRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.h-item');
        // 横向滚动逻辑
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: wrapperRef.current,
                pin: true,
                scrub: 1, // 配合 Lenis 会非常丝滑
                snap: 1 / (sections.length - 1),
                end: "+=3000" // 增加滚动距离，让速度变慢，更有质感
            }
        });
    }, { scope: wrapperRef });

    const works = [
        { title: "NEON VERSE", cat: "WEBGL / THREE.JS", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000" },
        { title: "SILENT ECHO", cat: "BRANDING", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2000" },
        { title: "VOID WALKER", cat: "IMMERSIVE UI", img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2000" },
        { title: "AERO FLUX", cat: "CREATIVE DEV", img: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&q=80&w=2000" },
    ];

    return (
        <div ref={wrapperRef} className="h-screen overflow-hidden relative z-10">
            <div className="absolute top-12 left-12 flex items-center gap-4 z-20 mix-blend-difference text-white/50">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm tracking-widest uppercase">Selected Works</span>
            </div>

            <div ref={containerRef} className="flex h-full w-[400%]">
                {works.map((item, i) => (
                    <ParallaxCard key={i} item={item} index={i} />
                ))}
            </div>
        </div>
    );
};

export default HorizontalScroll;