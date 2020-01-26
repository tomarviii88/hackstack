import React, { Fragment } from 'react';

import './App.css';
import Heading from './components/Heading';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Sponsors from './components/Sponsors';
import Faqs from './components/Faqs';
import Prize from './components/Prize';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <div className='landing'>
        <Heading />
        <div className='underline-3'></div>
        {/*<Stats />*/}
        <Timeline />
        <Tracks />
        <Prize />
        <Sponsors />
        <div className='underline-3'></div>
        <Faqs />

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
