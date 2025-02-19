import {useEffect} from "react";

const SmallGame = () => {

  return (
    <div>
      <iframe
        src="https://fun.em0bu.cn/ssp/87/2812/index.html?hb=1&windowPmp=1"
        allowFullScreen
        allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; display-capture"
        name="gameFrame" scrolling="no"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
        title="Game" className="Clsn52HE2ZzhoBMbiAF6" style={{ width: '100%', height: '100%',minHeight: 600 }}
      ></iframe>
    </div>
  )
}

export default SmallGame;
