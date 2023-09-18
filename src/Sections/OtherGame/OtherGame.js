import "./OtherGame.css";
import { SectionHeader, OtherGameCarde } from "../../components/index";
import dataGame from "../../Data/MostPopularData"
const carde = dataGame.map((el) => {
  return (
    <OtherGameCarde image={el.image} title={el.title} category={el.category} Rate={el.Rate} download={el.download} />
  )
})

const OtherGame = () => {
  return (
    <>
      <SectionHeader>Other Related </SectionHeader>
      <div className="Cards">
        {carde}
      </div>


    </>

  )
}
export default OtherGame