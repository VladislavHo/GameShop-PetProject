import React from "react";
import PopapUser from './popap-user/PopapUser'
import './main.scss'


export default function Main() {
  

  return(
    <main>
      <div className="wrapper wrapper-main">
      {true && (<PopapUser/>)}
        <section className="sale"> 
          {/* <div className="sale-container"> */}
            <div className="sale-wrapper">
              <img src="https://cdn.igromania.ru/mnt/news/d/8/8/a/1/f/110734/564178414442a1eb_1920xH.jpg" style={{
                width: '900px',
                height: '455px'
              }}  alt="" />
              <div className="nav-screan">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              
            </div>
            <div className="screenshot">
                <div className="screen"></div>
                <div className="screen"></div>
                <div className="screen"></div>
                <button>В корзину</button>
              </div>
          {/* </div> */}
        </section>

        <section className="categories-best-game">
          <div className="best-game">Title</div>
          <div className="best-game">Title</div>
          <div className="best-game">Title</div>
          <div className="best-game">Title</div>
        </section>

        <section className="categories-game">
          <div className="categories">Categories</div>
          <div className="categories">Categories</div>
          <div className="categories">Categories</div>
          <div className="categories">Categories</div>
          <div className="categories">Categories</div>
          <div className="categories">Categories</div>
        </section>
      </div>
    </main>
  )
}