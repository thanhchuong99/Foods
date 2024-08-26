import { basic, dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import Image from 'next/image';

interface HowDoesItWorkTileProps {
  title: string;
  description: string;
  imageSrc: string;
  sx?: SxProps<Theme>;
}

const HowDoesItWorkTile = ({ title, description, imageSrc, sx }: HowDoesItWorkTileProps) => {
  return (
    <Box sx={sx}>
      <Box
        sx={{
          backgroundColor: basic.white,
          boxShadow: '0 24px 16px 0px rgba(202, 202, 202, 0.15)',
          padding: '48px',
          width: '156px',
          height: '160px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '24px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Image className="ml-auto mr-auto block" alt="" width={60} height={60} src={imageSrc} />
      </Box>
      <Typography
        sx={{
          marginTop: {
            xs: '37px',
          },
          fontWeight: 400,
          fontSize: '1.75rem',
          lineHeight: '39px',
          textAlign: 'center',
          color: dark.base,
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
        component="h3"
        style={paytoneOneFont.style}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: 500,
          color: dark[40],
          width: '228px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: {
            xs: '8px',
            lg: '0',
          },
          lineHeight: '22px',
        }}
        component="p"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HowDoesItWorkTile;
