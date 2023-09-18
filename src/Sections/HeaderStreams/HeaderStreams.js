import './HeaderStreams.css'
import { SectionWrapperSecondary, SectionHeader } from "../../components/index";
import BrowserHeaderSlid from '../../components/BrowserHeaderSlide/BrowserHeaderSlide'
import {TopLiveStreams} from "../index"
const HeaderStreams = () => {
  return (
    <>
      <div className='header-streams'>
        <div className='header-streams-live-streams'>
          <SectionWrapperSecondary>
            <SectionHeader>Live <span>Streams</span></SectionHeader>
            <BrowserHeaderSlid />
          </SectionWrapperSecondary>
        </div>
        <div className='header-streams-top-live'>
          <SectionWrapperSecondary >
            <SectionHeader>Top <span>Streams</span></SectionHeader>
            <TopLiveStreams />
          </SectionWrapperSecondary>
        </div>
      </div>
    </>
  )
}

export default HeaderStreams