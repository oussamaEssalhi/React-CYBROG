import { MostClip } from "../../components/index";
import "./MostClips.css";
import MostclipsData from "../../Data/MostClipsData";


const mostClips = MostclipsData.map((el) => {
  return (
    <MostClip key={el.id} clip={el.clip} image={el.image} view={el.view} />
  )
})





const MostClips = () => {

  return (

    < div className="most-clips" >
      {mostClips}

    </ div>
  )
}

export default MostClips