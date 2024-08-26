import { dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import Box from '@mui/material/Box';
import { center, moveVerticalKeyframes } from '../styles';
import { configAnimation, constType } from './_config';

const Text = () => {
  const { from, to } = configAnimation.text;

  return (
    <Box
      component={'div'}
      sx={{
        textTransform: 'uppercase',
        ...center,
        animation: `${moveVerticalKeyframes(from, to)} ${constType}`,
      }}
    >
      <Box
        component="span"
        className="flex-center"
        sx={{
          color: dark.base,
          fontSize: 32,
          height: '69px',
          fontFamily: paytoneOneFont.style.fontFamily,
          padding: '12px 24px',
          background: 'linear-gradient(180deg, #BAFBA0 0%, #9FE583 100%)',
          border: '2px solid #FFFFFF',
          boxShadow: '0px 10px 20px 0px #334A7033',
          borderRadius: '18px',
        }}
      >
        broccoli
      </Box>
    </Box>
  );
};

export default Text;
