import "./BrowseHeader.css";
import { SectionHeader, SectionWrapperSecondary, TopDownloadedGame, BrowserHeaderSlide } from "../../components/index";

const BrowseHeader = () => {
  return (
    <>
      <div className='browse-header'>
        <div className='featured-game'>
          <SectionWrapperSecondary>
            <SectionHeader>Featured Games</SectionHeader>
            <BrowserHeaderSlide />
          </SectionWrapperSecondary>
        </div>
        <div className='top-downloaded'>
          <SectionWrapperSecondary>
            <TopDownloadedGame />
          </SectionWrapperSecondary>
        </div>
      </div>
    </>
  )
}

export default BrowseHeader