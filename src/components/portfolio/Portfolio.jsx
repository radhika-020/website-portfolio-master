import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/img5.jpg'
import IMG3 from '../../assets/img6.jpg'
import IMG4 from '../../assets/Screenshot (254).png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1 } alt="" />

          </div>
          <h3>This is an online food order website(only frontend).</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/radhika-020/Food_Order_Website_Project-main-master" className="btn" target="_blank">Github</a>
            <a href="https://orderfoodhere.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>
        
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG2 } alt="" />

          </div>
          <h3>This is a Chrome Extension which can save URL of the tabs.</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/radhika-020/Java-Script-Scrimba/tree/master/Chrome%20Extension" className="btn" target="_blank">Github</a>
            {/* <a href="https://drum-kit-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a> */}

            </div>
        </article>

        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG3 } alt="" />

          </div>
          <h3>This is a Music Player created using Android Studio with Java and XML.</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/radhika-020/LYSoul" className="btn" target="_blank">Github</a>
            {/* <a href="https://github.com" className="btn btn-primary"  target="_blank">Live Demo</a> */}

            </div>
        </article>

        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG4 } alt="" />

          </div>
          <h3>This is a Website Portfolio created using React JS.</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/radhika-020/website-portfolio-master" className="btn" target="_blank">Github</a>
            <a href="https://radhikaarora.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>

        {/* <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1 } alt="" />

          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/Crypto-tracker-using-api" className="btn" target="_blank">Github</a>
            <a href="https://crypto-tracker-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article> */}

        
      </div>
    </section>
  )
}

export default Portfolio