import "./DescriptionsMainProfile.css"

const DescriptionsMainProfile = (props) => {
  return (
    <ul className="description-profile">
      <li> <span className="firestSpan">Games Downloaded</span> <span>{props.download}</span></li>
      <li> <span className="firestSpan">Friends Online</span> <span>{props.online}</span></li>
      <li> <span className="firestSpan">Live Streams</span> <span>{props.live}</span></li>
      <li> <span className="firestSpan">Clips</span> <span>{props.clips}</span></li>
    </ul>
  )
}

export default DescriptionsMainProfile