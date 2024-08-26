'use client';
import { Box, Container, Typography, styled } from '@mui/material';
import { FC } from 'react';

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FFFFFF 93px, #F4F8FC 100%)',
  padding: '60px 0',
  position: 'relative',
  paddingTop: '86px',
  paddingBottom: '112px',
  height: '265px',

  [theme.breakpoints.up('lg')]: {
    paddingTop: '86px',
  },
}));

const SectionInner = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'absolute',
  bottom: '104px',
  left: '50%',
  transform: 'translateX(-50%)',
  minHeight: 0,
  width: '100%',
  wordBreak: 'break-word',
  lineHeight: '67px',
  paddingLeft: '5px',
  paddingRight: '5px',

  [theme.breakpoints.up('xs')]: {
    maxWidth: 420,
  },

  [theme.breakpoints.up('xs')]: {
    maxWidth: 'auto',
  },
}));

interface Props {
  title: string;
  className?: string;
}

const TitleSection: FC<Props> = ({ title, className }) => {
  return (
    <SectionWrapper className={className}>
      <Container>
        <SectionInner>
          <Typography variant="h1">{title}</Typography>
        </SectionInner>
      </Container>
    </SectionWrapper>
  );
};

export default TitleSection;
