import React, { Fragment } from 'react';

import './App.css';
import Heading from './components/Heading';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Sponsors from './components/Sponsors';
import Faqs from './components/Faqs';

function App() {
  return (
    <Fragment>
      <div className='landing'>
        <Heading />
        <div className='underline-3'></div>
        <Stats />
        <Timeline />
        <Tracks />

        <Sponsors />
        <div className='underline-3'></div>
        <Faqs />
        <div className='underline-3'></div>
      </div>
    </Fragment>
  );
}

export default App;
