import "./GamingLibrary.css"
import { SectionHeader, SectionWrapper, GamingLibraryCard } from "../../components/index";
import GamingLibriaryData from '../../Data/GamingLibriaryData';
const GamingLibrary = () => {
  const cardes = GamingLibriaryData.map((el) => {
    return < GamingLibraryCard key={el.id} image={el.image} title={el.title} category={el.category} date_added={el.date_added} heur_played={el.heur_played} download={el.download} />
  })
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="Gaming-library-cards">
          {cardes}
        </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLibrary