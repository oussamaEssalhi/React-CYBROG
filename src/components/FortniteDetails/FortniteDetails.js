import './FortniteDetails.css'
import { FaStar, FaDownload, FaServer, FaGamepad } from "react-icons/fa"
import {  } from '../index'
const FortniteDetails = (props) => {
  return (
    <>
      <div className='fortnite-info'>
        <div className='fortnite-info-left'>
          <h3>Fortnite <br /><span>Sandbox</span></h3>
          <ul>
            <li> <span><FaStar style={{ "color": "yellow" }} /></span> <span>{props.start}</span> </li>
            <li> <span> <FaDownload style={{ "color": "var(--color-primary)" }} /></span> <span>{props.download}</span></li>
          </ul>
        </div>
        <div className='fortnite-info-right'>
          <ul>
            <li> <span><FaStar style={{"color":"yellow"}}/></span> <br/><span>{props.start}</span> </li>
            <li> <span> <FaDownload style={{ "color": "var(--color-primary)" }} /></span> <br /><span>{props.download}</span></li>
            <li> <span> <FaServer style={{ "color": "var(--color-primary)" }} /></span> <br /><span>{props.server}</span></li>
            <li> <span> <FaGamepad style={{ "color": "var(--color-primary)" }} /></span> <br /><span>{props.game}</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default FortniteDetails