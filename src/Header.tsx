import {TITLE, DESCRIPTION, ALBUMS} from '../constants.ts';

export default function Header() {
  return (
    <div className="lg:w-80 w-64 p-8 pt-16">
      <p className="font-noto font-bold text-2xl pb-8">{TITLE}</p>
    
      <div className="font-lato text-[#6b747a]">
        <p dangerouslySetInnerHTML={{__html: DESCRIPTION}} />
        <ul className="pt-8">
          {ALBUMS.map(album => <li>{album}</li>)}
        </ul>
      </div>
    </div>
  )
}
