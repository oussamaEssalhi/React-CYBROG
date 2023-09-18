import "./MostPopular.css";

import { Card, SectionHeader, SectionWrapper } from "../../components/index";
import MostPopularData from '../../Data/MostPopularData'
const MostPopular = () => {

    const cardes = MostPopularData.map((el) => {
        return < Card key={el.id} image={el.image} title={el.title} category={el.category} Rate={el.Rate} download={el.download} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Most Popular</SectionHeader>
                <div className="most-popular-items">
                    {cardes}
                </div>
            </SectionWrapper>
        </>
    );
};

export default MostPopular;
