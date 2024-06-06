import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: 2000,
    slidesToShow: 3,

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
      <div className="px-3 py-4 testimonial">
        <p>
        "Thanks to Sanchare, we discovered hidden gems in Sri Lanka we would have never found on our own. Excellent service and support!"
        </p>

        <div className="gap-4 mt-3 d-flex align-items-center">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Nimal Silva</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 testimonial">
        <p>
        "Sanchare made our Sri Lanka trip unforgettable! The seamless booking process and the personalized itinerary were perfect. Highly recommend!"
        </p>

        <div className="gap-4 mt-3 d-flex align-items-center">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Semini Abimanthra</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 testimonial">
        <p>
        "From start to finish, Sanchare exceeded our expectations. The team’s local knowledge and attention to detail made our vacation stress-free and enjoyable."
        </p>

        <div className="gap-4 mt-3 d-flex align-items-center">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Sanuth pasan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 testimonial">
        <p>
        "Sanchare made our Sri Lanka trip unforgettable! The seamless booking process and the personalized itinerary were perfect. Highly recommend!"
        </p>

        <div className="gap-4 mt-3 d-flex align-items-center">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Semini Abimanthra</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 testimonial">
        <p>
        "From start to finish, Sanchare exceeded our expectations. The team’s local knowledge and attention to detail made our vacation stress-free and enjoyable."
        </p>

        <div className="gap-4 mt-3 d-flex align-items-center">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mt-3 mb-0">Sanuth pasan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
