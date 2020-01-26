import React from 'react';

export const Prize = () => {
  return (
    <div className='prize'>
      <p>PRIZES</p>
      <div className='inner'>
        <div className='text'>
          <p>
            TOTAL PRIZES WORTH{' '}
            <span style={{ color: 'yellow' }}>
              <b>50K</b>
            </span>
          </p>
          <p>
            {' '}
            + many exciting{' '}
            <span style={{ color: 'yellow' }}>
              <b>Goodies</b>
            </span>
          </p>
          <div className='category'>
            <p className='k12'>12K</p>
            <p className='k18'>18K</p>
            <p className='k15'>15K</p>
          </div>
        </div>
        <div className='img'>
          <img src='https://i.imgur.com/99RmmMI.png' alt='loading..' />
        </div>
      </div>
    </div>
  );
};

export default Prize;
