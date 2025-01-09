import {
  Avatar,
  Button,
  Carousel,
  Result,
  Watermark,
  Divider,
  notification,
  Badge
} from "antd";
import {useState} from "react";
import SmileIcon from "../SmileIcon";
import FlowerIcon from "../FlowerIcon";
import SunFlowerIcon from "../SunFlowerIcon";

const AboutMe = () => {
  const [avatarSrc, setAvatarSrc] = useState<string>(`/pic${[1, 2, 3, 4].at(parseInt(String(Math.random() * 4)))}.jpg`);
  const [loading, setLoading] = useState<boolean>(false);
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
      <div>
        <SmileIcon/>
        <FlowerIcon/>
        <SunFlowerIcon/>
      </div>
    )
  }

  return (
    <Watermark content="YoungYa">
      <div className={'w-full bg-blue-800 flex justify-center items-center'}>
        <div>
          <Avatar size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}>
            <img
              style={{transform: 'scale(2)'}}
              src={avatarSrc}
              alt="younya logo"
            />
          </Avatar>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <span className={'text-6xl'}>
            YoungYa
          </span>
        </div>
      </div>
      <Divider variant="dotted" style={{borderColor: '#7cb305'}}>
        <Button type="default" onClick={handleClick} loading={loading}>Change Avatar</Button>
      </Divider>
      <Result
        icon={<IconList/>}
        title={null}
        extra={
          <span className={'text-2xl'}>I'm a student from <a href="https://www.swust.edu.cn/" style={{
            color: '#7cb305',
            textDecoration: 'underline',
            fontSize: '2.5rem'
          }}>SWUST</a></span>
        }
      />
      <Divider variant="dotted" style={{borderColor: '#7cb305'}}>
        <Button
          type={'primary'} size={'large'}
          onClick={() => window.location.href = "/article/tec-doc/CSS相关/Tailwind_CSS.html"}
        >
          To Article
        </Button>
      </Divider>
      <Carousel autoplay arrows adaptiveHeight draggable fade infinite>
        {
          [1, 2, 3, 4].map((item) => (
            <div>
              <img src={`/pic${item}.jpg`}/>
            </div>
          ))
        }
      </Carousel>
    </Watermark>
  )
}

export default AboutMe;
