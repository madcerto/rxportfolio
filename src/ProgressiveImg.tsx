import {useRef, useState, useEffect} from 'react'
import {useContainerDimensions} from './util/useContainerDimensions.tsx'

export default function ProgressiveImg(props: {
  preview?: string,
  original?: string,
  size?: {width: number, height: number},
  setPopupSrc: any
}) {
  const compRef = useRef<HTMLImageElement>(null)
  const { width } = useContainerDimensions(compRef)
  const [imgSrc, setImgSrc] = useState<string|null|undefined>(null)

  useEffect(() => {
    setImgSrc(null)
    const img = new Image();
    img.src = props.preview ?? "";
    img.onload = () => {
      setImgSrc(props.preview);
    };
  }, [props.preview]);

  const passedProps = {
    ref: compRef,
    className: "w-full sm:p-3 p-6 py-3 bg-gray-400 bg-clip-content hover:cursor-pointer break-inside-avoid-column",
    style: {
      "height": (props.size?.height ?? 0)
        * (width / (props.size?.width ?? 0))
    },
    onClick: ()=>props.setPopupSrc(props.original)
  }
  return imgSrc ? <img {...passedProps} src={imgSrc} />
    : <div {...passedProps} />
}
