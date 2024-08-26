'use client';
import MediaCard, { Props as CardProps } from '@/components/MediaCard';
import { Box, Container, Stack, Theme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import styles from './styles.module.css';
import howItWorks1Image from 'public/assets/image/how-it-works1.png';
import howItWorks1MobileImage from 'public/assets/image/how-it-works1-mobile.png';
import howItWorks2Image from 'public/assets/image/how-it-works2.png';
import howItWorks2MobileImage from 'public/assets/image/how-it-works2-mobile.png';
import howItWorks3Image from 'public/assets/image/how-it-works3.png';
import howItWorks3MobileImage from 'public/assets/image/how-it-works3-mobile.png';
import howItWorks4Image from 'public/assets/image/how-it-works4.png';
import howItWorks4MobileImage from 'public/assets/image/how-it-works4-mobile.png';
import howItWorks5Image from 'public/assets/image/how-it-works5.png';
import howItWorks5MobileImage from 'public/assets/image/how-it-works5-mobile.png';
import howItWorkLineImage from 'public/assets/image/how-it-works-line.png';
import clsx from 'clsx';

const MediaCardList: React.FC = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const cards: CardProps[] = [
    {
      title: 'Create child profile',
      descriptions: [
        'Foods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.',
        "If you have concerns regarding your child's eating, it is important to discuss this with your GP or pediatrician before using these tools.",
      ],
      image: {
        src: matches ? howItWorks1MobileImage : howItWorks1Image,
        alt: '',
      },
      sx: {
        pb: {
          xs: '0',
          lg: '141px',
        },
      },
      reverse: false,
      className: clsx(styles.howDoesItWork1, 'how-does-it-work-1', 'how-does-it-work'),
    },
    {
      title: 'select foods',
      descriptions: [
        'Foods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.',
        "If you have concerns regarding your child's eating, it is important to discuss this with your GP or pediatrician before using these tools.",
      ],
      image: {
        src: matches ? howItWorks2MobileImage : howItWorks2Image,
        alt: '',
      },
      sx: {
        pb: { lg: '141px' },
        '> div': {
          gap: { lg: '64px' },
        },
      },
      reverse: true,
      className: clsx(styles.howDoesItWork2, 'how-does-it-work-2', 'how-does-it-work'),
    },
    {
      title: 'playing food adventure',
      descriptions: [
        'Foods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.',
        "If you have concerns regarding your child's eating, it is important to discuss this with your GP or pediatrician before using these tools.",
      ],
      image: {
        src: matches ? howItWorks3MobileImage : howItWorks3Image,
        alt: '',
      },
      reverse: false,
      sx: {
        pb: { lg: '141px' },
        position: { lg: 'relative' },
      },
      className: clsx(styles.howDoesItWork3, 'how-does-it-work-3', 'how-does-it-work'),
    },
    {
      title: 'add exposure',
      descriptions: [
        'Foods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.',
        "If you have concerns regarding your child's eating, it is important to discuss this with your GP or pediatrician before using these tools.",
      ],
      image: {
        src: matches ? howItWorks4MobileImage : howItWorks4Image,
        alt: '',
      },
      reverse: true,
      sx: {
        pb: { lg: '141px' },
      },
      className: clsx(styles.howDoesItWork4, 'how-does-it-work-4', 'how-does-it-work'),
    },
    {
      title: 'EARN AWARDS',
      descriptions: [
        'Foods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.',
        "If you have concerns regarding your child's eating, it is important to discuss this with your GP or pediatrician before using these tools.",
      ],
      image: {
        src: matches ? howItWorks5MobileImage : howItWorks5Image,
        alt: '',
      },
      reverse: false,
      className: clsx(styles.howDoesItWork5, 'how-does-it-work-5', 'how-does-it-work'),
    },
  ];

  return (
    <Box
      sx={theme => ({
        [theme.breakpoints.down('lg')]: {
          '.MuiSkeleton-root': {
            width: '100% !important',
            height: '100% !important',
          },

          paddingTop: '64px',
          paddingBottom: '178px',

          '.how-does-it-work-1 .media-card__wrap-image': {
            width: 432,
            height: 342,
          },

          '.how-does-it-work-2 .media-card__wrap-image': {
            width: 428 + 40,
            height: 379 + 40,
          },

          '.how-does-it-work-3 .media-card__wrap-image': {
            width: 393.5,
            height: 450,
          },

          '.how-does-it-work-4 .media-card__wrap-image': {
            width: 570,
            height: 530,

            img: {
              marginTop: '-30px',
            },
          },

          '.how-does-it-work-5 .media-card__wrap-image': {},
        },

        [theme.breakpoints.down('sm')]: {
          '.how-does-it-work .media-card__wrap-image': {
            width: 'auto',
            height: 'auto',
          },
        },

        [theme.breakpoints.up('lg')]: {
          paddingTop: '95px',
          paddingBottom: '95px',

          '.how-does-it-work-1 .media-card__wrap-image': {
            width: 455,
            height: 376,
            flexShrink: 0,
          },

          '.how-does-it-work-2': {
            marginTop: '-25px',
          },

          '.how-does-it-work-2 .media-card__wrap-image': {
            width: 566,
            height: 441,
            flexShrink: 0,
            position: 'relative',
            bottom: -8,
            left: 28,
          },

          '.how-does-it-work-3': {
            marginTop: '-25px',
          },

          '.how-does-it-work-3 .media-card__wrap-image': {
            width: 393,
            height: 450,
            flexShrink: 0,
            position: 'relative',
            bottom: -4,
          },

          '.how-does-it-work-4': {
            marginTop: '-25px',
          },

          '.how-does-it-work-4 .media-card__wrap-image': {
            width: 570,
            height: 586,
            flexShrink: 0,
            position: 'relative',
            left: 138,
            bottom: 12,
          },

          '.how-does-it-work-5 .media-card__wrap-image': {
            width: 376,
            height: 532,
            flexShrink: 0,
          },
        },
      })}
    >
      <Container
        maxWidth="lg"
        sx={() => ({
          position: 'relative',
        })}
      >
        <Stack>
          {cards.map((card, index) => (
            <MediaCard key={index} {...card} />
          ))}
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            top: '365px',
            left: '212px',
            height: '2420px',
            overflow: 'hidden',
            display: {
              xs: 'none',
              lg: 'block',
            },
          }}
        >
          <Image src={howItWorkLineImage} quality={100} alt="how-it-works-line" />
        </Box>
      </Container>
    </Box>
  );
};

export default MediaCardList;
