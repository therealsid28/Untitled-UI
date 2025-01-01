import React, { useState } from 'react';
import Navbar from '../components/Nav/Navbar';
import { useMediaQuery } from 'usehooks-ts';
import MobileNav from '../components/Nav/MobileNav';
import {
  ArrowRight,
  ChartNoAxesCombined,
  CirclePlay,
  MessageCircle,
  MessageCircleHeart,
  MessagesSquare,
  Signal,
  Zap,
} from 'lucide-react';
import HomeImage from '../assets/Content.svg';
import BoltShift from '../assets/Boltshift.svg';
import FeatherDev from '../assets/FeatherDev.svg';
import GlobalBank from '../assets/GlobalBank.svg';
import LightBox from '../assets/LightBox.svg';
import Spherule from '../assets/Spherule.svg';
import Nitezsch from '../assets/Nitezsch.svg';
import FeaturesCard from '../components/Features/FeaturesCard';
import Sisphus from '../assets/Sisphus.svg';
import Avatar from '../assets/Avatar.svg';
import FeaturesImage from '../assets/Features.svg';
import Faq from '../components/Features/Faq';
import FaqAvatar1 from '../assets/FaqAvatar1.svg';
import FaqAvatar2 from '../assets/FaqAvatar2.svg';
import FaqAvatar3 from '../assets/FaqAvatar3.svg';
import Blog1 from '../assets/Blog-1.png';
import Blog2 from '../assets/Blog-2.png';
import Blog3 from '../assets/Blog-3.png';
import AvatarBlog1 from '../assets/AvatarBlog1.svg';
import AvatarBlog2 from '../assets/AvatarBlog2.svg';
import AvatarBlog3 from '../assets/AvatarBlog3.svg';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import HomeLaptop from '../assets/home-laptop.png';
import FeaturesImageLarge from '../assets/features-large.svg';

function Home() {
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <div>{matches ? <MobileNav /> : <Navbar />}</div>
      <main>
        <div className="mt-16 mx-4">
          <div className="flex justify-center items-center">
            <div className="max-w-fit">
              <div className="border-badge border rounded-2xl bg-badge-background">
                <div className="p-1 flex justify-between items-center gap-2">
                  <span className="text-xs border bg-white py-[2px] px-2 rounded-2xl text-text border-badge font-medium">
                    New features
                  </span>
                  <div className="flex gap-1 items-center text-text">
                    <span className="text-xs font-medium">
                      Check out the team dashboard
                    </span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center text-4xl font-semibold my-4">
              Beautiful analytics to grow smarter
            </h1>
          </div>
          <div>
            <p className="text-center text-secondary-text md:max-w-3xl md:mx-auto">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="mt-8 sm:flex sm:gap-4 md:w-1/2 mx-auto lg:w-2/12">
            <button className="bg-btn-primary w-full py-3 rounded-lg mb-3 text-white font-semibold">
              Sign up
            </button>
            <button className="bg-white w-full py-3 rounded-lg mb-3 flex justify-center items-center gap-1 border-2">
              <CirclePlay className="text-btn-secondary" />
              <span className="text-btn-secondary font-semibold">Demo</span>
            </button>
          </div>
        </div>
        <div className="mx-4">
          <div className="my-16">
            {matches ? (
              <img
                src={HomeImage}
                alt="Home Image"
                className="border-[6px] rounded-xl mx-auto border-black"
              />
            ) : (
              <div className="relative">
                <div className="lg:max-w-7xl lg:mx-auto">
                  <img
                    src={HomeLaptop}
                    alt="Home Image"
                    className="border-[6px] rounded-xl mx-auto border-black relative"
                  />
                </div>
                {/* <div className="absolute w-full h-[32%] bg-white z-30 bottom-0"></div> */}
              </div>
            )}
          </div>
        </div>
        <div className="mx-4">
          <div className="lg:py-24 relative">
            <div>
              <h3 className="text-secondary-text font-medium text-center text-base">
                Join 4,000+ companies already growing
              </h3>
            </div>
            <div className="mt-8">
              <div className="flex justify-between gap-8 md:justify-center lg:block lg:mx-20">
                {matches ? (
                  <>
                    <div className="flex flex-col gap-4 items-end">
                      <img src={BoltShift} alt="" />
                      <img src={FeatherDev} alt="" />
                      <img src={GlobalBank} alt="" />
                    </div>
                    <div className="flex flex-col gap-4 items-start">
                      <img src={LightBox} alt="" />
                      <img src={Spherule} alt="" />
                      <img src={Nitezsch} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center gap-8 items-end flex-wrap lg:justify-around">
                      <img src={BoltShift} alt="" className="w-36" />
                      <img src={FeatherDev} alt="" className="w-36" />
                      <img src={GlobalBank} alt="" className="w-36" />
                      <img src={LightBox} alt="" className="w-36" />
                      <img src={Spherule} alt="" className="w-36" />
                      <img src={Nitezsch} alt="" className="w-36" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Border */}
      <div className="my-16 px-3">
        <div className="w-full border"></div>
      </div>
      {/* Border End */}
      <section>
        <div className="mx-4">
          <div>
            <h2 className="text-sm font-semibold text-center text-text">
              Features
            </h2>
            <div>
              <h3 className="mt-3 text-3xl leading-9 text-center font-semibold text-primary-text">
                Analytics that feels like it’s from the future
              </h3>
              <p className="text-secondary-text text-center mt-4">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>
          </div>
          <div>
            <div className="mt-12 flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center">
              <FeaturesCard
                heading="Share team inboxes"
                text="Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop."
                icon={<MessagesSquare />}
              />
              <FeaturesCard
                heading="Deliver instant answers"
                text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
                icon={<Zap />}
              />
              <FeaturesCard
                heading="Manage your team with reports"
                text="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
                icon={<ChartNoAxesCombined />}
              />
              <FeaturesCard
                heading="Connect with customers"
                text="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
                icon={<MessageCircle />}
              />
              <FeaturesCard
                heading="Connect the tools you already use"
                text="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
                icon={<Signal />}
              />
              <FeaturesCard
                heading="Our people make the difference"
                text="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
                icon={<MessageCircleHeart />}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-team-bg mt-16 px-4 py-16 lg:px-20">
          <div className="flex flex-col items-center gap-8">
            <div>
              <img src={Sisphus} alt="" />
            </div>
            <div>
              <h2 className="font-medium text-3xl text-center leading-10 lg:text-5xl">
                We’ve been using Untitled to kick start every new project and
                can’t imagine working without it.
              </h2>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div>
                <img src={Avatar} alt="Avatar" />
              </div>
              <div>
                <h5 className="text-center font-semibold mb-1 text-lg">
                  Candice Wu
                </h5>
                <span className="text-secondary-text text-base">
                  Product Manager, Sisyphus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-16 px-4">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex justify-center items-center">
              <span className="border rounded-2xl px-2 py-1 text-text bg-badge-background">
                Features
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-3xl text-center">
                Cutting-edge features for advanced analytics
              </h2>
            </div>
            <div>
              <p className="text-center text-secondary-text text-lg">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>
          </div>
          <div className="my-12 flex justify-center items-center lg:mb-0">
            {matches ? (
              <img src={FeaturesImage} alt="" />
            ) : (
              <img src={FeaturesImageLarge} />
            )}
          </div>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-y-8 md:flex-wrap md:justify-center">
            <FeaturesCard
              text="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
              heading={'Share team inboxes'}
              icon={<MessagesSquare />}
            >
              <button className="flex text-text gap-2">
                <span className="font-semibold">Learn More</span>
                <ArrowRight />
              </button>
            </FeaturesCard>
            <FeaturesCard
              text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
              heading={'Deliver instant answers'}
              icon={<Zap />}
            >
              <button className="flex text-text gap-2">
                <span className="font-semibold">Learn More</span>
                <ArrowRight />
              </button>
            </FeaturesCard>
            <FeaturesCard
              text="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
              heading={'Manage your team with reports'}
              icon={<ChartNoAxesCombined />}
            >
              <button className="flex text-text gap-2">
                <span className="font-semibold">Learn More</span>
                <ArrowRight />
              </button>
            </FeaturesCard>
          </div>
        </div>
      </section>
      <div className="my-16 px-4 lg:my-24 lg:mx-20">
        <div className="border"></div>
      </div>
      <section>
        <div className="px-4">
          <div>
            <h2 className="text-center mb-4 font-semibold text-3xl">
              Frequently asked questions
            </h2>
            <p className="text-center text-secondary-text text-lg">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="mt-12 lg:max-w-3xl lg:mx-auto">
            <div>
              <Faq />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-12 lg:mx-20">
            <div className="mx-4 bg-team-bg px-4 py-8">
              <div className=" mb-6 flex items-center justify-center">
                <div className="">
                  <div className="relative h-14 w-[120px]">
                    <div className="absolute left-0 -bottom-2">
                      <img src={FaqAvatar2} alt="" />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 z-20">
                      <img src={FaqAvatar1} alt="" />
                    </div>
                    <div className="absolute right-0 -bottom-2">
                      <img src={FaqAvatar3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col gap-2">
                <h4 className="text-center text-xl font-semibold">
                  Still have questions?
                </h4>
                <p className="text-center">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <button className="bg-btn-primary py-3 px-5 rounded-xl text-white">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-3 my-16 lg:mx-24">
        <div className="border"></div>
      </div>
      <section>
        <div className="px-4 lg:m-24">
          <div>
            <h2 className="text-text font-semibold text-sm mb-3">Our blog</h2>
            <h3 className="font-semibold text-3xl mb-4 lg:text-4xl">
              Lastest blog posts
            </h3>
            <p className="text-lg text-secondary-text">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div className="mt-12 md:flex md:justify-center lg:block">
            <div className="flex flex-col items-center gap-12 md:max-w-2xl lg:flex-row lg:justify-between lg:max-w-full">
              <Blog
                blogImage={Blog1}
                avatarImage={AvatarBlog1}
                subHeading="Design"
                heading="UX review presentations"
                text="How do you create compelling presentations that wow your colleagues
                and impress your managers?"
                name="Olivia Rhye"
                date="20 Jan 2024"
              />
              <Blog
                blogImage={Blog2}
                avatarImage={AvatarBlog3}
                subHeading="Product"
                heading="Migrating to Linear 101"
                text="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
                name="Phoenix Baker"
                date="19 Jan 2024"
              />
              <Blog
                blogImage={Blog3}
                avatarImage={AvatarBlog2}
                subHeading="Software Engineering"
                heading="Building your API stack"
                text="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
                name="Lana Steiner"
                date="18 Jan 2024"
              />
              {matches ? (
                <div className="w-full sm:w-1/2">
                  <button className="bg-btn-primary w-full py-3 rounded-lg text-white">
                    View all posts
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-16 bg-team-bg">
          <div className="px-4 py-16">
            <div className="mb-8">
              <h2 className="font-semibold text-3xl mb-4 text-center">
                Start your free trial
              </h2>
              <p className="text-secondary-text text-center">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:w-1/2 md:mx-auto lg:w-3/12">
              <button className="w-full text-center bg-btn-primary rounded-lg py-3 text-white">
                Get started
              </button>
              <button className="w-full text-center border rounded-lg py-3">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
