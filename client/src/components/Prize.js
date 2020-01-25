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
            <h4 className='k12'>12K</h4>
            <h4 className='k18'>18K</h4>
            <h4 className='k15'>15K</h4>
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
