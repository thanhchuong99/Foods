'use client';
import { Box, Stack, Typography } from '@mui/material';
import { Player, Controls, IPlayerProps } from '@lottiefiles/react-lottie-player';
import { dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import React, { FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

export interface StateProps {
  title?: string;
  content?: React.ReactNode;
  action?: {
    disabled?: boolean;
    loading?: boolean;
    label: string;
    href?: string;
    onClick?: () => void;
  };
  playerProps?: IPlayerProps;
  controlsProps?: Controls;
}

const State: FC<StateProps> = ({ title, content, action, playerProps, controlsProps }) => {
  return (
    <Stack>
      <Player
        {...playerProps}
        keepLastFrame
        autoplay
        src={playerProps?.src as string | object}
        style={{ width: 350, height: 350, padding: '40px' }}
      >
        <Controls {...controlsProps} visible={false} />
      </Player>
      <Typography
        sx={{
          fontSize: {
            xs: '1.5rem',
            '2md': '1.875rem',
          },
          textAlign: 'center',
          paddingRight: '16px',
          lineHeight: '1.2',
        }}
        variant="h1"
        style={paytoneOneFont.style}
      >
        {title}
      </Typography>
      <Box
        sx={{
          mt: 1,
          mb: 2,
          color: dark[40],
          textAlign: 'center',
          fontSize: '1.25rem',
        }}
      >
        {content}
      </Box>
      {action && (
        <LoadingButton
          disabled={action.disabled}
          loading={action.loading}
          sx={{
            width: '100%',
            maxWidth: '200px',
            margin: 'auto',
            padding: '12px 24px',
            fontWeight: 900,
            fontSize: '1rem',
            height: '46px',
          }}
          href={action?.href}
          onClick={action.onClick}
          variant="contained"
          color="primary"
        >
          {action?.label}
        </LoadingButton>
      )}
    </Stack>
  );
};

export default State;
