import'./CardLiveStream.css'


const CardLiveStream = (props) => {
  return (
    <div className='card-ive-tream'>
      <div className='card-ive-tream-icon'>
        <img src={props.image} alt='' />
      </div >
      <div>
        <h4>{props.title}</h4>
      </div>
      <p>`${props.paragraph}`</p>

    </div>
  )
}

export default CardLiveStream