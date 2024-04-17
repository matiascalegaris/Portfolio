
export const LaptopFrame = ({children, styles=""} : 
                              { children?: React.ReactNode, styles? : string}) => {
  
  const imgStyle : React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0"
  }

  const outerStyle : React.CSSProperties = {
    position: "relative",
    justifySelf: "center",
    padding: "6px 8px",
    aspectRatio: 1021/589
  }
  
  const innerContent : React.CSSProperties = {
    overflow:"hidden",
    position: "absolute",
    top: "7%",
    left: "12%",
    bottom: "15%",
    right: "12%",
  }
  
  return(
    <div className={styles} style={outerStyle}>
      <div style={innerContent}>
        <div className="full-width full-height">
          {children}
        </div>
      </div>     
      <img style={imgStyle} src="/portfolio-resources/laptop.png"/>   
    </div>
)}