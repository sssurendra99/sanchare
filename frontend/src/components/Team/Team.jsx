import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava06 from "../../assets/images/ava-6.jpg";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: 2000,
    slidesToShow: 4,

    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            SlidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesTOShow: 1,
            SlidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <Slider {...settings}>
      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Leo Perera</h6>
            <p>Lead Travel Consultant</p>
          </div>
        </div>

        <p>
        Leo is the visionary behind Sanchare, with over 15 years of experience in the travel industry. His passion for showcasing the beauty of Sri Lanka drives our mission to provide exceptional travel experiences.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Maya Fernandoa</h6>
            <p>Head of Operations</p>
          </div>
        </div>

        <p>
        Maya ensures everything runs smoothly at Sanchare. With a background in logistics and a keen eye for detail, she coordinates all our services to guarantee a seamless experience for our clients.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Ravi Jayasinghe </h6>
            <p>Founder & CEO</p>
          </div>
        </div>

        <p>
        Ravi is the visionary behind Sanchare, with over 15 years of experience in the travel industry. His passion for showcasing the beauty of Sri Lanka drives our mission to provide exceptional travel experiences.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava06} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nisha Senanayake</h6>
            <p>Marketing Manager</p>
          </div>
        </div>

        <p>
        Nisha brings Sanchare to life through innovative marketing strategies. With a flair for creativity and a deep understanding of the travel market, she connects us with adventurers eager to explore Sri Lanka.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Leo Perera</h6>
            <p>Lead Travel Consultant</p>
          </div>
        </div>

        <p>
        Leo is the visionary behind Sanchare, with over 15 years of experience in the travel industry. His passion for showcasing the beauty of Sri Lanka drives our mission to provide exceptional travel experiences.
        </p>
      </div>

      <div className="px-3 py-4 team">
        <div className="gap-4 mt-3 team_Name d-flex align-items-center">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Maya Fernandoa</h6>
            <p>Head of Operations</p>
          </div>
        </div>

        <p>
        Maya ensures everything runs smoothly at Sanchare. With a background in logistics and a keen eye for detail, she coordinates all our services to guarantee a seamless experience for our clients.
        </p>
      </div>

    </Slider>
  );
};

export default Team;
