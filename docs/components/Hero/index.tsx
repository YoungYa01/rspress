/* =========================================
   组件: Hero (遮罩揭示动画)
   ========================================= */
import gsap from 'gsap';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import MagneticButton from "../MagneticButton";
import {ArrowRight} from "lucide-react";

gsap.registerPlugin(useGSAP);

type Props = {
    lines: string[];
}

const Hero = ({lines}: Props) => {
    const container = useRef(null);

    useGSAP(() => {
        // 高级文字揭示：从 overflow-hidden 的容器中滑出
        const tl = gsap.timeline();

        tl.from(".reveal-text", {
            yPercent: 100, // 向下偏移 100%
            rotateX: 45,   // 稍微带点 3D 旋转
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power4.out"
        })
            .from(".hero-line", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1,
                ease: "expo.out"
            }, "-=1")
            .from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: container });

    return (
        <section ref={container} className="relative py-20 flex flex-col items-center justify-center z-10">
            <div className="text-center">
                {/* 遮罩容器 1 */}
                <div className="overflow-hidden mb-2">
                    <h1 className="reveal-text text-[6vw] leading-[0.8] font-black text-white tracking-tighter mix-blend-difference">
                        {lines[0].toUpperCase()}
                    </h1>
                </div>

                {/* 装饰线 */}
                <div className="hero-line w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4 opacity-70"></div>

                {/* 遮罩容器 2 */}
                <div className="overflow-hidden">
                    <h1 className="reveal-text text-[4vw] leading-[0.8] font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 tracking-tighter">
                        {lines[1].toUpperCase()}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;