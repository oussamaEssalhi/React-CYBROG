import "./hero.css";
import { PrimaryButton } from "../../components/index";

const Hero = () => {
    return (
        <div className="main-hero ">
            <div className="hero-text">
                <h6 className="hero-subtitle">Welcome To cybrog</h6>
                <h4 className="hero-title">
                    <em>Browser</em> Our Popular Game Here
                </h4>
                <PrimaryButton >Brows Now</PrimaryButton>
            </div>
        </div>
    );
};

export default Hero;
