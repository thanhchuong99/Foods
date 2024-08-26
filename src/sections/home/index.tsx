'use client';

import GetStartNow from '../../components/GetStartNow';
import AboutUs from './AboutUs';
import Expose from './Expose';
import HeroSection from './HeroSection';
import HowDoesItWork from './HowDoesItWork';
import PricingPage from './PricingPage/PricingPage';
import VideoSection from './VideoSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowDoesItWork />
      <VideoSection />
      <Expose />
      <AboutUs />
      <PricingPage />
      <GetStartNow />
    </>
  );
};

export default HomePage;
