import {useEffect, useRef} from "react";

const CleanStarfall = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef<any>([]); // 使用ref存储stars数组，避免每次渲染都重新创建
    const animationFrameId = useRef<any>(null);

    useEffect(() => {
        const canvas = canvasRef.current! as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // 粒子配置
        const INITIAL_STAR_COUNT = 50; // 初始星星数量
        const MAX_STARS = 200; // 最大星星数量
        const SHOOTING_STAR_CHANCE = 0.2; // 流星概率
        const NEW_STAR_INTERVAL = 200; // 每200毫秒生成一个新星星

        class Star {
            x = 0;
            y = 0;
            z = 0;
            size = 0;
            isShooting = false;
            speed = 0;
            opacity = 0;
            fadeDir = 0;
            createdAt = 0;
            lifespan = 0;

            constructor(isShooting = false, randomY = false) {
                this.init(isShooting, randomY);
            }

            init(isShooting = false, randomY = false) {
                this.x = Math.random() * width;
                this.y = randomY ? Math.random() * height : -10;
                this.z = Math.random() * 1.5 + 0.5; // 深度
                this.size = Math.random() * 1.2;
                this.isShooting = isShooting;
                this.speed = this.isShooting ? (Math.random() * 3 + 2) : (Math.random() * 0.2 + 0.05);
                this.opacity = Math.random() * 0.5 + 0.2;
                this.fadeDir = 1;
                this.createdAt = Date.now();
                this.lifespan = this.isShooting ?
                    (height / this.speed) * 16 + 2000 : // 流星存活时间稍长
                    Infinity; // 背景星永久存在，除非被移除
            }

            update() {
                this.y += this.speed;

                // 背景星闪烁逻辑
                if (!this.isShooting) {
                    this.opacity += 0.005 * this.fadeDir;
                    if (this.opacity > 0.8 || this.opacity < 0.2) this.fadeDir *= -1;
                }

                // 如果星星超出屏幕底部或超过寿命，标记为可移除
                const isOutOfBounds = this.y > height;
                const isExpired = Date.now() - this.createdAt > this.lifespan;

                return !(isOutOfBounds || isExpired);
            }

            draw() {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

                if (this.isShooting) {
                    // 流星：画成细长的椭圆
                    ctx.ellipse(this.x, this.y, this.size * 0.8, this.size * 8, 0, 0, Math.PI * 2);
                } else {
                    // 背景星：普通圆点
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                }
                ctx.fill();
            }
        }

        // 初始化星星数组
        starsRef.current = Array.from({ length: INITIAL_STAR_COUNT }, () => {
            const isShooting = Math.random() < SHOOTING_STAR_CHANCE;
            return new Star(isShooting, true); // 初始星星随机分布在整个屏幕
        }) as Star[];

        // 定时生成新星星
        const starGenerationInterval = setInterval(() => {
            if (starsRef.current.length < MAX_STARS) {
                // 按概率生成流星或背景星
                const isShooting = Math.random() < SHOOTING_STAR_CHANCE;
                starsRef.current.push(new Star(isShooting));
            }
        }, NEW_STAR_INTERVAL);

        const animate = () => {
            // 完全清除画布
            ctx.clearRect(0, 0, width, height);

            // 更新并绘制星星，同时移除超出屏幕的星星
            starsRef.current = starsRef.current.filter((star: any) => {
                const isAlive = star.update();
                if (isAlive) {
                    star.draw();
                }
                return isAlive;
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // 重新调整星星位置，避免星星集中在旧位置
            starsRef.current.forEach((star: any) => {
                if (star.x > width) star.x = Math.random() * width;
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(starGenerationInterval);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

export default CleanStarfall;