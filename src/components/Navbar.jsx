import user from "../assets/images/user.png";
import logo from "../assets/images/logo.png";
import product01 from "../assets/images/product/01.jpg";
import product02 from "../assets/images/product/02.jpg";
import product03 from "../assets/images/product/03.jpg";
import product04 from "../assets/images/product/04.jpg";
import product05 from "../assets/images/product/05.jpg";

const Navbar = () => {
  return (
    <>
      <div className="backdrop"></div>
      <a
        className="backtop fas fa-arrow-up"
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></a>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="header-top-welcome">
                <p>Welcome to Ecomart in Your Dream Online Store!</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-3">
              <div className="header-top-select">
                <div className="header-select">
                  <i className="icofont-world"></i>
                  <select className="select">
                    <option value="english" defaultValue="selected">
                      english
                    </option>
                    <option value="bangali">bangali</option>
                    <option value="arabic">arabic</option>
                  </select>
                </div>
                <div className="header-select">
                  <i className="icofont-money"></i>
                  <select className="select">
                    <option value="english" defaultValue="selected">
                      doller
                    </option>
                    <option value="bangali">pound</option>
                    <option value="arabic">taka</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-4">
              <ul className="header-top-list">
                <li>
                  <a href="offer.html">offers</a>
                </li>
                <li>
                  <a href="faq.html">need help</a>
                </li>
                <li>
                  <a href="contact.html">contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <img src={user} alt="user" />
              </button>
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
              <button className="header-src">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <a className="header-logo" href="index.html">
              <img src={logo} alt="logo" />
            </a>
            <a className="header-widget" href="login.html" title="My Account">
              <img src={user} alt="user" />
              <span>join</span>
            </a>

            <form className="header-form">
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>

            <div className="header-widget-group">
              <a
                className="header-widget"
                href="compare.html"
                title="Compare List"
              >
                <i className="fas fa-random"></i>
                <sup>0</sup>
              </a>
              <a
                className="header-widget"
                href="wishlist.html"
                title="Wishlist"
              >
                <i className="fas fa-heart"></i>
                <sup>0</sup>
              </a>
              <button className="header-widget header-cart" title="Cartlist">
                <i className="fas fa-shopping-basket"></i>
                <sup>9+</sup>
                <span>
                  total price<small>$345.00</small>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar-content">
                <ul className="navbar-list">
                  <li className="navbar-item dropdown">
                    <a className="navbar-link dropdown-arrow" href="#">
                      home
                    </a>
                    <ul className="dropdown-position-list">
                      <li>
                        <a href="home-grid.html">Home grid</a>
                      </li>
                      <li>
                        <a href="index.html">Home index</a>
                      </li>
                      <li>
                        <a href="home-classNameic.html">Home classNameic</a>
                      </li>
                      <li>
                        <a href="home-standard.html">Home standard</a>
                      </li>
                      <li>
                        <a href="home-category.html">Home category</a>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-item dropdown-megamenu">
                    <a className="navbar-link dropdown-arrow" href="#">
                      shop
                    </a>
                    <div className="megamenu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">shop pages</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="shop-5column.html">shop 5 column</a>
                                </li>
                                <li>
                                  <a href="shop-4column.html">shop 4 column</a>
                                </li>
                                <li>
                                  <a href="shop-3column.html">shop 3 column</a>
                                </li>
                                <li>
                                  <a href="shop-2column.html">shop 2 column</a>
                                </li>
                                <li>
                                  <a href="shop-1column.html">shop 1 column</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">product pages</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="product-tab.html">
                                    product single tab
                                  </a>
                                </li>
                                <li>
                                  <a href="product-grid.html">
                                    product single grid
                                  </a>
                                </li>
                                <li>
                                  <a href="product-video.html">
                                    product single video
                                  </a>
                                </li>
                                <li>
                                  <a href="product-simple.html">
                                    product single simple
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">user action</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="wishlist.html">wishlist</a>
                                </li>
                                <li>
                                  <a href="compare.html">compare</a>
                                </li>
                                <li>
                                  <a href="checkout.html">checkout</a>
                                </li>
                                <li>
                                  <a href="orderlist.html">order history</a>
                                </li>
                                <li>
                                  <a href="invoice.html">order invoice</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">other pages</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="all-category.html">all Category</a>
                                </li>
                                <li>
                                  <a href="brand-list.html">brand list</a>
                                </li>
                                <li>
                                  <a href="brand-single.html">brand single</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="navbar-item dropdown-megamenu">
                    <a className="navbar-link dropdown-arrow" href="#">
                      category
                    </a>
                    <div className="megamenu">
                      <div className="container megamenu-scroll">
                        <div className="row row-cols-5">
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">vegetables</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">carrot</a>
                                </li>
                                <li>
                                  <a href="#">broccoli</a>
                                </li>
                                <li>
                                  <a href="#">asparagus</a>
                                </li>
                                <li>
                                  <a href="#">cauliflower</a>
                                </li>
                                <li>
                                  <a href="#">eggplant</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">fruits</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">Apple</a>
                                </li>
                                <li>
                                  <a href="#">orange</a>
                                </li>
                                <li>
                                  <a href="#">banana</a>
                                </li>
                                <li>
                                  <a href="#">strawberrie</a>
                                </li>
                                <li>
                                  <a href="#">watermelon</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">dairy farms</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">Butter</a>
                                </li>
                                <li>
                                  <a href="#">Cheese</a>
                                </li>
                                <li>
                                  <a href="#">Milk</a>
                                </li>
                                <li>
                                  <a href="#">Eggs</a>
                                </li>
                                <li>
                                  <a href="#">cream</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">seafoods</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">Lobster</a>
                                </li>
                                <li>
                                  <a href="#">Octopus</a>
                                </li>
                                <li>
                                  <a href="#">Shrimp</a>
                                </li>
                                <li>
                                  <a href="#">Halabos</a>
                                </li>
                                <li>
                                  <a href="#">Maeuntang</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">diet foods</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">Salmon</a>
                                </li>
                                <li>
                                  <a href="#">Avocados</a>
                                </li>
                                <li>
                                  <a href="#">Leafy Greens</a>
                                </li>
                                <li>
                                  <a href="#">Boiled Potatoes</a>
                                </li>
                                <li>
                                  <a href="#">Cottage Cheese</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">fast foods</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">burger</a>
                                </li>
                                <li>
                                  <a href="#">milkshake</a>
                                </li>
                                <li>
                                  <a href="#">sandwich</a>
                                </li>
                                <li>
                                  <a href="#">doughnut</a>
                                </li>
                                <li>
                                  <a href="#">pizza</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">drinks</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">cocktail</a>
                                </li>
                                <li>
                                  <a href="#">hard soda</a>
                                </li>
                                <li>
                                  <a href="#">shampain</a>
                                </li>
                                <li>
                                  <a href="#">Wine</a>
                                </li>
                                <li>
                                  <a href="#">barley</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">meats</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">Meatball</a>
                                </li>
                                <li>
                                  <a href="#">Sausage</a>
                                </li>
                                <li>
                                  <a href="#">Poultry</a>
                                </li>
                                <li>
                                  <a href="#">chicken</a>
                                </li>
                                <li>
                                  <a href="#">Cows</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">fishes</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">scads</a>
                                </li>
                                <li>
                                  <a href="#">pomfret</a>
                                </li>
                                <li>
                                  <a href="#">groupers</a>
                                </li>
                                <li>
                                  <a href="#">anchovy</a>
                                </li>
                                <li>
                                  <a href="#">mackerel</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">dry foods</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="#">noodles</a>
                                </li>
                                <li>
                                  <a href="#">Powdered milk</a>
                                </li>
                                <li>
                                  <a href="#">nut & yeast</a>
                                </li>
                                <li>
                                  <a href="#">almonds</a>
                                </li>
                                <li>
                                  <a href="#">pumpkin</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="navbar-item dropdown">
                    <a className="navbar-link dropdown-arrow" href="#">
                      pages
                    </a>
                    <ul className="dropdown-position-list">
                      <li>
                        <a href="faq.html">faqs</a>
                      </li>
                      <li>
                        <a href="offer.html">offers</a>
                      </li>
                      <li>
                        <a href="profile.html">my profile</a>
                      </li>
                      <li>
                        <a href="wallet.html">my wallet</a>
                      </li>
                      <li>
                        <a href="about.html">about us</a>
                      </li>
                      <li>
                        <a href="contact.html">contact us</a>
                      </li>
                      <li>
                        <a href="privacy.html">privacy policy</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">coming soon</a>
                      </li>
                      <li>
                        <a href="blank-page.html">blank page</a>
                      </li>
                      <li>
                        <a href="error.html">404 Error</a>
                      </li>
                      <li>
                        <a href="email-template.html">email template</a>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-item dropdown">
                    <a className="navbar-link dropdown-arrow" href="#">
                      authentic
                    </a>
                    <ul className="dropdown-position-list">
                      <li>
                        <a href="login.html">login</a>
                      </li>
                      <li>
                        <a href="register.html">register</a>
                      </li>
                      <li>
                        <a href="reset-password.html">reset password</a>
                      </li>
                      <li>
                        <a href="change-password.html">change password</a>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-item dropdown">
                    <a className="navbar-link dropdown-arrow" href="#">
                      blogs
                    </a>
                    <ul className="dropdown-position-list">
                      <li>
                        <a href="blog-grid.html">blog grid</a>
                      </li>
                      <li>
                        <a href="blog-standard.html">blog standard</a>
                      </li>
                      <li>
                        <a href="blog-details.html">blog details</a>
                      </li>
                      <li>
                        <a href="blog-author.html">blog author</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="navbar-info-group">
                  <div className="navbar-info">
                    <i className="icofont-ui-touch-phone"></i>
                    <p>
                      <small>call us</small>
                      <span>(+880) 183 8288 389</span>
                    </p>
                  </div>
                  <div className="navbar-info">
                    <i className="icofont-ui-email"></i>
                    <p>
                      <small>email us</small>
                      <span>support@example.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside className="category-sidebar">
        <div className="category-header">
          <h4 className="category-title">
            <i className="fas fa-align-left"></i>
            <span>categories</span>
          </h4>
          <button className="category-close">
            <i className="icofont-close"></i>
          </button>
        </div>
        <ul className="category-list">
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-vegetable"></i>
              <span>vegetables</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">asparagus</a>
              </li>
              <li>
                <a href="#">broccoli</a>
              </li>
              <li>
                <a href="#">carrot</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-groceries"></i>
              <span>groceries</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Grains & Bread</a>
              </li>
              <li>
                <a href="#">Dairy & Eggs</a>
              </li>
              <li>
                <a href="#">Oil & Fat</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-fruit"></i>
              <span>fruits</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Apple</a>
              </li>
              <li>
                <a href="#">Orange</a>
              </li>
              <li>
                <a href="#">Strawberry</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-dairy-products"></i>
              <span>dairy farm</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Egg</a>
              </li>
              <li>
                <a href="#">milk</a>
              </li>
              <li>
                <a href="#">butter</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-crab"></i>
              <span>sea foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Lobster</a>
              </li>
              <li>
                <a href="#">Octopus</a>
              </li>
              <li>
                <a href="#">Shrimp</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-salad"></i>
              <span>diet foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Salmon</a>
              </li>
              <li>
                <a href="#">Potatoes</a>
              </li>
              <li>
                <a href="#">Greens</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-dried-fruit"></i>
              <span>dry foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">noodles</a>
              </li>
              <li>
                <a href="#">Powdered milk</a>
              </li>
              <li>
                <a href="#">nut & yeast</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-fast-food"></i>
              <span>fast foods</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">mango</a>
              </li>
              <li>
                <a href="#">plumsor</a>
              </li>
              <li>
                <a href="#">raisins</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-cheers"></i>
              <span>drinks</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Wine</a>
              </li>
              <li>
                <a href="#">Juice</a>
              </li>
              <li>
                <a href="#">Water</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-beverage"></i>
              <span>coffee</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Cappuchino</a>
              </li>
              <li>
                <a href="#">Espresso</a>
              </li>
              <li>
                <a href="#">Latte</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-barbecue"></i>
              <span>meats</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Meatball</a>
              </li>
              <li>
                <a href="#">Sausage</a>
              </li>
              <li>
                <a href="#">Poultry</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="#">
              <i className="flaticon-fish"></i>
              <span>fishes</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">Agujjim</a>
              </li>
              <li>
                <a href="#">saltfish</a>
              </li>
              <li>
                <a href="#">pazza</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="category-footer">
          <p>
            All Rights Reserved by <a href="#">Mironcoder</a>
          </p>
        </div>
      </aside>

      <aside className="cart-sidebar">
        <div className="cart-header">
          <div className="cart-total">
            <i className="fas fa-shopping-basket"></i>
            <span>total item (5)</span>
          </div>
          <button className="cart-close">
            <i className="icofont-close"></i>
          </button>
        </div>
        <ul className="cart-list">
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={product01} alt="product" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
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
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={product02} alt="product" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
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
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={product03} alt="product" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
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
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={product04} alt="product" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
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
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div className="cart-media">
              <a href="#">
                <img src={product05} alt="product" />
              </a>
              <button className="cart-delete">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
            <div className="cart-info-group">
              <div className="cart-info">
                <h6>
                  <a href="product-single.html">existing product name</a>
                </h6>
                <p>Unit Price - $8.75</p>
              </div>
              <div className="cart-action-group">
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
                <h6>$56.98</h6>
              </div>
            </div>
          </li>
        </ul>
        <div className="cart-footer">
          <button className="coupon-btn">Do you have a coupon code?</button>
          <form className="coupon-form">
            <input type="text" placeholder="Enter your coupon code" />
            <button type="submit">
              <span>apply</span>
            </button>
          </form>
          <a className="cart-checkout-btn" href="checkout.html">
            <span className="checkout-label">Proceed to Checkout</span>
            <span className="checkout-price">$369.78</span>
          </a>
        </div>
      </aside>

      <aside className="nav-sidebar">
        <div className="nav-header">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <button className="nav-close">
            <i className="icofont-close"></i>
          </button>
        </div>
        <div className="nav-content">
          <div className="nav-btn">
            <a className="btn btn-inline" href="login.html">
              <i className="fa fa-unlock-alt"></i>
              <span>join here</span>
            </a>
          </div>
          {/* This commentable code show when user login or register */}
          {/* <div className="nav-profile">
                    <a className="nav-user" href="#"><img src={user} alt="user"/></a>
                    <h4 className="nav-name"><a href="profile.html">Miron Mahmud</a></h4>
                </div> */}
          <div className="nav-select-group">
            <div className="nav-select">
              <i className="icofont-world"></i>
              <select className="select">
                <option value="english" selected>
                  English
                </option>
                <option value="bangali">Bangali</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div className="nav-select">
              <i className="icofont-money"></i>
              <select className="select">
                <option value="english" selected>
                  Doller
                </option>
                <option value="bangali">Pound</option>
                <option value="arabic">Taka</option>
              </select>
            </div>
          </div>
          <ul className="nav-list">
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-home"></i>Home
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="home-grid.html">Home grid</a>
                </li>
                <li>
                  <a href="index.html">Home index</a>
                </li>
                <li>
                  <a href="home-classNameic.html">Home classNameic</a>
                </li>
                <li>
                  <a href="home-standard.html">Home standard</a>
                </li>
                <li>
                  <a href="home-category.html">Home category</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-food-cart"></i>shop
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="shop-5column.html">shop 5 column</a>
                </li>
                <li>
                  <a href="shop-4column.html">shop 4 column</a>
                </li>
                <li>
                  <a href="shop-3column.html">shop 3 column</a>
                </li>
                <li>
                  <a href="shop-2column.html">shop 2 column</a>
                </li>
                <li>
                  <a href="shop-1column.html">shop 1 column</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-page"></i>product
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="product-tab.html">product tab</a>
                </li>
                <li>
                  <a href="product-grid.html">product grid</a>
                </li>
                <li>
                  <a href="product-video.html">product video</a>
                </li>
                <li>
                  <a href="product-simple.html">product simple</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-bag-alt"></i>my account
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="profile.html">profile</a>
                </li>
                <li>
                  <a href="wallet.html">wallet</a>
                </li>
                <li>
                  <a href="wishlist.html">wishlist</a>
                </li>
                <li>
                  <a href="compare.html">compare</a>
                </li>
                <li>
                  <a href="checkout.html">checkout</a>
                </li>
                <li>
                  <a href="orderlist.html">order history</a>
                </li>
                <li>
                  <a href="invoice.html">order invoice</a>
                </li>
                <li>
                  <a href="email-template.html">email template</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-lock"></i>authentication
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="login.html">login</a>
                </li>
                <li>
                  <a href="register.html">register</a>
                </li>
                <li>
                  <a href="reset-password.html">reset password</a>
                </li>
                <li>
                  <a href="change-password.html">change password</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="#">
                <i className="icofont-book-alt"></i>blogs
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="blog-grid.html">blog grid</a>
                </li>
                <li>
                  <a href="blog-standard.html">blog standard</a>
                </li>
                <li>
                  <a href="blog-details.html">blog details</a>
                </li>
                <li>
                  <a href="blog-author.html">blog author</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="offer.html">
                <i className="icofont-sale-discount"></i>offers
              </a>
            </li>
            <li>
              <a className="nav-link" href="about.html">
                <i className="icofont-info-circle"></i>about us
              </a>
            </li>
            <li>
              <a className="nav-link" href="faq.html">
                <i className="icofont-support-faq"></i>need help
              </a>
            </li>
            <li>
              <a className="nav-link" href="contact.html">
                <i className="icofont-contacts"></i>contact us
              </a>
            </li>
            <li>
              <a className="nav-link" href="privacy.html">
                <i className="icofont-warning"></i>privacy policy
              </a>
            </li>
            <li>
              <a className="nav-link" href="coming-soon.html">
                <i className="icofont-options"></i>coming soon
              </a>
            </li>
            <li>
              <a className="nav-link" href="error.html">
                <i className="icofont-ui-block"></i>404 error
              </a>
            </li>
            <li>
              <a className="nav-link" href="login.html">
                <i className="icofont-logout"></i>logout
              </a>
            </li>
          </ul>
          <div className="nav-info-group">
            <div className="nav-info">
              <i className="icofont-ui-touch-phone"></i>
              <p>
                <small>call us</small>
                <span>(+880) 183 8288 389</span>
              </p>
            </div>
            <div className="nav-info">
              <i className="icofont-ui-email"></i>
              <p>
                <small>email us</small>
                <span>support@example.com</span>
              </p>
            </div>
          </div>
          <div className="nav-footer">
            <p>
              All Rights Reserved by <a href="#">Mironcoder</a>
            </p>
          </div>
        </div>
      </aside>

      <div className="mobile-menu">
        <a href="index.html" title="Home Page">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <button className="cate-btn" title="Category List">
          <i className="fas fa-list"></i>
          <span>category</span>
        </button>
        <button className="cart-btn" title="Cartlist">
          <i className="fas fa-shopping-basket"></i>
          <span>cartlist</span>
          <sup>9+</sup>
        </button>
        <a href="wishlist.html" title="Wishlist">
          <i className="fas fa-heart"></i>
          <span>wishlist</span>
          <sup>0</sup>
        </a>
        <a href="compare.html" title="Compare List">
          <i className="fas fa-random"></i>
          <span>compare</span>
          <sup>0</sup>
        </a>
      </div>

      <div className="modal fade" id="product-view">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              className="modal-close icofont-close"
              data-bs-dismiss="modal"
            ></button>
            <div className="product-view">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="view-gallery">
                    <div className="view-label-group">
                      <label className="view-label new">new</label>
                      <label className="view-label off">-10%</label>
                    </div>
                    <ul className="preview-slider slider-arrow">
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                    </ul>
                    <ul className="thumb-slider">
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                      <li>
                        <img src={product01} alt="product" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="view-details">
                    <h3 className="view-name">
                      <a href="product-video.html">existing product name</a>
                    </h3>
                    <div className="view-meta">
                      <p>
                        SKU:<span>1234567</span>
                      </p>
                      <p>
                        BRAND:<a href="#">radhuni</a>
                      </p>
                    </div>
                    <div className="view-rating">
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="active icofont-star"></i>
                      <i className="icofont-star"></i>
                      <a href="product-video.html">(3 reviews)</a>
                    </div>
                    <h3 className="view-price">
                      <del>$38.00</del>
                      <span>
                        $24.00<small>/per kilo</small>
                      </span>
                    </h3>
                    <p className="view-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      non tempora magni repudiandae sint suscipit tempore quis
                      maxime explicabo veniam eos reprehenderit fuga
                    </p>
                    <div className="view-list-group">
                      <label className="view-list-title">tags:</label>
                      <ul className="view-tag-list">
                        <li>
                          <a href="#">organic</a>
                        </li>
                        <li>
                          <a href="#">vegetable</a>
                        </li>
                        <li>
                          <a href="#">chilis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="view-list-group">
                      <label className="view-list-title">Share:</label>
                      <ul className="view-share-list">
                        <li>
                          <a
                            href="#"
                            className="icofont-facebook"
                            title="Facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="icofont-twitter"
                            title="Twitter"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="icofont-linkedin"
                            title="Linkedin"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="icofont-instagram"
                            title="Instagram"
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div className="view-add-group">
                      <button className="product-add" title="Add to Cart">
                        <i className="fas fa-shopping-basket"></i>
                        <span>add to cart</span>
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
                    <div className="view-action-group">
                      <a
                        className="view-wish wish"
                        href="#"
                        title="Add Your Wishlist"
                      >
                        <i className="icofont-heart"></i>
                        <span>add to wish</span>
                      </a>
                      <a
                        className="view-compare"
                        href="compare.html"
                        title="Compare This Item"
                      >
                        <i className="fas fa-random"></i>
                        <span>Compare This</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
