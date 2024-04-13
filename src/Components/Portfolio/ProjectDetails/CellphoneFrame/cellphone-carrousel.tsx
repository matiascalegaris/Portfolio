export const CellphoneFrame = ({children, styles} : { children: React.ReactNode, imageList: string[], styles : ""}) => {
  const style : React.CSSProperties = {
    aspectRatio: "512/1100"
  }
  return(
    <div className={styles} style={style}>
      {children}
    </div>
)}