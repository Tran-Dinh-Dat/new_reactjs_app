import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function PrimaryLayout() {
  return (
    <>
     <div id="preloader">
        <div id="loader" className="dots-fade">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div id="top" className="s-wrap site-wrapper">
        <Header />
          <Outlet />
        <Footer />
      </div> {/*-- end s-wrap --*/}
    </>
  );
}

export default PrimaryLayout;
