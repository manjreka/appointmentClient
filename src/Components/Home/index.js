import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'; // Import custom CSS



const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className='main-home-container'>
      <div className="slider-container">
        <h2>LET'S TALK BUSINESS IN</h2>
        <Slider {...settings}>
          <div className="slide">
            <h3>Slide 1</h3>
            <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722083827/3_yazozy.png" alt="thought 1" />
            <ul className='slick-1-list'>
              <li>Quality</li>
              <li>Design</li>
              <li>Code</li>
              <li>Digital</li>
              <li>Ops</li>
            </ul>
            <p style={{ fontSize: '25px' }}>BuildingSomething ? Then its Time to get out Throught Coders Onboard for Codes that Click, Sites that Soar, and Experience that Wins Hearts!</p>
            <div>
              <button style={{ margin: '5px' }} type='button'>Read More</button>
              <button style={{ margin: '5px' }} type='button'>Lets Talk</button>
            </div>
          </div>
          <div className="slide">
            <h3>Slide 2</h3>
            <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722083827/5_uezkjt.png" alt="thought 2" />
            <ul className='slick-1-list'>
              <li>Quality</li>
              <li>Design</li>
              <li>Code</li>
              <li>Digital</li>
              <li>Ops</li>
            </ul>
            <p style={{ fontSize: '25px' }}>BuildingSomething ? Then its Time to get out Throught Coders Onboard for Codes that Click, Sites that Soar, and Experience that Wins Hearts!</p>
            <div>
              <button style={{ margin: '5px' }} type='button'>Read More</button>
              <button style={{ margin: '5px' }} type='button'>Lets Talk</button>
            </div>
          </div>
          <div className="slide">
            <h3>Slide 3</h3>
            <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722083827/4_ayq1cv.png" alt="thought 3" />
            <ul className='slick-1-list'>
              <li>Quality</li>
              <li>Design</li>
              <li>Code</li>
              <li>Digital</li>
              <li>Ops</li>
            </ul>
            <p style={{ fontSize: '25px' }}>BuildingSomething ? Then its Time to get out Throught Coders Onboard for Codes that Click, Sites that Soar, and Experience that Wins Hearts!</p>
            <div>
              <button style={{ margin: '5px' }} type='button'>Read More</button>
              <button style={{ margin: '5px' }} type='button'>Lets Talk</button>
            </div>
          </div>
          <div className="slide">
            <h3>Slide 4</h3>
            <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722083827/1_ejykhn.png" alt="thought 4" />
            <ul className='slick-1-list'>
              <li>Quality</li>
              <li>Design</li>
              <li>Code</li>
              <li>Digital</li>
              <li>Ops</li>
            </ul>
            <p style={{ fontSize: '25px' }}>BuildingSomething ? Then its Time to get out Throught Coders Onboard for Codes that Click, Sites that Soar, and Experience that Wins Hearts!</p>
            <div>
              <button style={{ margin: '5px' }} type='button'>Read More</button>
              <button style={{ margin: '5px' }} type='button'>Lets Talk</button>
            </div>
          </div>
          <div className="slide">
            <h3>Slide 5</h3>
            <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722083827/2_ph26ft.png" alt="thought 5" />
            <ul className='slick-1-list'>
              <li>Quality</li>
              <li>Design</li>
              <li>Code</li>
              <li>Digital</li>
              <li>Ops</li>
            </ul>
            <p style={{ fontSize: '25px' }}>BuildingSomething ? Then its Time to get out Throught Coders Onboard for Codes that Click, Sites that Soar, and Experience that Wins Hearts!</p>
            <div>
              <button style={{ margin: '5px' }} type='button'>Read More</button>
              <button style={{ margin: '5px' }} type='button'>Lets Talk</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className='container-slick'>
        <div className='home-styling-centric'>
          <div>
            <h1>CONSULTING</h1>
            <p>Our experts decode all industries, from tech to art, Whatever your needs may be, we have the acumen and the audacity to transform them into triumphs through confident consulting</p>
            <button>Talk to Us</button>
          </div>
          <img style={{ alignSelf: 'center' }} src='https://res.cloudinary.com/dtzajnril/image/upload/v1722086037/tf-1_knitcc.png' alt='human' className='man' />
        </div>
        <div className='home-styling-centric'>
          <div>
            <h1 style={{ textAlign: 'right' }}>BUSINESS OUTCOME</h1>
            <p style={{ textAlign: 'right' }}>So whether you’re a new entrepreneur seeking guidance or a seasoned titan of industry in need of a fresh perspective, its time to redefine goals where innovation meets inspiration</p>
            <button>Talk to Us</button>
          </div>
          <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1722086037/tf-2_uxvixu.png" alt='building' className='building' />
        </div>
      </div>

    </div>
  );
}

export default Home;


