import "./App.css";
import HeaderLogo from "./img/Header/HeaderLogo.png";
import Loup from "./img/Header/Loup.png";
import Heart from "./img/Header/Heart.png";
import ShoppingCart from "./img/Header/ShoppingCart.png";
import User from "./img/Header/User.png";
import IphoneBanner from "./img/IphoneBanner/IphoneBanner.png";

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
        <div className="main__iphone-banner iphone-banner">
          <div className="iphone-banner _container">
            <div className="iphone-banner__text">
              <h1 className="iphone-banner__first-title">Pro.Beyond.</h1>
              <h1 className="iphone-banner__second-title">
                IPhone <span>14 Pro</span>
              </h1>
              <p className="iphone-banner__paragraph">
                Created to change everything for the better. For everyone
              </p>
              <a className="iphone-banner__button">Shop Now</a>
            </div>
            <div className="iphone-banner__img">
              <img src={IphoneBanner} alt="" />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
