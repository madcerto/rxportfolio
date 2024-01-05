// import sampleimg from './assets/Film Scans/1355/13550001.JPG?w=400'

export default function Gallery() {
  const gallery = Object.values(import.meta.glob(
    './assets/Film Scans/1355/*.{png,jpg,jpeg,PNG,JPEG,JPG}',
    { eager: true, as: "url" }
  ));

  return <div className="flex-1 h-screen overflow-auto">
    <div className="pt-32 lg:columns-3 columns-2 gap-0">
      {gallery.map(img => 
        <img className="lg:p-3 p-1" src={img}/>
      )}
    </div>
  </div>
}
