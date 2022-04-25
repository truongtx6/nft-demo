import React from "react";
import NE1 from "../../assets/img/ne1-min.png";
import NE2 from "../../assets/img/ne2-min.png";
import NE3 from "../../assets/img/ne3-min.png";
import NE4 from "../../assets/img/ne4-min.png";
import NE5 from "../../assets/img/ne5-min.png";
import NE6 from "../../assets/img/ne6-min.png";
import NE7 from "../../assets/img/ne7-min.png";
import NE8 from "../../assets/img/ne8-min.png";
import NE9 from "../../assets/img/ne9-min.png";
import Slider from "react-slick";
import "./index.css";

function SliderList() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slide-list-nft">
      <Slider {...settings}>
        <div className="check">
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
          <a href="#">
            <img src={NE1} alt="nft" />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default SliderList;
