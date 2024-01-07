export default function ImagePopup(props: {src?: string, onClose?: any}) {
  return props.src ? (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto" onClick={props.onClose}>
        <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-6">
            <div className="fixed w-12 m-4 top-0 right-0 text-black hover:cursor-pointer" onClick={props.onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="oc se"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
            <img src={props.src} className="h-full" onClick={(e)=>e.stopPropagation()}/>
        </div>
      </div>
    </div>
  ):null
}
