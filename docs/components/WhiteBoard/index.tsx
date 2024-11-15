import {Button, Modal, Tooltip} from "antd";
import {forwardRef, useRef, useState} from "react";
import {ExpandOutlined, FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons'

type IframeProps = {
  src: string,
  isWindowFull?: boolean,
  onExitFullWindow?: () => void
}
// @ts-ignore
export const Iframe = forwardRef((props: IframeProps, ref: HTMLIFrameElement | undefined) => {
  const {src, isWindowFull, onExitFullWindow} = props;
  return (
    <div style={{border: '1px solid #ccc', borderRadius: '150px'}}>
      {
        isWindowFull ?
          <Modal title={null}
                 footer={null} width={'100vw'}
                 onCancel={onExitFullWindow}
                 closeIcon={<Tooltip title={'退出全屏'}>
                   <FullscreenExitOutlined/>
                 </Tooltip>}
                 open keyboard destroyOnClose centered>
            <div style={{width: '100%', height: 'calc(100vh - 60px)'}}>
              <iframe src={src} width="100%" height="100%"/>
            </div>
          </Modal>
          : <iframe src={src} width="100%" height="600" ref={ref}/>
      }
    </div>
  )
})
const WhiteBoard = () => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const [isWindowFull, setIsWindowFull] = useState<boolean>(false);
  const handleFullScreen = () => {
    if (!iframeRef.current) return;
    iframeRef.current.requestFullscreen();
  }

  const handleExitFullWindow = () => {
    setIsWindowFull(false);
  }
  return (
    <div style={{position: 'relative'}}>
      <div style={{position: 'absolute', top: 15, right: 100, display: 'flex', gap: 20}}>
        {/*<Tooltip title="网页全屏">*/}
        {/*  <Button type={"text"} onClick={() => setIsWindowFull(true)} icon={<ExpandOutlined/>}></Button>*/}
        {/*</Tooltip>*/}
        <Tooltip title="进入全屏">
          <Button type={"text"} onClick={handleFullScreen} size={"large"} icon={<FullscreenOutlined/>}></Button>
        </Tooltip>
      </div>
      <Iframe
        src={"https://excalidraw.com/"}
        ref={iframeRef}
        isWindowFull={isWindowFull}
        onExitFullWindow={handleExitFullWindow}
      ></Iframe>
    </div>
  )
}

export default WhiteBoard;
