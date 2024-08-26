import { accent, dark } from '@/theme/colors';
import { Button, Card, Typography } from '@mui/material';
import Image from 'next/image';
import { paytoneOneFont } from '@/util/fonts';

const FreeCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        width: {
          xs: '100%',
          lg: '357px',
        },
        padding: '32px',
        borderRadius: '24px',
        height: {
          lg: '506px',
        },
        bgcolor: accent.softYellow,
        flexShrink: 0,
      }}
    >
      <Image
        src="/assets/svg/pricing-page-image.svg"
        width={119}
        height={163}
        alt="pricing-card"
        className="-mt-[7px] -mb-[14px]"
      />
      <Typography
        sx={{
          marginTop: {
            xs: '48px',
            lg: '22.48px',
          },
          color: dark[50],
          fontWeight: 4000,
          fontSize: '1.5rem',
        }}
      >
        INTRO OFFER
      </Typography>
      <Typography
        sx={{
          ...paytoneOneFont.style,
          color: dark.base,
          fontWeight: 400,
          fontSize: '3rem',
          marginBottom: {
            xs: '48px',
            lg: '22.48px',
          },
        }}
      >
        FREE
      </Typography>
      <Typography
        sx={{
          color: dark[50],
          fontWeight: 400,
          fontSize: '1rem',
          marginBottom: {
            xs: '48px',
            lg: '22.48px',
          },
        }}
      >
        Experience our app at no cost for a limited time! Take full advantage of all features with our introductory
        offer.
      </Typography>
      <Button sx={{ height: 46, fontSize: '1rem', lineHeight: '22px' }} fullWidth variant="contained" color="primary">
        Choose Plan
      </Button>
    </Card>
  );
};

export default FreeCard;
