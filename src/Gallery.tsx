import {useState} from 'react'
import {useParams} from 'react-router-dom'
import ImagePopup from './ImagePopup.tsx';
import ProgressiveImg from './ProgressiveImg.tsx'

export default function Gallery() {
  const {album} = useParams();

  const imageSizes = new Map<string, string>(Object.entries(
    import.meta.glob('/albums/*/*.{png,jpg,jpeg,PNG,JPEG}', {
      eager: true,
      query: {
        as: "meta:width;height"
      }
    })
  ));
  const previews720p = new Map<string, string>(Object.entries(
    import.meta.glob('/albums/*/*.{png,jpg,jpeg,PNG,JPEG}', {
      eager: true,
      import: "default",
      query: {
        format: "webp",
        w: 720,
        lossless: true
      }
    })
  ));
  const originals = new Map<string, string>(Object.entries(
    import.meta.glob('/albums/*/*.{png,jpg,jpeg,PNG,JPEG}', {
      eager: true,
      import: "default",
      query: {
        format: "webp",
      }
    })
  ));

  const albumItems = [...originals.keys()]
    .filter(path => path.startsWith("/albums/"+album))

  const [popupSrc, setPopupSrc] = useState<string|undefined|null>(null);

  return <div className="flex-1 h-screen overflow-auto">
    <div className="sm:pt-32 xl:columns-3 sm:columns-2 gap-0">
      {albumItems.map(item =>
        <ProgressiveImg 
          preview={previews720p.get(item)}
          original={originals.get(item)}
          size={imageSizes.get(item)}
          setPopupSrc={setPopupSrc}
        />
      )}
      <ImagePopup src={popupSrc} onClose={()=>setPopupSrc(null)}/>
    </div>
  </div>
}
