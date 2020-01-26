import React from 'react';

const Heading = () => {
  return (
    <div className='heading'>
      <div className='header'>
        <img src='https://i.imgur.com/bcSjdi9.png' alt='loading ' />

        <p>
          <b>HackStack</b>
        </p>
        <p>
          <b className='about-faq'>
            <a href='#about'>ABOUT</a>
          </b>
        </p>
        <p>
          <b className='about-faq'>
            <a href='#fq'>FAQ</a>
          </b>
        </p>
      </div>
      <div className='hexagon'>
        <img alt='loading' src='https://i.imgur.com/Mw9MgLn.png' />
      </div>
      <p className='abv-iiitm'>ABV-IIITM</p>
      <p className='presents'>presents</p>
      <p className='hackstack'>
        <b>HACK STACK</b>
      </p>
      <p className='v1'>V 1.0</p>
      <p className='date'>10th-11th February, 2020</p>
      <button type='button' className='register'>
        REGISTERATIONS OPEN SOON{' '}
      </button>
    </div>
  );
};

export default Heading;
