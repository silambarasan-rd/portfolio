import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar';
import BackToTop from '../components/BackToTop';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
function PageLayout({changeTheme, pageType}) {
  return (
    <div>
      <NavBar pageType={pageType}
        changeCurrentTheme={changeTheme} />
      <Outlet />
      <BackToTop />
    </div>
  );
}

PageLayout.propTypes = {
  changeTheme: PropTypes.func,
  pageType: PropTypes.oneOf(['home', 'others']),
};

export default PageLayout;
