import './MostPopularBrowser.css'
import { SectionHeader, SectionWrapperSecondary, CardMostPopularLiveStream, LinkButton } from '../../components/index'
import DataUserLiveStream from "../../Data/DataUserLiveStream";
const MostPopularBrowser = () => {
  const mostPopularLiveStreamCard = DataUserLiveStream.map((el) => {
    return <CardMostPopularLiveStream key={el.id} imageLive={el.imageLive} avatar={el.avatar} titleStream={el.titleStream} user={el.user} />
  })
  return (
    <>
      <SectionWrapperSecondary>
        <SectionHeader>
          <div className='title-section-most-popular-stream-live'>Most Popular <span>Live Stream</span></div>
        </SectionHeader>
        <div className='layout-card-most-popular-stream'>
          {mostPopularLiveStreamCard}
        </div>
        <div className='layout-btn'>
          <LinkButton to='/#'> Discover All Streams</LinkButton>
        </div>
      </SectionWrapperSecondary>
    </>
  )
}

export default MostPopularBrowser