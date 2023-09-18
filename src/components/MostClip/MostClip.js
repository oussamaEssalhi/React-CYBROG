import './MostClip.css'
import { FaRegEye, FaPlay } from "react-icons/fa"
const MostClip = (props) => {
  return (
    <>
      <div className='most-clip'>
        <div className='most-clip-image'>
          <div className='icon-wrapper'>
            <FaPlay className='play-icon' />
          </div>
          <a href ="/#">
            <img src={props.image} alt='' />
          </a >
        </div>
        <div className='most-clip-description'>
          <span>{props.clip}</span>
          <span>
            <div className='icone'>
              <FaRegEye  /> 
            </div>
            <span className='views'>{props.view}</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default MostClip