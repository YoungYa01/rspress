const Iframe = ({url, style}: { url: string,style:CSSStyleSheet }) => {
  // @ts-ignore
  return <iframe src={url} style={style}/>
}

export default Iframe;
