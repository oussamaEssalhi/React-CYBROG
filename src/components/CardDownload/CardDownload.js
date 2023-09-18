import "./CardDownload.css";
import { FaStar, FaDownload } from "react-icons/fa";


const CardDownload = (props) => {
  return (
    <>
      <div className='card-game-download'>
        <div className='card-downlod'>
          <div className='card-downlod-image'>
            <img src={props.image} alt='' />
          </div>
          <div className='card-downlod-detail'>
            <h4>{props.title}</h4>
            <h6>{props.category}</h6>
            <div>
              <span> <span><FaStar style={{ "color": "yellow" }} /></span> {props.Rate}</span>
              <span> <span><FaDownload style={{ "color": "var(--color-primary)" }} /></span>{props.download}M</span>
            </div>
          </div>
          <div className="downloaded-icon">
            <FaDownload style={{ "color": "var(--color-primary)" }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDownload