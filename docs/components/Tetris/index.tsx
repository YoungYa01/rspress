import {Button, Tooltip} from "antd";

const Tetris = () => {
  const goBack = () => {
    window.history.back();
  }
  return (
    <div className="relative">
      <div className="absolute left-2 top-2">
        <Tooltip title={'返回'}>
          <Button type="link" className="text-3xl mt-2" onClick={goBack}>◀️</Button>
        </Tooltip>
      </div>
      <iframe
        src="https://chvin.github.io/react-tetris/"
        allowFullScreen
        allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; display-capture"
        name="gameFrame" scrolling="no"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
        title="Game" className="Clsn52HE2ZzhoBMbiAF6" style={{width: '100%', height: '100vh', minHeight: 600}}
      ></iframe>
    </div>
  )
}

export default Tetris;
