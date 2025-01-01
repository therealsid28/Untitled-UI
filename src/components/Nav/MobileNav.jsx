import React, { useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { ChevronDown, HamIcon, MenuIcon, X } from 'lucide-react';

function MobileNav() {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <div className="pt-4 relative">
        <div className="flex items-center justify-between px-3 pb-3 border-b">
          <div className="cursor-pointer">
            <img src={Logo} alt="Logo" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setMenuState((prev) => !prev);
            }}
          >
            {menuState ? <X size={28} /> : <MenuIcon size={28} />}
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className={`bg-white absolute w-full ${menuState ? '' : 'hidden'}`}
        >
          <div className="py-8 px-3 pb-8 border-b">
            <div className="flex flex-col gap-8">
              <span>Home</span>
              <div className="flex justify-between items-center cursor-pointer">
                <span>Products</span>
                <ChevronDown />
              </div>
              <div className="flex justify-between items-center cursor-pointer">
                <span>Resources</span>
                <ChevronDown />
              </div>
              <span>Pricing</span>
            </div>
          </div>
          <div className="px-3 py-5">
            <div className="flex items-center gap-32">
              <div className="flex gap-4 flex-col">
                <span>About Us</span>
                <span>Press</span>
                <span>Careers</span>
                <span>Leagal</span>
              </div>
              <div className="flex gap-4 flex-col">
                <span>Support</span>
                <span>Contact</span>
                <span>Sitemap</span>
                <span>Cookie setting</span>
              </div>
            </div>
          </div>
          <div className="px-3">
            <button className="bg-btn-primary w-full py-3 rounded-lg mb-3">
              Sign up
            </button>
            <button className="border w-full py-3 rounded-lg">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
