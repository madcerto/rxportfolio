import {Link} from 'react-router-dom'
import config from '../config.json'

export default function Header() {
  return (
    <div className="lg:w-80 sm:w-64 p-8 sm:pt-16">
      <p className="font-noto font-bold text-2xl pb-8">{config.title}</p>
    
      <div className="font-lato text-[#6b747a]">
        {config.description && <p className="pb-8" dangerouslySetInnerHTML={{__html: config.description}} />}
        <ul className="text-lg underline">
          {config.albums.map(album => {
            if (typeof album === "string") return <li><Link to={"/rxportfolio/"+album}>{" > "+album}</Link></li>
            else return <li><Link to={"/rxportfolio/"+album[1]}>{" > "+album[0]}</Link></li>
          })}
          {config.returnLink && (typeof config.returnLink === "string"
            ? <li><a href={config.returnLink}>> Return</a></li>
            : <li><a href={config.returnLink[1]}>> {config.returnLink[0]}</a></li>)}
        </ul>
      </div>
    </div>
  )
}
