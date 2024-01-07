// import sampleimg from './assets/Film Scans/1355/13550001.JPG?w=400'
import {useState} from 'react'
import ImagePopup from './ImagePopup.tsx';

export default function Gallery() {
  const previews: Array<string> = Object.values(import.meta.glob('/src/assets/Film Scans/Lightroom-ed/*.{png,jpg,jpeg,PNG,JPEG,JPG}', {
    eager: true,
    import: "default",
    query: {
      format: "webp",
      w: 420,
    }
  }))
  const originals: Array<string> = Object.values(import.meta.glob('/src/assets/Film Scans/Lightroom-ed/*.{png,jpg,jpeg,PNG,JPEG,JPG}', {
    eager: true,
    import: "default",
    query: {
      format: "webp",
    }
  }))

  const [popupSrc, setPopupSrc] = useState<string|null>(null);

  return <div className="flex-1 h-screen overflow-auto">
    <div className="pt-32 lg:columns-3 columns-2 gap-0">
      {previews.map((img,i) => 
        <img
          className="overflow-auto lg:p-3 p-1 hover:cursor-pointer"
          onClick={()=>setPopupSrc(originals[i])}
          src={img}
        />
      )}
      <ImagePopup src={popupSrc} onClose={()=>setPopupSrc(null)}/>
    </div>
  </div>
}
