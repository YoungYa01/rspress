/* =========================================
   组件: 固定背景视差 (过渡区域)
   ========================================= */
import gsap from 'gsap';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PinnedSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useGSAP(() => {
        // 简单的遮罩放大效果
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
            }
        });

        tl.to(imgRef.current, {
            scale: 1, // 图片从小变大填充屏幕
            borderRadius: 0,
            ease: "none"
        })
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                ease: "power2.out"
            }, "-=0.5");

    });

    return (
        <section ref={sectionRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden z-10 py-20 px-4">
            {/* 缩放的图片容器 */}
            <div ref={imgRef} className="w-[80%] h-[60%] bg-cover bg-center rounded-[3rem] overflow-hidden scale-75 relative z-0"
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000)' }}>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* 居中文字 */}
            <div ref={textRef} className="absolute z-10 text-center opacity-0 translate-y-20">
                <h2 className="text-6xl md:text-8xl font-black text-white mb-6">NEXT LEVEL</h2>
                <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
                    We craft digital experiences that defy boundaries and expectations.
                </p>
            </div>
        </section>
    );
};

export default PinnedSection;