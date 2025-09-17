import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from '../photos/logo/logo-dark.png';
import moon from '../photos/svg/moon.svg';
import glass from '../photos/svg/glass-dark.svg';
import del from '../photos/svg/delete.svg'; // the word " delete " is not supported
import foto from '../photos/gallery/image 2.jpg';
import '../css/Base.scss';
import '../css/Main.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <img src={logo} alt="framework team" />
            </div>
            <button className="header__button">
              <img src={moon} alt="sun" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="section_1">
          <div className="container">
            <div className="section_1__box_search-engine">
              <label className="section_1__search-engine" htmlFor="">
                <div className="search-section">
                  <button className="label__button search">
                    <img src={glass} alt="glass" />
                  </button>
                  <input
                    className="section_1__input"
                    type="text"
                    placeholder="Painting title"
                    value={searchValue}
                    onChange={handleInputChange}
                  />
                </div>
                {searchValue && (
                  <button className="label__button delete" onClick={handleClearInput}>
                    <img src={del} alt="del" />
                  </button>
                )}
              </label>
            </div>
          </div>
        </section>
        <section className="section_2">
          <div className="container">
            <ul className="section_2__gallery-list">
              <li className="section_2__gallery-item">
                <div className="section_2__gallery-photo">
                  <img src={foto} alt="" />
                </div>
                <div className="section_2__item-info">
                  <div className="item-info__element">
                    <h2 className="item-title">Cascate di Tivoli</h2>
                    <p className="item-date">1761</p>
                  </div>
                </div>
              </li>
              <li className="section_2__gallery-item">
                <div className="section_2__gallery-photo">
                  <img src={foto} alt="" />
                </div>
                <div className="section_2__item-info">
                  <div className="item-info__element">
                    <h2 className="item-title">Cascate di Tivoli</h2>
                    <p className="item-date">1761</p>
                  </div>
                </div>
              </li>
              <li className="section_2__gallery-item">
                <div className="section_2__gallery-photo">
                  <img src={foto} alt="" />
                </div>
                <div className="section_2__item-info">
                  <div className="item-info__element">
                    <h2 className="item-title">Cascate di Tivoli</h2>
                    <p className="item-date">1761</p>
                  </div>
                </div>
              </li>
              <li className="section_2__gallery-item">
                <div className="section_2__gallery-photo">
                  <img src={foto} alt="" />
                </div>
                <div className="section_2__item-info">
                  <div className="item-info__element">
                    <h2 className="item-title">Cascate di Tivoli</h2>
                    <p className="item-date">1761</p>
                  </div>
                </div>
              </li>
              <li className="section_2__gallery-item">
                <div className="section_2__gallery-photo">
                  <img src={foto} alt="" />
                </div>
                <div className="section_2__item-info">
                  <div className="item-info__element">
                    <h2 className="item-title">Cascate di Tivoli</h2>
                    <p className="item-date">1761</p>
                  </div>
                </div>
              </li>
              <li className="section_2__gallery-item">
                <div className="section_2__gallery-photo">
                  <img src={foto} alt="" />
                </div>
                <div className="section_2__item-info">
                  <div className="item-info__element">
                    <h2 className="item-title">Cascate di Tivoli</h2>
                    <p className="item-date">1761</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section_3">
          <div className="container">
            <nav className="section_3__pagination" aria-label="Навигация по страницам">
              <ul className="section_3__pagination-list">
                <li className="pagination-item">
                  <a href="#" className="pagination-link pagination pagination-prev" aria-label="Предыдущая страница">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="#575757"/>
                    </svg>
                  </a>
                </li>
                <li className="pagination-group">
                  <ul className="pagination-group__list">
                    <li className="pagination-item">
                      <a href="#" className="pagination-link">1</a>
                    </li>
                    <li className="pagination-item">
                      <a href="#" className="pagination-link">2</a>
                    </li>
                    <li className="pagination-item">
                      <a href="#" className="pagination-link">3</a>
                    </li>
                    <li className="pagination-item">
                      {/* <span className="pagination-ellipsis">...</span> */}
                      <a href="#" className="pagination-link">...</a>
                    </li>
                    <li className="pagination-item">
                      <a href="#" className="pagination-link">9</a>
                    </li>
                  </ul>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-link pagination pagination-next" aria-label="Следующая страница">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="#575757"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;