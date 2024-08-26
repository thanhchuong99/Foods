'use client';

import TitleSection from '@/components/TitleSection';
import React from 'react';
import Content from '../Content';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { useGetPageConfigQuery } from '@/queries/content/useGetPageConfig';
import { pageType } from '@hdwebsoft/wonderfoods-api-customer-sdk/libs/api/system/models';
import useAutoScrollTop from '@/hooks/useAutoScrollTop';

interface Props {
  isMobile?: boolean;
}

const PrivacyPolicyPage = ({ isMobile }: Props) => {
  const { data: content } = useQueryWrapper(useGetPageConfigQuery(isMobile ? pageType.PolicyMobile : pageType.Policy));

  // Fix sometimes the page doesn't scroll to top
  // https://github.com/vercel/next.js/issues/28778
  useAutoScrollTop(content);

  return (
    <>
      <TitleSection title="PRIVACY POLICY" />
      <Content content={content?.content} />
    </>
  );
};

export default PrivacyPolicyPage;
