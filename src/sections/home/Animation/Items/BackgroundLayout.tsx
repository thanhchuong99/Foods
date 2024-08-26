import { basic } from '@/theme/colors';
import { nunitoFont } from '@/util/fonts';
import { Box, SxProps, Theme } from '@mui/material';

interface BackgroundLayoutProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const BackgroundLayout = ({ children, sx }: BackgroundLayoutProps) => {
  return (
    <Box
      component={'div'}
      sx={{
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        textAlign: 'center',
        padding: '19px 32px 32px',
        borderRadius: '47px',
        backgroundColor: basic.white,
        boxShadow: '0px 20px 30px 0px #334A7026',
        fontFamily: nunitoFont.style.fontFamily,
        fontSize: '32px',
        fontWeight: 900,
        lineHeight: '44px',
        letterSpacing: '0',
        textTransform: 'uppercase',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundLayout;
