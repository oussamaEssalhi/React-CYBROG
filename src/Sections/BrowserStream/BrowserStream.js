import './BrowserStream.css'
import { CardLiveStream, SectionHeader, LinkButton } from "../../components/index"
import CardLiveStreamData from '../../Data/CardLiveStreamData'



const BrowserStream = () => {
  const listCardLiveStream = CardLiveStreamData.map((el) => {
    return <CardLiveStream key={el.id} image={el.image} title={el.title} paragraph={el.paragraph} />
  })
  return (
    <div className="BrowserStream ">
      <div className='Header-live-stream' >
        <SectionHeader >How To Start Your <span className='header-main-color'>Live Stream</span></SectionHeader>
      </div>
      <div className='card-live-stream-layout'>
        {listCardLiveStream}
      </div>
      <div className='btn-card-live-stream'>
        {/* <PrimaryButton > <Link to='/profile'>Go to Profile</Link> ok</PrimaryButton> */}
        <LinkButton path="/profile">Go To Profile</LinkButton>
      </div>

    </div>
  )
}

export default BrowserStream