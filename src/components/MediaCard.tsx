'use client';
import { Box, Card, SxProps, Theme, Typography } from '@mui/material';
import { dark } from '@/theme/colors';
import React from 'react';
import LazyLoadImage from './LazyLoadImage';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Props {
  reverse?: boolean;
  title: string;
  descriptions: string[];
  image: {
    src: string | StaticImport;
    alt: string;
    className?: string;
  };
  topLine?: React.ReactNode;
  bottomLine?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
}

const MediaCard = ({ descriptions, image, title, reverse, className, style, sx }: Props) => {
  return (
    <Card
      sx={{
        position: 'relative',
        marginBottom: {
          xs: '160px',
          lg: 0,
        },
        ':last-child': {
          marginBottom: 0,
        },
        overflow: 'visible',
        ...sx,
      }}
      elevation={0}
      className={className}
      style={style}
      component="section"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection={reverse ? 'row-reverse' : 'row'}
        justifyContent={reverse ? 'flex-end' : 'flex-start'}
      >
        <Box
          className="media-card__wrap-image"
          sx={{ display: 'flex', justifyContent: !reverse ? 'flex-start' : 'flex-end' }}
        >
          <LazyLoadImage src={image.src} alt={image.alt} className={image.className} quality={100} />
        </Box>
        <Box
          className="media-card__text-wrapper"
          sx={{
            paddingLeft: {
              xs: 0,
              lg: !reverse ? '64px' : '',
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '2.25rem',
                lg: '2.5rem',
              },
              textTransform: 'uppercase',
              marginBottom: '24px',
              textAlign: 'left',
              marginTop: {
                xs: '64px',
                lg: 0,
              },
            }}
          >
            {title}
          </Typography>
          {descriptions.map((description, index) => (
            <Typography
              sx={{
                fontSize: '1.25rem',
                lineHeight: '27px',
                fontWeight: 500,
                color: dark[40],
                paddingBottom: {
                  xs: '38px',
                  md: '10px',
                  lg: '20px',
                },
                width: {
                  lg: '531px',
                },
                whiteSpace: 'pre-line',

                ':last-child': {
                  paddingBottom: 0,
                },
              }}
              key={index}
            >
              {description}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
