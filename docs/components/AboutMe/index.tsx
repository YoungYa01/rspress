import {
    Avatar,
    Button,
    Result,
    Watermark,
    Divider,
    notification,
    Badge, Flex
} from "antd";
import {useState} from "react";
import {useDark} from 'rspress/runtime';
import SunFlowerIcon from "../SunFlowerIcon";
import SplashCursor from "../SplashCursor";
import LogoWall from "../LogoWall";
import MagnetLines from "../MagnetLines";
import SmallGame from "../Game";
import Tetris from "../Tetris";
import "./index.module.css"
import AdvancedCursor from "../AdvancedCursor";
import CleanStarfall from "../CleanStarfall";
import Hero from "../Hero";
import ParallaxTextSection from "../ParallaxTextSection";
import HorizontalScroll from "../HorizontalScroll";
import PinnedSection from "../PinnedSection";
import {ArrowRight} from "lucide-react";
import MagneticButton from "../MagneticButton";

const AboutMe = () => {
    const [avatarSrc, setAvatarSrc] = useState<string>(`/pic${[1, 2, 3, 4].at(parseInt(String(Math.random() * 4)))}.jpg`);
    const [loading, setLoading] = useState<boolean>(false);
    const dark = useDark();
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setAvatarSrc(`/pic${[1, 2, 3, 4].at(parseInt(String(Math.random() * 4)))}.jpg`);
            notification.success({
                message: 'Success ✅',
                description: '🎉🎉You Change Avatar Success🎉🎉',
                icon: <Badge dot color={"green"}>
                    <Avatar>
                        <img
                            style={{transform: 'scale(2)'}}
                            src={avatarSrc}
                            alt="younya logo"
                        />
                    </Avatar>
                </Badge>
            });
            setLoading(false);
        }, 1000)
    }

    const IconList = () => {
        return (
            <div className="text-center flex justify-center items-center">
                {/*<SmileIcon/>*/}
                {/*<FlowerIcon/>*/}
                <SunFlowerIcon/>
            </div>
        )
    }

    return (
        <Watermark content="YoungYa">
            <div className={'w-full flex justify-center items-center flex-col-reverse'}>
                <div>
                    <Avatar size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}} onClick={handleClick}
                            style={{cursor: 'pointer'}}>
                        <img
                            style={{transform: 'scale(2)'}}
                            src={avatarSrc}
                            alt="younya logo"
                        />
                    </Avatar>
                </div>

                <Hero lines={["YoungYa", "SWJTU、SWUST"]}/>
            </div>
            <Divider variant="dotted" style={{borderColor: '#7cb305'}}>
                {/*<Button type="default" onClick={} loading={loading}>Change Avatar</Button>*/}
            </Divider>
            <Result
                icon={<IconList/>}
                title={null}
                extra={
                    <span className={'text-2xl'}>I'm a Web Developer</span>
                }
            />
            <Divider variant="dotted" style={{borderColor: '#7cb305'}}>
                <MagneticButton
                    onClick={() => window.location.href = "/article/css/Tailwind_CSS.html"}
                    className="px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 group">
                    <span>EXPLORE ARTICLES</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </MagneticButton>
            </Divider>

            <ParallaxTextSection/>

            <HorizontalScroll />

            {/*<LogoWall*/}
            {/*  // @ts-ignore*/}
            {/*  items={[1, 2, 3, 4].map((item) => ({imgUrl: `/pic${item}.jpg`, altText: `pic${item}`}))}*/}
            {/*  direction='horizontal'*/}
            {/*  pauseOnHover={true}*/}
            {/*  // size='clamp(8rem, 1rem + 20vmin, 25rem)'*/}
            {/*  duration='60s'*/}
            {/*  bgColor={dark ? '#191d24' : '#fdfffd'}*/}
            {/*  bgAccentColor={dark ? '#191d24' : '#fdfffd'}*/}
            {/*></LogoWall>*/}

            {/*<Flex justify={'center'} align={'center'}>*/}
            {/*  <MagnetLines containerSize={"90vmin"}/>*/}
            {/*</Flex>*/}

            <SmallGame/>
            {/*<Carousel autoplay arrows adaptiveHeight draggable fade infinite>*/}
            {/*  {*/}
            {/*    [1, 2, 3, 4].map((item) => (*/}
            {/*      <div>*/}
            {/*        <img src={`/pic${item}.jpg`}/>*/}
            {/*      </div>*/}
            {/*    ))*/}
            {/*  }*/}
            {/*</Carousel>*/}
            {/*<Tetris/>*/}
            <SplashCursor/>
        </Watermark>
    )
}

export default AboutMe;
