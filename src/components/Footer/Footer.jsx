import React from 'react';
import FooterLinkContainer from './FooterLinkContainer';
import Logo from '../../assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <div className="mt-12 mx-4 lg:mx-24">
        <div className="flex flex-wrap gap-y-8 md:justify-center">
          <FooterLinkContainer />
        </div>
      </div>
      <div className="mx-4 mt-12 mb-8 lg:mx-24">
        <div className="border"></div>
      </div>
      <div className="mx-4 flex justify-between items-center lg:mx-24">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <p className="text-nav-primary my-6">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
