import React from "react";

export const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Конструктор сайтов</h1>

      <form className = "grid-select">
        <h2 className = "grid-select__header" >Выберите сетку сайта </h2>
        <input className="grid-select__radio visually-hidden" type="radio" name="grid" id="grid-landing"/>
        <label htmlFor="grid-landing" className="grid-select__btn">
          <span className="grid-select__text">Лендинг</span>
          <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="26.3" width="239.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
          </svg>
        </label>
        <input className="grid-select__radio visually-hidden" type="radio" name="grid" id="grid-blog" checked/>
        <label htmlFor="grid-blog" className="grid-select__btn">
          <span className="grid-select__text">Блог</span>
          <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="26.394" width="89.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="100.3" y="26.3" width="139.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
          </svg>
        </label>
        <input className="grid-select__radio visually-hidden" type="radio" name="grid" id="grid-shop"/>
        <label htmlFor="grid-shop" className="grid-select__btn">
          <span className="grid-select__text">Магазин</span>
          <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="83.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="166.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
          </svg>
        </label>
      </form>

      <div className="layout layout--blog">
        <header className="header header--empty">
          <p className="placeholder">Header</p>
          <button type="button" className="add-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                fill="#80CCF0"/>
            </svg>
          </button>

          <div className="choose-elem ">
            <button type="button" className="choose-elem__btn">Заголовок H1</button>
            <button type="button" className="choose-elem__btn">Заголовок H2</button>
            <button type="button" className="choose-elem__btn">Заголовок H3</button>
            <button type="button" className="choose-elem__btn">Абзац текста</button>
            <button type="button" className="choose-elem__btn">Изображение</button>
          </div>

        </header>


        <div className="content content-1 content--empty">
          <p className="placeholder">Content</p>

          <button type="button" className="add-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                fill="#80CCF0"/>
            </svg>
          </button>

          <div className="choose-elem ">
            <button type="button" className="choose-elem__btn">Заголовок H1</button>
            <button type="button" className="choose-elem__btn">Заголовок H2</button>
            <button type="button" className="choose-elem__btn">Заголовок H3</button>
            <button type="button" className="choose-elem__btn">Абзац текста</button>
            <button type="button" className="choose-elem__btn">Изображение</button>
          </div>

        </div>

        <div className="content content-2 content--empty">
          <p className="placeholder">Content</p>
          <button type="button" className="add-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                fill="#80CCF0"/>
            </svg>
          </button>

          <div className="choose-elem ">
            <button type="button" className="choose-elem__btn">Заголовок H1</button>
            <button type="button" className="choose-elem__btn">Заголовок H2</button>
            <button type="button" className="choose-elem__btn">Заголовок H3</button>
            <button type="button" className="choose-elem__btn">Абзац текста</button>
            <button type="button" className="choose-elem__btn">Изображение</button>
          </div>

        </div>

        <footer className="footer footer--empty">
          <p className="placeholder">Footer</p>
          <button type="button" className="add-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                fill="#80CCF0"/>
            </svg>
          </button>

          <div className="choose-elem">
            <button type="button" className="choose-elem__btn">Заголовок H1</button>
            <button type="button" className="choose-elem__btn">Заголовок H2</button>
            <button type="button" className="choose-elem__btn">Заголовок H3</button>
            <button type="button" className="choose-elem__btn">Абзац текста</button>
            <button type="button" className="choose-elem__btn">Изображение</button>
          </div>
        </footer>
      </div>
    </>
  );
};

