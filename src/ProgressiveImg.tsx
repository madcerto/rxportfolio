import {useRef, useState, useEffect} from 'react'
import {useContainerDimensions} from './util/useContainerDimensions.tsx'

export default function ProgressiveImg(props: {
  preview?: string,
  original?: string,
  size: {width?: number, height?: number},
  setPopupSrc: any
}) {
  const compRef = useRef()
  const { width, height } = useContainerDimensions(compRef)
  const [imgSrc, setImgSrc] = useState(null)

  useEffect(() => {
    setImgSrc(null)
    const img = new Image();
    img.src = props.preview;
    img.onload = () => {
      setImgSrc(props.preview);
    };
  }, [props.preview]);

  return imgSrc ? <img
      ref={compRef}
      className="w-full sm:p-3 p-6 py-3 bg-gray-400 bg-clip-content hover:cursor-pointer"
      style={{
        "height": props.size.height
          * (width / props.size.width)
      }}
      onClick={()=>props.setPopupSrc(props.original)}
      src={imgSrc}
    /> : <div
      ref={compRef}
      className="w-full lg:p-3 p-1 bg-gray-400 bg-clip-content hover:cursor-pointer break-inside-avoid-column"
      style={{
        "height": props.size.height
          * (width / props.size.width)
      }}
      onClick={()=>props.setPopupSrc(props.original)}
    />
}
