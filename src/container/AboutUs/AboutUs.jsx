import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About US</h1>
          <img src={images.spoon} alt="abou_spoon" className="spoon_img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis quae consectetur fugiat laboriosam deleniti quod
            excepturi! Iste non sequi officiis et asperiores veniam doloremque,
            exercitationem placeat aliquam reprehenderit similique porro.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="abou_spoon" className="spoon_img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis quae consectetur fugiat laboriosam deleniti quod
            excepturi! Iste non sequi officiis et asperiores veniam doloremque,
            exercitationem placeat aliquam reprehenderit similique porro.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
