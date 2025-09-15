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
            </ul>
          </div>
        </section>
        <section className="section_3">
          <div className="container">
            <nav className="section_3__pagination" aria-label="Навигация по страницам">
              <ul className="section_3__pagination-list">
                <li className="pagination-item">
                  <a href="#" className="pagination-link pagination-prev" aria-label="Предыдущая страница">
                    <span>&lt;</span>
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
                      <span className="pagination-ellipsis">...</span>
                    </li>
                    <li className="pagination-item">
                      <a href="#" className="pagination-link">9</a>
                    </li>
                  </ul>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-link pagination-next" aria-label="Следующая страница">
                    <span>&gt;</span>
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