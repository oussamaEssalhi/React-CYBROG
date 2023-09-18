import './Browse.css';
import { BrowseHeader, BrowserStream, MostPopularBrowser } from '../../Sections/index';

const Browse = () => {
  return (
    <>
      < BrowseHeader></ BrowseHeader>
      <BrowserStream/>
      <MostPopularBrowser/>
    </>
  )
}

export default Browse