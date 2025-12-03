import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AdvancedCursor = () => {
    const cursorRef = useRef(null); // 外圈
    const dotRef = useRef(null);    // 内点

    useGSAP(() => {
        // 1. 初始化 GSAP QuickTo (性能优化：比直接 set 更加流畅，无垃圾回收)
        const xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.6, ease: "power3"});
        const yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.6, ease: "power3"});
        const dotXTo = gsap.quickTo(dotRef.current, "x", {duration: 0.1, ease: "power3"}); // 内点几乎无延迟
        const dotYTo = gsap.quickTo(dotRef.current, "y", {duration: 0.1, ease: "power3"});

        // 2. 核心移动逻辑
        const onMouseMove = (e: any) => {
            const {clientX, clientY} = e;
            xTo(clientX);
            yTo(clientY);
            dotXTo(clientX);
            dotYTo(clientY);
        };

        // 3. 智能悬停检测 (Event Delegation)
        // 这样不需要给每个按钮加 onMouseEnter，全自动识别
        const onMouseOver = (e: any) => {
            const target = e.target;
            // 检查目标是否是交互元素 (链接、按钮、输入框、或自定义类名)
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive');

            if (isInteractive) {
                // 悬停状态：外圈放大，变为半透明光晕
                gsap.to(cursorRef.current, {
                    scale: 3.5,
                    opacity: 0.4,
                    backgroundColor: 'white', // 变为实心
                    borderWidth: 0,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
                // 悬停状态：内点消失或变小
                gsap.to(dotRef.current, {
                    scale: 0, // 隐藏内点，让外圈包裹目标
                    duration: 0.3
                });
            }
        };

        const onMouseOut = (e: any) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive');

            if (isInteractive) {
                // 恢复默认状态：空心圆环
                gsap.to(cursorRef.current, {
                    scale: 1,
                    opacity: 1,
                    backgroundColor: 'transparent',
                    borderWidth: '1px',
                    borderColor: 'white',
                    duration: 0.3,
                    ease: "power2.out"
                });
                // 恢复内点
                gsap.to(dotRef.current, {
                    scale: 1,
                    duration: 0.3
                });
            }
        };

        // 4. 点击反馈
        const onMouseDown = () => {
            gsap.to(cursorRef.current, {scale: 0.8, duration: 0.1});
            gsap.to(dotRef.current, {scale: 0.5, duration: 0.1});
        };

        const onMouseUp = () => {
            // 注意：这里只恢复 scale，具体大小由当前的 hover 状态决定，这里简化处理恢复为 1 或 3.5
            // 为了简单，我们让 mouseout 逻辑处理重置，这里只做简单的回弹
            gsap.to(cursorRef.current, {scale: 1, duration: 0.2, clearProps: "scale"}); // clearProps 避免冲突
            gsap.to(dotRef.current, {scale: 1, duration: 0.2});
        };

        // 绑定事件
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        // 使用 capture: true 确保尽早捕获悬停事件
        document.addEventListener("mouseover", onMouseOver, true);
        document.addEventListener("mouseout", onMouseOut, true);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseover", onMouseOver, true);
            document.removeEventListener("mouseout", onMouseOut, true);
        };
    });

    return (
        <>
            {/* 外圈 (跟随较慢) */}
            <div
                ref={cursorRef}
                className="custom-cursor w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
            />
            {/* 内点 (跟随极快) */}
            <div
                ref={dotRef}
                className="custom-cursor w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
            />
        </>
    );
};

export default AdvancedCursor;