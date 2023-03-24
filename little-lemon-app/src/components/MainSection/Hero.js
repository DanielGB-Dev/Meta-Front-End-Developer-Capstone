import "../../styles/Hero.css";
import HeroImg from "../../assets/restauranfood.jpg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="txt-container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="img-container">
        <img src={HeroImg} />
      </div>
    </div>
  );
};

export default Hero;