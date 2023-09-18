import "./CardSlideBrowser.css"

import { FaStar, FaDownload } from "react-icons/fa6";
const CardSlideBrowser = (props) => {
  return (
    <>
      <div className="card-slide">
        <div className="card-slide-image">
          <img src={props.image} alt="Logo" />
          <div className="Nomber-of-streaming">
          </div>
        </div>
        <div className="description-game">
          <div className="header-desc-game">
            <h4>{props.title}</h4>
            <span style={{ color: "yellow" }}>
              <FaStar />
              <span className="start-game-browser">{props.Rate}</span>
            </span>
          </div>
          <div className="footer-desc-game">
            <h4>{props.downloadTotal}K Downloadas </h4>
            <span style={{ color: "var(--color-primary)" }}>
              <FaDownload />
              <span className="download-game-browser">{props.download}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardSlideBrowser