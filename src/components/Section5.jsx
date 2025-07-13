import Slider from "react-slick";

import product15 from "../assets/images/product/15.jpg";
import product16 from "../assets/images/product/16.jpg";
import product17 from "../assets/images/product/17.jpg";
import product18 from "../assets/images/product/18.jpg";
import product19 from "../assets/images/product/19.jpg";
import product20 from "../assets/images/product/20.jpg";

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

const Section5 = () => {
  const newItemSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="section newitem-part">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-heading">
              <h2>collected new items</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Slider {...newItemSettings} className="new-slider slider-arrow">
              <li>
                <div className="product-card" style={{ width: "208px" }}>
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text new">new</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart"></i>
                    </button>
                    <a className="product-image" href="product-video.html">
                      <img src={product15} alt="product" />
                    </a>
                    <div className="product-widget">
                      <a
                        className="fas fa-random"
                        href="compare.html"
                        title="Product Compare"
                      ></a>
                      <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                      ></a>
                      <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 className="product-name">
                      <a href="product-video.html">fresh green chilis</a>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del>
                      <span>
                        $28<small>/piece</small>
                      </span>
                    </h6>
                    <button className="product-add" title="Add to Cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus"></i>
                      </button>
                      <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-card" style={{ width: "208px" }}>
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text new">new</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart"></i>
                    </button>
                    <a className="product-image" href="product-video.html">
                      <img src={product16} alt="product" />
                    </a>
                    <div className="product-widget">
                      <a
                        className="fas fa-random"
                        href="compare.html"
                        title="Product Compare"
                      ></a>
                      <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                      ></a>
                      <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 className="product-name">
                      <a href="product-video.html">fresh green chilis</a>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del>
                      <span>
                        $28<small>/piece</small>
                      </span>
                    </h6>
                    <button className="product-add" title="Add to Cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus"></i>
                      </button>
                      <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-card" style={{ width: "208px" }}>
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text new">new</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart"></i>
                    </button>
                    <a className="product-image" href="product-video.html">
                      <img src={product17} alt="product" />
                    </a>
                    <div className="product-widget">
                      <a
                        className="fas fa-random"
                        href="compare.html"
                        title="Product Compare"
                      ></a>
                      <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                      ></a>
                      <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 className="product-name">
                      <a href="product-video.html">fresh green chilis</a>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del>
                      <span>
                        $28<small>/piece</small>
                      </span>
                    </h6>
                    <button className="product-add" title="Add to Cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus"></i>
                      </button>
                      <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-card" style={{ width: "208px" }}>
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text new">new</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart"></i>
                    </button>
                    <a className="product-image" href="product-video.html">
                      <img src={product18} alt="product" />
                    </a>
                    <div className="product-widget">
                      <a
                        className="fas fa-random"
                        href="compare.html"
                        title="Product Compare"
                      ></a>
                      <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                      ></a>
                      <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 className="product-name">
                      <a href="product-video.html">fresh green chilis</a>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del>
                      <span>
                        $28<small>/piece</small>
                      </span>
                    </h6>
                    <button className="product-add" title="Add to Cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus"></i>
                      </button>
                      <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-card" style={{ width: "208px" }}>
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text new">new</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart"></i>
                    </button>
                    <a className="product-image" href="product-video.html">
                      <img src={product19} alt="product" />
                    </a>
                    <div className="product-widget">
                      <a
                        className="fas fa-random"
                        href="compare.html"
                        title="Product Compare"
                      ></a>
                      <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                      ></a>
                      <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 className="product-name">
                      <a href="product-video.html">fresh green chilis</a>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del>
                      <span>
                        $28<small>/piece</small>
                      </span>
                    </h6>
                    <button className="product-add" title="Add to Cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus"></i>
                      </button>
                      <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="product-card" style={{ width: "208px" }}>
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text new">new</label>
                    </div>
                    <button className="product-wish wish">
                      <i className="fas fa-heart"></i>
                    </button>
                    <a className="product-image" href="product-video.html">
                      <img src={product20} alt="product" />
                    </a>
                    <div className="product-widget">
                      <a
                        className="fas fa-random"
                        href="compare.html"
                        title="Product Compare"
                      ></a>
                      <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                      ></a>
                      <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 className="product-name">
                      <a href="product-video.html">fresh green chilis</a>
                    </h6>
                    <h6 className="product-price">
                      <del>$34</del>
                      <span>
                        $28<small>/piece</small>
                      </span>
                    </h6>
                    <button className="product-add" title="Add to Cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div className="product-action">
                      <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus"></i>
                      </button>
                      <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </Slider>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="section-btn-25">
              <a className="btn btn-outline" href="shop-4column.html">
                <i className="fas fa-eye"></i>
                <span>show more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
