import { useEffect, useRef } from "react";

export const Carrousel = ({imageList, styles = ""} : {imageList : string[], styles?:string}) => {
  const style : React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll hidden",
    gap: "100px",
    width: "100%",
    height: "100%",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    pointerEvents: "none"
  }
  const scrollArea = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollArea?.current) {
        const imgCount = scrollArea.current.children.length
        for (let i = 0; i < imgCount; i++) {
          const currentElement : HTMLImageElement = scrollArea.current.children[i] as HTMLImageElement
          if (currentElement.offsetLeft >= scrollArea.current.scrollLeft) {
            let nextelementIndex = i + 1
            if (nextelementIndex >= imgCount) {
              nextelementIndex = 0
            }
            const nextElement : HTMLImageElement = scrollArea.current.children[nextelementIndex] as HTMLImageElement          
            scrollArea.current.scrollLeft = nextElement.offsetLeft;
            break;
          }
        }        
      }
    }, 10000)  
    return () => clearInterval(intervalId);
   
  }, [scrollArea])
  return (
    <div className={styles} style={style} ref={scrollArea}>
      {              
            imageList.map( img => (
              <img src={img}/>
            ))
        } 
    </div>
)}