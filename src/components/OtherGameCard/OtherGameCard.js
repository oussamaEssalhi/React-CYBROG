import "./OtherGameCard.css"
import { FaStar, FaDownload } from "react-icons/fa"


const OtherGameCarde = (props) => {
  return (
    <>
      <div className="game-card">
        <div className="game-image">
          <img src={props.image} alt="" />
        </div>
        <div className="game-info">
          <h3>{props.title} <br /><span>{props.category}</span></h3>
          <ul>
            <li> <span><FaStar style={{ "color": "yellow" }} className="icone" /></span> <span>{props.Rate}</span> </li>
            <li> <span> <FaDownload style={{ "color": "var(--color-primary)" }} className="icone" /></span> <span>{props.download}</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default OtherGameCarde