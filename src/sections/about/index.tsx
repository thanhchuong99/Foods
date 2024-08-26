'use client';

import React from 'react';
import AboutSection from './AboutSection';
import StoryVisionSection from './StoryVisionSection';
import TeamSection from './TeamSection';
import GetStartNow from '@/components/GetStartNow';
import TitleSection from '@/components/TitleSection';

const AboutPage = () => {
  return (
    <>
      <TitleSection title="about" />
      <AboutSection />
      <StoryVisionSection />
      <TeamSection />
      <GetStartNow />
    </>
  );
};

export default AboutPage;
