import React from 'react'
import "./Carousel.css"
function Carousel() {
  return (
    <>
      <section className="container">
        <article className="carousel">
          <div>
            <div className="content-part">
              <div className='drop'>
                <h1>Skills that drive you forward</h1>
                <p>
                  Technology and the world of work change fast — with us, you're
                  faster. Get the skills to achieve goals and stay competitive.
                </p>
                <button className="btn1">Plan for individuals</button>
                <button className="btn2">Plan for organizations</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Carousel
