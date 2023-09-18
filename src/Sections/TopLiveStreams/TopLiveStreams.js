import "./TopLiveStreams.css"
import { TopStreamesLiveItem } from "../../components/index"
import TopLiveStreamUsers from "../../Data/TopLiveStreamUsers";
const TopLiveStreams = () => {
  const ItemsTopLiveStreamUsers = TopLiveStreamUsers.map((el) => {
    return <TopStreamesLiveItem key={el.id} id={el.id} image={el.image} user={el.user} />
  })
  return (
    <>

      {ItemsTopLiveStreamUsers}
    </>

  )
}

export default TopLiveStreams