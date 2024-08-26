import { Box } from '@mui/material';
import HeroSvg from '../HeroSvg';
import Carrot from './Carrot';
import Leaf from './Leaf';
import {
  leafDownKeyframes,
  leafUp2Keyframes,
  leafUpKeyframes,
  numberEight,
  numberNine,
  numberRotateLeft,
  numberRotateRight,
  numberSeven,
  starCircle,
  starGroup,
  grayStarCircle,
  pear,
  certificate,
  carrotCard,
  appleCard,
  kiwiCard,
  carrot,
} from './keyframes';
import NumberThree from './NumberThree';
import NumberFour from './NumberFour';
import NumberTwo from './NumberTwo';
import StarCircle from './StarCicle';
import StarGroup from './Star';
import NumberSeven from './NumberSeven';
import NumberEight from './NumberEight';
import NumberNine from './NumberNine';
import GrayStarCircle from './GrayStarCircle';
import Pear from './Pear';
import Certificate from './Certificate';
import CarrotCard from './CarrotCard';
import AppleCard from './AppleCard';
import KiwiCard from './Kiwi';

const HeroAnimation = () => {
  return (
    <Box>
      <HeroSvg />
      <Carrot keyframes={carrot} />
      <Leaf keyframes={leafDownKeyframes} />
      <Leaf keyframes={leafUpKeyframes} top="calc(674 / 848 * 100%)" left="calc(274 / 1122 * 100%)" />
      <Leaf keyframes={leafUpKeyframes} top="calc(783 / 848 * 100%)" left="calc(290 / 1122 * 100%)" />
      <Leaf keyframes={leafUpKeyframes} top="calc(737 / 848 * 100%)" left="calc(490 / 1122 * 100%)" />
      <Leaf keyframes={leafDownKeyframes} top="calc(776 / 848 * 100%)" left="calc(665 / 1122 * 100%)" />
      <Leaf keyframes={leafUp2Keyframes} top="calc(621 / 848 * 100%)" left="calc(944 / 1122 * 100%)" />
      <Leaf keyframes={leafUpKeyframes} top="calc(562 / 848 * 100%)" left="calc(985 / 1122 * 100%)" />
      <NumberThree keyframes={numberRotateLeft} />
      <NumberFour keyframes={numberRotateLeft} />
      <NumberTwo keyframes={numberRotateRight} />
      <StarCircle keyframes={starCircle} />
      <StarGroup keyframes={starGroup} />
      <Leaf
        src="/assets/home-hero/white-leaf.png"
        keyframes={leafUpKeyframes}
        top="calc(127 / 848 * 100%)"
        left="calc(513 / 1122 * 100%)"
      />
      <Leaf
        src="/assets/home-hero/white-leaf.png"
        keyframes={leafUpKeyframes}
        top="calc(173 / 848 * 100%)"
        left="calc(581 / 1122 * 100%)"
      />
      <NumberSeven keyframes={numberSeven} />
      <NumberEight keyframes={numberEight} />
      <NumberNine keyframes={numberNine} />
      <GrayStarCircle keyframes={grayStarCircle} />
      <Pear keyframes={pear} />
      <Certificate keyframes={certificate} />
      <CarrotCard keyframes={carrotCard} />
      <AppleCard keyframes={appleCard} />
      <KiwiCard keyframes={kiwiCard} />
    </Box>
  );
};

export default HeroAnimation;
