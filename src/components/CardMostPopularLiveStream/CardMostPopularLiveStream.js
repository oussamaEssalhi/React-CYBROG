import './CardMostPopularLiveStream.css';
import { FaEye, FaGamepad } from 'react-icons/fa6'

import { FaCheckCircle } from 'react-icons/fa';
const CardMostPopularLiveStream = (props) => {
    return (
        <>
            <div className='most-popular-live-stream'>

                <div className='live-stream-most-popular-card'>
                    <img src={props.imageLive} alt='' />
                    <div className='back-card'>
                        <div className='black-live-header'>
                            <h5>  <a href='/#' >Live</a> </h5>
                        </div>
                        <div className='black-live-footer'>
                            <div className='views-live'> <FaEye /> 1.2K</div>
                            <div className='title-game'> <FaGamepad /> CS-GO</div>
                        </div>
                    </div>
                </div>
                <div className='live-stream-most-popular-card-descr'>
                    <div className='user-image-live'>
                        <img src={props.avatar} alt='' />
                    </div>
                    <div className='desc-card'>
                        <div><div className='icon-desc-user'><FaCheckCircle /></div>{props.user}</div>
                        <div> {props.titleStream} </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMostPopularLiveStream;