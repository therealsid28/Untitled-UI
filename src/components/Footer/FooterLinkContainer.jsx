import React from 'react';
import FooterLinkItem from './FooterLinkItem';

const data = [
  {
    title: 'Product',
    text: {
      link1: 'Overview',
      link2: 'Features',
      link3: 'Solutions',
      link4: 'Tutorials',
      link5: 'Pricing',
      link6: 'Releases',
    },
    newItem: true,
  },
  {
    title: 'Company',
    text: {
      link1: 'About us',
      link2: 'Careers',
      link3: 'Press',
      link4: 'News',
      link5: 'Media kit',
      link6: 'Contact',
    },
  },
  {
    title: 'Resources',
    text: {
      link1: 'Blog',
      link2: 'Newsletter',
      link3: 'Events',
      link4: 'Help centre',
      link5: 'Tutorials',
      link6: 'Support',
    },
  },
  {
    title: 'Use cases',
    text: {
      link1: 'Startups',
      link2: 'Enterprise',
      link3: 'Government',
      link4: 'SaaS centre',
      link5: 'Marketplaces',
      link6: 'Ecommerce',
    },
  },
  {
    title: 'Social',
    text: {
      link1: 'Twitter',
      link2: 'LinkedIn',
      link3: 'Facebook',
      link4: 'GitHub',
      link5: 'AngelList',
      link6: 'Dribbble',
    },
  },
  {
    title: 'Legal',
    text: {
      link1: 'Terms',
      link2: 'Privacy',
      link3: 'Cookies',
      link4: 'Licenses',
      link5: 'Settings',
      link6: 'Contact',
    },
  },
];

function FooterLinkContainer() {
  return (
    <>
      {data.map((elm, inx) => {
        return elm.newItem ? (
          <div className="basis-1/2 flex-grow-0 flex-shrink-0 md:basis-4/12 md:flex-1 lg:flex-1">
            <h3 className="text-sm text-nav-primary font-semibold mb-4">
              {elm.title}
            </h3>
            <div className="flex flex-col gap-3">
              <FooterLinkItem text={elm.text?.link1} />
              <FooterLinkItem text={elm.text?.link2} />
              <FooterLinkItem text={elm.text?.link3} newItem={elm.newItem} />
              <FooterLinkItem text={elm.text?.link4} />
              <FooterLinkItem text={elm.text?.link5} />
              <FooterLinkItem text={elm.text?.link6} />
            </div>
          </div>
        ) : (
          <div className="basis-1/2 flex-grow-0 flex-shrink-0 md:basis-4/12 md:flex-1 lg:flex-1">
            <h3 className="text-sm text-nav-primary font-semibold mb-4">
              {elm.title}
            </h3>
            <div className="flex flex-col gap-3">
              <FooterLinkItem text={elm.text?.link1} />
              <FooterLinkItem text={elm.text?.link2} />
              <FooterLinkItem text={elm.text?.link3} />
              <FooterLinkItem text={elm.text?.link4} />
              <FooterLinkItem text={elm.text?.link5} />
              <FooterLinkItem text={elm.text?.link6} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FooterLinkContainer;
