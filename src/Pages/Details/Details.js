import "./Details.css"
import { FortniteDetails, HeaderDetails, SectionWrapper, FortniteDetailsGallry  } from "../../components/index"
import { OtherGame } from "../../Sections/index"


const Details = () => {
  return (
    <>
      <HeaderDetails />
        <SectionWrapper >
        <FortniteDetails start="4.8" download="2.3M" server="36GB" game="action"/>
        <FortniteDetailsGallry/>
        </SectionWrapper>
        <SectionWrapper>
            <OtherGame ></OtherGame>
        </SectionWrapper>

    </>
  )
}

export default Details