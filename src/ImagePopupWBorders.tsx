export default function ImagePopup(props: {src?: string}) {
  console.log(props.meta)
  return props.src ? (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-6">
          <div className="h-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            <div className="fixed w-8 m-2 top-0 right-0 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="oc se"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
            <div className="h-full bg-white px-4 pb-4 pt-5 sm:p-5 sm:pb-4 sm:pt-10">
              <div className="h-full sm:flex sm:items-start">
                <div className="h-full mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="h-full mt-2">
                    <img src={props.src} className="h-full"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):null
}
