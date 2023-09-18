import "./SectionWrapper.css";

const SectionWrapper = (props) => {
    return (<div className="section-wrapper">
        {props.children}
    </div>
    );
};
const SectionWrapperSecondary = (props) => {
    return (<div className="SectionWrapperSecondary">
        {props.children}
    </div>
    );
};

export default SectionWrapper;
export { SectionWrapperSecondary };
