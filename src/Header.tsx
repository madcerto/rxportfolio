import {Link} from 'react-router-dom'
import config from '../config.json'

export default function Header() {
  return (
    <div className="lg:w-80 w-64 p-8 pt-16">
      <p className="font-noto font-bold text-2xl pb-8">{config.title}</p>
    
      <div className="font-lato text-[#6b747a]">
        <p dangerouslySetInnerHTML={{__html: config.description}} />
        <ul className="pt-8 text-lg underline">
          {config.albums.map(album => {
            if (typeof album === "string") return <li><Link to={"/rxportfolio/"+album}>{" > "+album}</Link></li>
            else return <li><Link to={"/rxportfolio/"+album[1]}>{" > "+album[0]}</Link></li>
          })}
        </ul>
      </div>
    </div>
  )
}
