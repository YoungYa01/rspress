/* =========================================
   组件: 3D 视差卡片 (横向滚动部分)
   ========================================= */
import {MouseEventHandler, useRef} from "react";
import {ArrowUpRight} from "lucide-react";

type Props = {
    item: {
        img: string;
        cat: string;
        title: string;
    };
    index: number;
}

const ParallaxCard = ({ item, index }: Props) => {
    const cardRef = useRef(null);

    // 3D 倾斜效果
    const handleMouseMove = (e: any) => {
        const card = cardRef.current! as HTMLDivElement;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // 计算旋转角度
        const rotateX = ((y - centerY) / centerY) * -10; // -10 deg
        const rotateY = ((x - centerX) / centerX) * 10;  // 10 deg

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000 // 关键：透视感
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <div className="h-item flex-shrink-0 w-[80vw] md:w-[60vw] h-full flex items-center justify-center p-4 md:p-20">
            <div
                className="relative w-full aspect-[16/9] perspective-1000"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={cardRef} className="w-full h-full relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl group">
                    {/* 图片层 */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                             style={{ backgroundImage: `url(${item.img})` }}></div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                    </div>

                    {/* 内容层 - 悬停浮起 */}
                    <div>
                    {/*<div className="absolute inset-0 flex flex-col justify-end p-10 translate-z-20">*/}
                        <div className="translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            <span className="text-purple-400 font-mono text-sm tracking-widest mb-2 block">{item.cat}</span>
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">{item.title}</h3>
                            <div className="flex items-center gap-2 text-white/70">
                                <span>Read Case Study</span>
                                <ArrowUpRight size={20}/>
                            </div>
                        </div>
                    </div>

                    {/* 编号装饰 */}
                    <div className="absolute top-6 right-8 font-mono text-white/20 text-xl border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        0{index + 1}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ParallaxCard;