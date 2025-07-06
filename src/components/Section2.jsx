import product01 from "../assets/images/product/01.jpg";
import product02 from "../assets/images/product/02.jpg";
import product03 from "../assets/images/product/03.jpg";
import product04 from "../assets/images/product/04.jpg";
import product05 from "../assets/images/product/05.jpg";
import product06 from "../assets/images/product/06.jpg";
import product07 from "../assets/images/product/07.jpg";
import product08 from "../assets/images/product/08.jpg";
import product09 from "../assets/images/product/09.jpg";
import product10 from "../assets/images/product/10.jpg";

import home03 from "../assets/images/promo/home/03.jpg";

const Section2 = () => {
  return (
    <>
      <section className="section recent-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>recently sold items</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product01} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                    <label className="label-text new">new</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product02} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product03} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product04} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product05} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product06} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product07} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product08} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product09} alt="product" />
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
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src={product10} alt="product" />
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
      <div className="section promo-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="promo-img">
                <a href="#">
                  <img src={home03} alt="promo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
