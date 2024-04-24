import { CellphoneType } from "../../../../Models/project"

const iphoneStyle : React.CSSProperties = {
  width: "271px",
  height: "550px",
  position: "relative",
  justifySelf: "center",
  padding: "6px 8px",
}

const iphoneContent : React.CSSProperties = {
  overflow:"hidden",
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "10%"
}

const androidStyle : React.CSSProperties = {
  width: "283px",
  height: "567px",
  position: "relative",
  justifySelf: "center",
  padding: "50px 10px",
}

const androidContent : React.CSSProperties = {
  overflow:"hidden",
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "0px"
}

const noPhone : React.CSSProperties = {
  width: "271px",
  height: "527px",
  position: "relative",
  justifySelf: "center",
  padding: "0",
  aspectRatio: 770/1500
}

const noPhoneContet : React.CSSProperties = {
  overflow:"hidden",
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "0px"
}

type CellPhoneStyle = {
  style : React.CSSProperties;
  contentStyle : React.CSSProperties;
  foregroundImage : string | null;
}
function getStyle(type : CellphoneType) : CellPhoneStyle {
  if (type === "android") {
    return { style: androidStyle,
             contentStyle: androidContent,
             foregroundImage: "/portfolio-resources/android-cover.png"}
  }
  else if (type == "iphone") {
    return {style: iphoneStyle, 
            contentStyle: iphoneContent,
            foregroundImage: "/portfolio-resources/CellPhoneFrame.png"}
  }
  else {
    return {style: noPhone, 
      contentStyle: noPhoneContet,
      foregroundImage: null}
  }
  
}
export const CellphoneFrame = ({children, styles="", cellType} : 
                              { children?: React.ReactNode, styles? : string, cellType: CellphoneType}) => {
  
  const imgStyle : React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0"
  }
  
  const style = getStyle(cellType)
  return(
    <div className={styles} style={style.style}>
      <div style={style.contentStyle}>
        {children}
      </div>     
      {
        style.foregroundImage && <img style={imgStyle} src={style.foregroundImage}/>
      }      
    </div>
)}