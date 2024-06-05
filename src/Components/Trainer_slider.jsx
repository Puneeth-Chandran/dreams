import React from "react";
import Slider from "react-slick";
import "./Trainer_slider.css";
import Rating from "@mui/material/Rating";
import Trainer_1 from "./Trainer_slider images/Trainer 1.png";
import Trainer_2 from "./Trainer_slider images/Trainer 2.png";
import Trainer_3 from "./Trainer_slider images/Trainer 3.png";
import Trainer_4 from "./Trainer_slider images/Rectangle 55.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const [value, setValue] = React.useState(4);

  var settings = {
    dots: true,
    autoplay: true,

    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div className="">
        <div className="trainer_card_continer">
          <div className="tainer_image_container">
            <img src={Trainer_1} alt="" className="trainer_image " />
          </div>

          <div className="trainer_content">
            <h5 className="mt-3 mb-3 ms-3 trainer_h" style={{ color: "black" }}>
              Rahul Sharma
            </h5>
            <p className="ms-3 mt-3 mb-3 trainer_p">
              Wow! This course is amazing! I used to struggle with UI/UX, but
              these hands-on projects made it so much easier. Now, I design
              confidently, thanks to the practical approach. The mentorship was
              top-notch and really made a difference
            </p>

            <Rating name="read-only" value={value} readOnly className="ms-3" />
          </div>
        </div>
      </div>

      {/* two */}

      <div>
        <div className="trainer_card_continer trainer_card_continer_2">
          <div className="tainer_image_container">
            <img src={Trainer_2} alt="" className="trainer_image trainer_image_2" />
          </div>

          <div className="trainer_content ">
            <h5 className="mt-3 mb-3 ms-3 trainer_h" style={{ color: "black" }}>
              Aditya Desai
            </h5>
            <p className="ms-3 mt-3 mb-3 trainer_p">
              I'm telling you, this UI/UX course is a game-changer. The way it
              simplifies concepts and makes projects enjoyable is beyond just
              learning – it's a belief that you can excel in UI/UX design.
            </p>

            <Rating name="read-only" value={value} readOnly className="ms-3" />
          </div>
        </div>
      </div>

      {/* three */}

      <div>
        <div className="trainer_card_continer">
          <div className="tainer_image_container">
            <img src={Trainer_4} alt="" className="trainer_image" />
          </div>

          <div className="trainer_content">
            <h5 className="mt-3 mb-3 ms-3 trainer_h" style={{ color: "black" }}>
              Rohit Shah
            </h5>
            <p className="ms-3 mt-3 mb-3 trainer_p">
              UI/UX learning made simple. This course stands out.
              Straightforward courses, projects that make you believe you can
              grasp it.
            </p>

            <Rating name="read-only" value={value} readOnly className="ms-3" />
          </div>
        </div>
      </div>

      {/* four */}

      <div>
        <div className="trainer_card_continer">
          <div className="tainer_image_container">
            <img src={Trainer_3} alt="" className="trainer_image" />
          </div>

          <div className="trainer_content">
            <h5 className="mt-3 mb-3 ms-3 trainer_h" style={{ color: "black" }}>
              Ananya Patel
            </h5>
            <p className="ms-3 mt-3 mb-3 trainer_p">
              UI/UX learning should be more than theory, and this course gets
              that. It's like a hands-on workshop where each project is a step
              towards becoming a confident designer."
            </p>

            <Rating name="read-only" value={value} readOnly className="ms-3" />
          </div>
        </div>
      </div>
    </Slider>
  );
}
