import React from 'react';
import Logo from '../../assets/Logo.svg';
import AvatarBlog1 from '../../assets/AvatarBlog1.svg';
import { ChevronDown } from 'lucide-react';

function Navbar() {
  return (
    <>
      <div className="border-b">
        <div className="flex mx-20 py-5 justify-between items-center">
          <div className=" flex items-center gap-10">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="flex gap-8">
              <div>
                <span className="text-secondary-text font-semibold">Home</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary-text font-semibold">
                  Products
                </span>
                <ChevronDown className="text-secondary-text" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary-text font-semibold">
                  Resources
                </span>
                <ChevronDown className="text-secondary-text" />
              </div>
              <div>
                <span className="text-secondary-text font-semibold">
                  Pricing
                </span>
              </div>
            </div>
          </div>
          <div>
            <img src={AvatarBlog1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
