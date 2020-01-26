import React from 'react';

const Footer = () => {
  return (
    <div className='footer' id='about'>
      <p>CONTACT US:</p>
      <div className='maps-contact'>
        <div className='map'>
          <iframe
            width='100%'
            height='100%'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=IIIIM%20Gwalior&t=&z=17&ie=UTF8&iwloc=&output=embed'
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            title='g_map'
          />
        </div>

        <div className='contact'>
          <p>
            <b>Address: </b> ABV-Indian Institute of Information Technology
            <br /> and Management Gwalior, Morena Link Road, Gwalior, <br />
            Madhya Pradesh, India,474015
          </p>
          <p>
            <b>Email: </b> aasf.iiitmg@gmail.com
          </p>
          <p>
            <b>Phone: </b>
            <br />
            Palak Jain - +91-9870865193
            <br />
            Guna Shekar - +91-7995524941
            <br />
            Manish Dangi - +91-9165378317
          </p>
        </div>
      </div>
      <div className='display'>
        <div className='box'>
          <a href='https://www.facebook.com/AASFIIITM/'>
            <img
              className='social'
              src='https://www.iconsdb.com/icons/preview/white/facebook-xxl.png'
              alt='loading'
            />
          </a>
        </div>
        <div className='box'>
          <a href='https://www.linkedin.com/company/abhigyan-abhikaushalam-students-forum'>
            <img
              className='social'
              src='data:image/png;base64,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'
              alt='loading'
            />
          </a>
        </div>
        <div className='box'>
          <a href='http://aasf.in'>
            <img
              className='social'
              src='https://pngimage.net/wp-content/uploads/2018/06/white-web-icon-png.png'
              alt='loading'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
