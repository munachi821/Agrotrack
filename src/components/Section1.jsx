import Slider from "react-slick";

import index01 from "../assets/images/home/index/01.png";
import index02 from "../assets/images/home/index/02.png";

import Suggest01 from "../assets/images/suggest/01.jpg";
import Suggest02 from "../assets/images/suggest/02.jpg";
import Suggest03 from "../assets/images/suggest/03.jpg";
import Suggest04 from "../assets/images/suggest/04.jpg";
import Suggest05 from "../assets/images/suggest/05.jpg";
import Suggest06 from "../assets/images/suggest/06.jpg";
import Suggest07 from "../assets/images/suggest/07.jpg";
import Suggest08 from "../assets/images/suggest/08.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components using your original icons
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i
        className="icofont-arrow-right dandik slick-arrow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "1rem",
        }}
      ></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i
        className="icofont-arrow-left bamdik slick-arrow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "1rem",
        }}
      ></i>
    </div>
  );
};

const Section1 = () => {
  // Banner Slider Settings
  const bannerSettings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  // Suggest Slider Settings
  const suggestSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  const suggestItems = [
    { img: Suggest01, title: "vegetables", count: "34 items" },
    { img: Suggest02, title: "fruits", count: "89 items" },
    { img: Suggest03, title: "groceries", count: "45 items" },
    { img: Suggest04, title: "dairy farm", count: "83 items" },
    { img: Suggest05, title: "sea foods", count: "40 items" },
    { img: Suggest06, title: "vegan foods", count: "57 items" },
    { img: Suggest07, title: "dry foods", count: "23 items" },
    { img: Suggest08, title: "fast foods", count: "97 items" },
  ];

  return (
    <>
      {/* Home Index Slider */}
      <Slider
        {...bannerSettings}
        className="home-index-slider slider-arrow slider-dots"
      >
        <div className="banner-part banner-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="banner-content">
                  <h1>free home delivery within 24 hours now.</h1>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit modi
                    consequatur eaque expedita porro necessitatibus eveniet
                    voluptatum quis pariatur Laboriosam molestiae architecto
                    excepturi
                  </p>
                  <div className="banner-btn">
                    <a className="btn btn-inline" href="shop-4column.html">
                      <i className="fas fa-shopping-basket"></i>
                      <span>shop now</span>
                    </a>
                    <a className="btn btn-outline" href="offer.html">
                      <i className="icofont-sale-discount"></i>
                      <span>get offer</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="banner-img">
                  <img src={index01} alt="index" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-part banner-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="banner-img">
                  <img src={index02} alt="index" />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="banner-content">
                  <h1>free home delivery within 24 hours now.</h1>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit modi
                    consequatur eaque expedita porro necessitatibus eveniet
                    voluptatum quis pariatur Laboriosam molestiae architecto
                    excepturi
                  </p>
                  <div className="banner-btn">
                    <a className="btn btn-inline" href="shop-4column.html">
                      <i className="fas fa-shopping-basket"></i>
                      <span>shop now</span>
                    </a>
                    <a className="btn btn-outline" href="offer.html">
                      <i className="icofont-sale-discount"></i>
                      <span>get offer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Suggest Slider */}
      <section className="section suggest-part">
        <div className="container">
          <Slider {...suggestSettings} className="suggest-slider slider-arrow">
            {suggestItems.map((item, index) => (
              <div key={index}>
                <a
                  className="suggest-card"
                  href="shop-4column.html"
                  style={{ width: "212px" }}
                >
                  <img src={item.img} alt={item.title} />
                  <h5>
                    {item.title} <span>{item.count}</span>
                  </h5>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Section1;
