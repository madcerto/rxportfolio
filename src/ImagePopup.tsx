import x from './assets/x.svg'

export default function ImagePopup(props: {src?: string|null, onClose?: any}) {
  return props.src && (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto" onClick={props.onClose}>
        <div className="flex h-full justify-center p-4 text-center items-center sm:p-6">
            <div className="fixed w-12 m-4 top-0 right-0 text-black hover:cursor-pointer" onClick={props.onClose}>
              <img src={x} />
            </div>
            <img src={props.src} className="max-h-full" onClick={(e)=>e.stopPropagation()}/>
        </div>
      </div>
    </div>
  )
}
