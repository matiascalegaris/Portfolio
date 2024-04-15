import { useEffect, useRef } from "react";

export const Carrousel = ({imageList} : {imageList : string[]}) => {
  const style : React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll hidden",
    width: "100%",
    height: "100%",
    msOverflowStyle: "none",
    scrollbarWidth: "none"
  }
  const scrollArea = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollArea?.current) {
        let currentOffset = scrollArea.current.scrollLeft + scrollArea.current.scrollWidth / imageList.length;
        if (currentOffset >= scrollArea.current.scrollWidth) {
          currentOffset = 0
        }
        scrollArea.current.scrollLeft = currentOffset;
      }
    }, 10000)  
    return () => clearInterval(intervalId);
   
  }, [scrollArea])
  return (
    <div style={style} ref={scrollArea}>
      {              
            imageList.map( img => (
              <img src={img}/>
            ))
        } 
    </div>
)}