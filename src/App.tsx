import "./App.css";
import HeaderLogo from "./img/Header/HeaderLogo.png";
import Loup from "./img/Header/Loup.png";
import Heart from "./img/Header/Heart.png";
import ShoppingCart from "./img/Header/ShoppingCart.png";
import User from "./img/Header/User.png";
import IphoneBanner from "./img/IphoneBanner/IphoneBanner.png";
import PlayStation from "./img/SmallBanners/PlayStation.png";
import Headphones from "./img/SmallBanners/Headphones.png";
import VisionPro from "./img/SmallBanners/VisionPro.png";
import MacBookPro from "./img/SmallBanners/MacBookPro.png";
import ArrowLeft from "./img/ProductCategory/ArrowLeft.png";
import ArrowRight from "./img/ProductCategory/ArrowRight.png";
import PhoneIcon from "./img/ProductCategory/Icon/PhoneIcon.png";
import SmartWhathesIcon from "./img/ProductCategory/Icon/SmartWatchesIcon.png";
import CameraIcon from "./img/ProductCategory/Icon/CameraIcon.png";
import HeadphonesIcon from "./img/ProductCategory/Icon/HeadphonesIcon.png";
import ComputerIcon from "./img/ProductCategory/Icon/ComputerIcon.png";
import GamingIcon from "./img/ProductCategory/Icon/GamingIcon.png";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container _container">
          <img src={HeaderLogo} alt="header-logo" className="header__logo" />
          <div className="header__search-form">
            <img src={Loup} alt="loup" className="search-form__loup" />
            <input
              placeholder="Search"
              type="text"
              className="search-form__input"
            />
          </div>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Contact Us
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__icons">
            <ul className="icons__list">
              <li className="icon__item">
                <img src={Heart} alt="heart" className="icon" />
              </li>
              <li className="icon__item">
                <img src={ShoppingCart} alt="shopping-cart" className="icon" />
              </li>
              <li className="icon__item">
                <img src={User} alt="user" className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="main__iphone-banner iphone-banner">
          <div className="iphone-banner _container">
            <div className="iphone-banner__text">
              <h1 className="iphone-banner__first-title">Pro.Beyond.</h1>
              <h1 className="iphone-banner__second-title">
                IPhone <span>14 Pro</span>
              </h1>
              <p className="iphone-banner__paragraph">
                Created to change everything for the better. For everyone
              </p>
              <a className="iphone-banner__btn">Shop Now</a>
            </div>
            <div className="iphone-banner__img">
              <img src={IphoneBanner} alt="IphoneBanner" />
            </div>
          </div>
        </section>
        <section className="main__smaller-banners _smaller-banners__container">
          <div className="smaller-banners">
            <div className="smaller-banner__left-side">
              <div className="left-side__top-banner">
                <div className="top-banner__img">
                  <img src={PlayStation} alt="PlayStation}" />
                </div>
                <div className="top-banner__text">
                  <h1 className="top-banner__title">Playstation 5</h1>
                  <p className="top-banner__paragrap">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>
              <div className="left-side__bottom-banners">
                <div className="bottom-banners__small-banner">
                  <div className="small-banner__img">
                    <img src={Headphones} alt="Headphones" />
                  </div>
                  <div className="small-banner__text">
                    <h1 className="small-banner__title">Apple AirPods Max</h1>
                    <p className="small-banner__paragraph">
                      Computational audio. Listen, it's powerful
                    </p>
                  </div>
                </div>
                <div className="bottom-banners__small-banner">
                  <div className="small-banner__img">
                    <img src={VisionPro} alt="" />
                  </div>
                  <div className="small-banner__text">
                    <h1 className="small-banner__title small-banner__title--last">
                      Apple Vision Pro
                    </h1>
                    <p className="small-banner__paragraph">
                      An immersive way to experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="smaller-banner__right-side">
              <div className="right-side__big-banner">
                <div className="big-banner__text">
                  <h1 className="big-banner__title">
                    Macbook <span>Air</span>
                  </h1>
                  <p className="big-banner__paragraph">
                    The new 15-inch MacBook Air makes room for more of what you
                    love with a spacious Liquid Retina display.
                  </p>
                  <button className="big-banner__btn">Shop Now</button>
                </div>
                <div className="big-banner__img">
                  <img src={MacBookPro} alt="MacBookPro" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main__product-category product-category">
          <div className="product-category _container">
            <div className="product-category__top">
              <h1 className="product-category__title">Browse By Category</h1>
              <div className="product-category__pagination">
                <div className="product-category__arrow">
                  <img src={ArrowLeft} alt="ArrowLeft" />
                </div>
                <div className="product-category__arrow">
                  <img src={ArrowRight} alt="ArrowRight" />
                </div>
              </div>
            </div>
            <div className="product-category__bottom">
              <ul className="product-category__icons-tab">
                <li className="product-category__icon-list">
                  <img src={PhoneIcon} alt="PhoneIcon" />
                  <p className="product-category__icon-description">Phones</p>
                </li>
                <li className="product-category__icon-list">
                  <img src={SmartWhathesIcon} alt="SmartWhathesIcon" />
                  <p className="product-category__icon-description">
                    Smart Watches
                  </p>
                </li>
                <li className="product-category__icon-list">
                  <img src={CameraIcon} alt="CameraIcon" />
                  <p className="product-category__icon-description">Cameras</p>
                </li>
                <li className="product-category__icon-list">
                  <img src={HeadphonesIcon} alt="HeadphonesIcon" />
                  <p className="product-category__icon-description">
                    Headphones
                  </p>
                </li>
                <li className="product-category__icon-list">
                  <img src={ComputerIcon} alt="ComputerIcon" />
                  <p className="product-category__icon-description">
                    Computers
                  </p>
                </li>
                <li className="product-category__icon-list">
                  <img src={GamingIcon} alt="GamingIcon" />
                  <p className="product-category__icon-description">Gaming</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="products"></section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
