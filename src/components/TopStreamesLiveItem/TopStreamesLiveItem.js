import './TopStreamesLiveItem.css'
import { FaCheckCircle } from 'react-icons/fa'
import{ LinkButton }from "../index"

const TopStreamesLiveItem = (props) => {
  return (
    <>
      <div className='top-streams-live-item'>
        <ul>
          <li> 0{props.id}</li>
          <li> <img src={props.image} alt='avatar' /></li>
          <li> <FaCheckCircle className='icone' /> {props.user}  </li>
          <li>  <LinkButton to='/#' > Follow</LinkButton></li>
        </ul>
      </div>
    </>
  )
}

export default TopStreamesLiveItem