import product10 from "../assets/images/product/10.jpg";
import product09 from "../assets/images/product/09.jpg";
import product11 from "../assets/images/product/11.jpg";
import product12 from "../assets/images/product/12.jpg";
import product13 from "../assets/images/product/13.jpg";
import product14 from "../assets/images/product/14.jpg";

const Section3 = () => {
  return (
    <section className="section feature-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>our featured items</h2>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
          <div className="col">
            <div className="feature-card">
              <div className="feature-media">
                <div className="feature-label">
                  <label className="label-text feat">feature</label>
                </div>
                <button className="feature-wish wish">
                  <i className="fas fa-heart"></i>
                </button>
                <a className="feature-image" href="product-video.html">
                  <img src={product09} alt="product" />
                </a>
                <div className="feature-widget">
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
              <div className="feature-content">
                <h6 className="feature-name">
                  <a href="product-video.html">fresh organic green chilis</a>
                </h6>
                <div className="feature-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <a href="product-video.html">(3 Reviews)</a>
                </div>
                <h6 className="feature-price">
                  <del>$34</del>
                  <span>
                    $28<small>/piece</small>
                  </span>
                </h6>
                <p className="feature-desc">
                  Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                  amet olor ut eveniet commodi...
                </p>
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
          </div>
          <div className="col">
            <div className="feature-card">
              <div className="feature-media">
                <div className="feature-label">
                  <label className="label-text feat">feature</label>
                </div>
                <button className="feature-wish wish">
                  <i className="fas fa-heart"></i>
                </button>
                <a className="feature-image" href="product-video.html">
                  <img src={product10} alt="product" />
                </a>
                <div className="feature-widget">
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
              <div className="feature-content">
                <h6 className="feature-name">
                  <a href="product-video.html">fresh organic green chilis</a>
                </h6>
                <div className="feature-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <a href="product-video.html">(3 Reviews)</a>
                </div>
                <h6 className="feature-price">
                  <del>$34</del>
                  <span>
                    $28<small>/piece</small>
                  </span>
                </h6>
                <p className="feature-desc">
                  Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                  amet olor ut eveniet commodi...
                </p>
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
          </div>
          <div className="col">
            <div className="feature-card">
              <div className="feature-media">
                <div className="feature-label">
                  <label className="label-text feat">feature</label>
                </div>
                <button className="feature-wish wish">
                  <i className="fas fa-heart"></i>
                </button>
                <a className="feature-image" href="product-video.html">
                  <img src={product11} alt="product" />
                </a>
                <div className="feature-widget">
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
              <div className="feature-content">
                <h6 className="feature-name">
                  <a href="product-video.html">fresh organic green chilis</a>
                </h6>
                <div className="feature-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <a href="product-video.html">(3 Reviews)</a>
                </div>
                <h6 className="feature-price">
                  <del>$34</del>
                  <span>
                    $28<small>/piece</small>
                  </span>
                </h6>
                <p className="feature-desc">
                  Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                  amet olor ut eveniet commodi...
                </p>
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
          </div>
          <div className="col">
            <div className="feature-card">
              <div className="feature-media">
                <div className="feature-label">
                  <label className="label-text feat">feature</label>
                </div>
                <button className="feature-wish wish">
                  <i className="fas fa-heart"></i>
                </button>
                <a className="feature-image" href="product-video.html">
                  <img src={product12} alt="product" />
                </a>
                <div className="feature-widget">
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
              <div className="feature-content">
                <h6 className="feature-name">
                  <a href="product-video.html">fresh organic green chilis</a>
                </h6>
                <div className="feature-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <a href="product-video.html">(3 Reviews)</a>
                </div>
                <h6 className="feature-price">
                  <del>$34</del>
                  <span>
                    $28<small>/piece</small>
                  </span>
                </h6>
                <p className="feature-desc">
                  Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                  amet olor ut eveniet commodi...
                </p>
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
          </div>
          <div className="col">
            <div className="feature-card">
              <div className="feature-media">
                <div className="feature-label">
                  <label className="label-text feat">feature</label>
                </div>
                <button className="feature-wish wish">
                  <i className="fas fa-heart"></i>
                </button>
                <a className="feature-image" href="product-video.html">
                  <img src={product13} alt="product" />
                </a>
                <div className="feature-widget">
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
              <div className="feature-content">
                <h6 className="feature-name">
                  <a href="product-video.html">fresh organic green chilis</a>
                </h6>
                <div className="feature-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <a href="product-video.html">(3 Reviews)</a>
                </div>
                <h6 className="feature-price">
                  <del>$34</del>
                  <span>
                    $28<small>/piece</small>
                  </span>
                </h6>
                <p className="feature-desc">
                  Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                  amet olor ut eveniet commodi...
                </p>
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
          </div>
          <div className="col">
            <div className="feature-card">
              <div className="feature-media">
                <div className="feature-label">
                  <label className="label-text feat">feature</label>
                </div>
                <button className="feature-wish wish">
                  <i className="fas fa-heart"></i>
                </button>
                <a className="feature-image" href="product-video.html">
                  <img src={product14} alt="product" />
                </a>
                <div className="feature-widget">
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
              <div className="feature-content">
                <h6 className="feature-name">
                  <a href="product-video.html">fresh organic green chilis</a>
                </h6>
                <div className="feature-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <a href="product-video.html">(3 Reviews)</a>
                </div>
                <h6 className="feature-price">
                  <del>$34</del>
                  <span>
                    $28<small>/piece</small>
                  </span>
                </h6>
                <p className="feature-desc">
                  Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                  amet olor ut eveniet commodi...
                </p>
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
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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

export default Section3;
