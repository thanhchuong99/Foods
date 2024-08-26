import { Box } from '@mui/material';
import Look from './Items/Look';
import Lemon from './Items/Lemon1';
import Melon from './Items/Melon';
import Touch from './Items/Touch';
import Bite from './Items/Bite';
import Smell from './Items/Smell';
import Taste from './Items/Taste';
import Orange from './Items/Orange';
import StarFruit from './Items/StarFruit';
import Logo from './Items/Logo';
import Text from './Items/Text';
import Apple from './Items/Apple';
import { zoomKeyframes, center } from './styles';
import { configAnimation, constType } from './Items/_config';
import Lemon2 from './Items/Lemon2';
import StarFruit2 from './Items/StarFruit2';
import StarFruit3 from './Items/StarFruit3';

const ExposeAnimation = () => {
  const { parent, children1, green } = configAnimation;

  return (
    <Box
      component={'section'}
      sx={{
        fontSize: 'clamp(12px, 2.5vw, 32px)',
        display: 'flex',
      }}
    >
      <Box
        component={'div'}
        id="expose-animation"
        sx={{
          position: 'relative',
          width: '1210px',
          height: '1210px',
          zIndex: -1,
          top: '-26px',
          minWidth: '1210px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          component={'div'}
          sx={{
            background: 'linear-gradient(rgba(245, 249, 253, 0.6), rgba(245, 249, 253, 0))',
            borderRadius: '50%',
            animation: `${zoomKeyframes(parent.from, parent.to)} ${constType}`,
            ...center,
          }}
        />
        <Box
          component={'div'}
          sx={{
            backgroundImage: 'linear-gradient(rgba(245,249,253,1), rgba(245,249,253,0))',
            borderRadius: '50%',
            animation: `${zoomKeyframes(children1.from, children1.to)} ${constType}`,
            ...center,
          }}
        />
        <Box
          component={'div'}
          sx={{
            width: '591px',
            height: '591px',
            borderRadius: '50%',
            border: '1px solid #9FE583',
            background: 'transparent',
            animation: `${zoomKeyframes(green.from, green.to)} ${constType}`,
            ...center,
          }}
        />
        <Box
          component={'div'}
          sx={{
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(245, 249, 253, 0))',
            width: '540px',
            height: '540px',
            borderRadius: '50%',
            ...center,
          }}
        />
        <Lemon />

        <Touch />
        <Bite />
        <Smell />
        <Taste />
        <Orange />
        <StarFruit />
        <Melon />
        <Look />
        <Logo />
        <Text />
        <Apple />
        <Lemon2 />
        <StarFruit2 />
        <StarFruit3 />
      </Box>
    </Box>
  );
};

export default ExposeAnimation;
