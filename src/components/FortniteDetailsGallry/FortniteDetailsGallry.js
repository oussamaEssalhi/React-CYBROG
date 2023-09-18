import './FortniteDetailsGallry.css'
import gallry_1 from '../../assets/img/details-01.jpg'
import gallry_2 from '../../assets/img/details-02.jpg'
import gallry_3 from '../../assets/img/details-03.jpg'
import { SeconderyButton } from '../index'
const FortniteDetailsGallry = () => {
  return (
    <>
      <div className='fortnite-details-gallry'>
        <div className='fortnite-details-gallry-image'>
          <div className='fortnite-details-gallry-img'>
            <img src={gallry_1} alt='' />
          </div>
          <div className='fortnite-details-gallry-img'>
            <img src={gallry_2} alt='' />
          </div>
          <div className='fortnite-details-gallry-img'>
            <img src={gallry_3} alt='' />
          </div>
        </div>
        <p className='fortnite-details-gallry-description'>
          Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a  <span> small contribution via PayPal </span>to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
        </p>
        <div className="btn-download-fotnite">
          <SeconderyButton > Download Fortnite Now!</SeconderyButton>
        </div>
      </div>
    </>
  )
}

export default FortniteDetailsGallry