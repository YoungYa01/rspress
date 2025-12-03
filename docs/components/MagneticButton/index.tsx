/* =========================================
   组件: 磁性按钮 (交互细节)
   ========================================= */
import gsap from "gsap";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);

type Props = {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const MagneticButton = ({ children, className, onClick }: Props) => {
    const btnRef = useRef(null);

    useGSAP(() => {
        const btn = btnRef.current! as HTMLElement;
        const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMove = (e: any) => {
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = e.clientX - (left + width / 2);
            const y = e.clientY - (top + height / 2);
            xTo(x * 0.3); // 移动系数，0.3 表示轻微跟随
            yTo(y * 0.3);
        };

        const handleLeave = () => {
            xTo(0);
            yTo(0);
        };

        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);
        return () => {
            btn.removeEventListener("mousemove", handleMove);
            btn.removeEventListener("mouseleave", handleLeave);
        };
    }, { scope: btnRef });

    return (
        <div className="inline-block p-4" onClick={onClick}> {/* Padding 增加触发面积 */}
            <button ref={btnRef} className={className}>
                {children}
            </button>
        </div>
    );
};


export default MagneticButton;