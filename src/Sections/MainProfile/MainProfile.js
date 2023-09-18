import './MainProfile.css';
import profil from "../../assets/img/profile.jpg";
import { DescriptionsMainProfile, PrimaryButton, SeconderyButton } from "../../components/index";


const MainProfile = () => {
  return (
    <>
      <div className='main-profile'>
        <div className='Section-one'>
          <img src={profil} alt='' />
        </div>
        <div className='Section-two'>
          <PrimaryButton>Offline</PrimaryButton>
          <h4>Alan Smithee</h4>
          <p>You Haven't Gone Live yet. Go Live By Touching  <br/>The Button Below.</p>
          <SeconderyButton >Start Live Stream</SeconderyButton>
        </div>
        <div className='Section-three'>
          <DescriptionsMainProfile download="3" online="10" live="none" clips="29" />
        </div>
      </div>
    </>
  )
}


export default MainProfile