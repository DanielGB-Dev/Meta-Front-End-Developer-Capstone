import "../styles/About.css";
import img1 from "../assets/restaurant chef B.jpg";
import img2 from "../assets/Mario and Adrian A.jpg";
const About = () => {
  return (
    <div className="abt-container">
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
      </div>
      <div className="abt-img-container">
        <div className="abt-img">
          <img id="img1" src={img1} />
        </div>
        <div className="abt-img">
          <img id="img2" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default About;
