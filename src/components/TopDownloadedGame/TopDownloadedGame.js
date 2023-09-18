import "./TopDownloadedGame.css";
import { SectionHeader, CardDownload } from '../index';
import GameDownloadData from "../../Data/GameDownloadData";


const TopDownloadedGame = () => {

    const downloadGame = GameDownloadData.map((el) => {
        return <CardDownload key={el.id} title={el.title} Rate={el.Rate} image={el.image} category={el.category} download={el.download} />

    })
    return (
        <>
            <SectionHeader>Top Downloaded</SectionHeader>
            {downloadGame}
            <div className="more-download">
                <a href="/">View All Games</a>
            </div>
        </>
    )
}

export default TopDownloadedGame;