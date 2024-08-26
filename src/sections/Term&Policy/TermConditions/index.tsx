'use client';

import TitleSection from '@/components/TitleSection';
import React from 'react';
import { useGetPageConfigQuery } from '@/queries/content/useGetPageConfig';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import Content from '@/sections/Term&Policy/Content';
import useAutoScrollTop from '@/hooks/useAutoScrollTop';

interface Props {
  isMobile?: boolean;
}

const TermConditionPage = ({ isMobile }: Props) => {
  const { data: content } = useQueryWrapper(
    useGetPageConfigQuery(isMobile ? pageType.TermOfServiceMobile : pageType.TermOfService),
  );

  // Fix sometimes the page doesn't scroll to top
  // https://github.com/vercel/next.js/issues/28778
  useAutoScrollTop(content);

  return (
    <>
      <TitleSection title="TERMS & CONDITIONS" />
      <Content content={content?.content} />
    </>
  );
};

export default TermConditionPage;
