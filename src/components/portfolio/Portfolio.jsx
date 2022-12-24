import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
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
          <h3>This is a online food order website (only frontend)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/radhika-020/Food_Order_Website_Project-main-master" className="btn" target="_blank">Github</a>
            <a href="https://orderfoodhere.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>
        
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG2 } alt="" />

          </div>
          <h3>This is a Drum kit webiste (With different drum sounds)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/drum-kit" className="btn" target="_blank">Github</a>
            <a href="https://drum-kit-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>

        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG3 } alt="" />

          </div>
          <h3>This is a line follower robot (In online simulator webots)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/LineFollowerWebots" className="btn" target="_blank">Github</a>
            {/* <a href="https://github.com" className="btn btn-primary"  target="_blank">Live Demo</a> */}

            </div>
        </article>

        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG4 } alt="" />

          </div>
          <h3>This is a crypto currency trakcer(using API)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/Crypto-tracker-using-api" className="btn" target="_blank">Github</a>
            <a href="https://crypto-tracker-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

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