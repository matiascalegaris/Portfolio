import { useEffect, useRef } from "react";
import './ds-image-carrousel.scss'

export const DSImageCarrousel = ({imageList, styles} : {imageList : string[], styles : string}) => {
  const topScreenRef = useRef<HTMLInputElement>(null);
  const bottomScreenRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (topScreenRef?.current && bottomScreenRef?.current) {
        let currentOffset = topScreenRef.current.scrollLeft + 256;
        if (currentOffset >= topScreenRef.current.scrollWidth) {
          currentOffset = 0
        }
        topScreenRef.current.scrollLeft = currentOffset;
        bottomScreenRef.current.scrollLeft = currentOffset;
      }
    }, 10000)  
    return () => clearInterval(intervalId);
   
  }, [topScreenRef, bottomScreenRef])

  return (
    <div className={`ds-area ${styles}`}>
      <div className="top-screen">
        <div className="scroll-area" ref={topScreenRef}>
        {              
            imageList.map( img => (
              <img src={img}/>
            ))
        } 
        </div>   
      </div>
      <div className="bottom-screen">
        <div className="scroll-area" ref={bottomScreenRef}>
        {
          imageList.map( img => (
            <div className="bottom-screen-img-container"><img className="bottom-img" src={img}/></div>
          ))
        }
        </div> 
      </div>
      <img className="ds" src="/portfolio-resources/NintendoDSImage.png"/>
    </div>
  )}