// import sampleimg from './assets/Film Scans/1355/13550001.JPG?w=400'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import ImagePopup from './ImagePopup.tsx';

export default function Gallery() {
  const {album} = useParams();

  // const previews420p = new Map<string, string>(Object.entries(
  //   import.meta.glob('/albums/*/*.{png,jpg,jpeg,PNG,JPEG}', {
  //     eager: true,
  //     import: "default",
  //     query: {
  //       format: "webp",
  //       w: 420,
  //     }
  //   })
  // ));
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
    <div className="pt-32 lg:columns-3 columns-2 gap-0">
      {albumItems.map(item => 
        <img
          className="w-full lg:p-3 p-1 hover:cursor-pointer"
          onClick={()=>setPopupSrc(originals.get(item))}
          src={previews720p.get(item)}
        />
      )}
      <ImagePopup src={popupSrc} onClose={()=>setPopupSrc(null)}/>
    </div>
  </div>
}
