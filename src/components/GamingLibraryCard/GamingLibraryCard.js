import "./GamingLibraryCard.css"
import{ SeconderyButton }from "../../components/index"

const GamingLibraryCard = (props) => {
  return (
    <div className="Gaming-library-card">
      <ul>
        <li><img src={props.image} alt="Gaming library " /></li>
        <li><h4>{props.title}</h4> <span>{props.category}</span></li>
        <li><h4>Date Added</h4> <span>{props.date_added}</span></li>
        <li><h4>Hours Played</h4> <span>{props.heur_played}</span></li>
        <li><h4>Currently</h4> <span>{props.download}</span></li>
        <li> 
          <SeconderyButton >download</SeconderyButton>
        </li>
      </ul>
    </div>
  )
}

export default GamingLibraryCard