'use client';

import GetStartNow from '@/components/GetStartNow';
import Feedback from '@/sections/contact/Feedback';
import FAQS from '@/sections/contact/FAQS';
import TitleSection from '@/components/TitleSection';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <TitleSection title="CONTACT US" />
      <Feedback />
      <FAQS />
      <GetStartNow />
    </>
  );
};

export default HomePage;
