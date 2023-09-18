import "./HeaderDetails.css"
import featurLeft from "../../assets/img/feature-left.jpg";
import featureRight from "../../assets/img/feature-right.jpg";
// import { BsPlayCircle } from "react-icons/fa5";
// use library react Icons
import { BsFillPlayFill } from "react-icons/bs";
import SectionHeader from "../SectionHeader/SectionHeader";

const HeaderDetails = () => {
  return (
    <>
      <div className='header-details-feature'>
        <div className='header-details-feature-left'>
          <img src={featurLeft} alt='feature' className="img-left"></img>
        </div>
        <div className='header-details-feature-right'>
          <div className="icon-wrapper">
            <a href="/#">
              <BsFillPlayFill className="icon-play" />
            </a>
          </div>
          <img src={featureRight} alt='feature' className="img-right" ></img>
        </div>

      </div>
      <div className="fortnite-details">
        <SectionHeader>FORTNITE DETAILS</SectionHeader>
      </div>
    </>
  )
}

export default HeaderDetails