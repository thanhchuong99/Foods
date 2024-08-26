import { Keyframes, keyframes } from '@emotion/react';

const leafHeight = 31;

export const carrot = keyframes`
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(-14deg);
  }

  30% {
    transform: rotate(-13deg);
  }

  40% {
    transform: rotate(-14deg);
  }

  60% {
    transform: rotate(2deg);
  }

  70%, 100% {
    transform: rotate(0deg);
  }
`;

export const leafDownKeyframes = keyframes`
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(calc((12 / ${leafHeight}) * 100%));
  }

  30% {
    transform: translateY(calc((10 / ${leafHeight}) * 100%));
  }

  40% {
    transform: translateY(calc((12 / ${leafHeight}) * 100%));
  }

  60% {
    transform: translateY(calc((-2 / ${leafHeight}) * 100%));
  }

  70%, 100% {
    transform: translateY(0);
  }
`;

export const leafUpKeyframes = keyframes`
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(calc((-12 / ${leafHeight}) * 100%));
  }

  30% {
    transform: translateY(calc((-10 / ${leafHeight}) * 100%));
  }

  40% {
    transform: translateY(calc((-12 / ${leafHeight}) * 100%));
  }

  60% {
    transform: translateY(calc((2 / ${leafHeight}) * 100%));
  }

  70%, 100% {
    transform: translateY(0);
  }
`;

export const leafUp2Keyframes = keyframes`
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(calc((-25 / ${leafHeight}) * 100%));
  }

  30% {
    transform: translateY(calc((-18 / ${leafHeight}) * 100%));
  }

  40% {
    transform: translateY(calc((-25 / ${leafHeight}) * 100%));
  }

  60% {
    transform: translateY(calc((2 / ${leafHeight}) * 100%));
  }

  70%, 100% {
    transform: translateY(0);
  }
`;

export const numberRotateLeft = keyframes`
  0% {
    transform: rotate(30deg);
  }

  20% {
    transform: rotate(-5deg);
  }

  30% {
    transform: rotate(0deg);
  }

  40% {
    transform: rotate(-5deg);
  }

  60% {
    transform: rotate(31deg);
  }

  70%, 100% {
    transform: rotate(30deg);
  }
`;

export const numberRotateRight = keyframes`
  0% {
    transform: rotate(0);
  }

  20% {
    transform: rotate(50deg);
  }

  30% {
    transform: rotate(40deg);
  }

  40% {
    transform: rotate(50deg);
  }

  60% {
    transform: rotate(2deg);
  }

  70%, 100% {
    transform: rotate(0);
  }
`;

export const starCircle = keyframes`
  0% {
    transform: rotate(0);
  }

  20% {
    transform: rotate(28deg);
  }

  30% {
    transform: rotate(25deg);
  }

  40% {
    transform: rotate(28deg);
  }

  60% {
    transform: rotate(2deg);
  }

  70%, 100% {
    transform: rotate(0);
  }
`;

export const starGroup = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
    transform-origin: 50% 120%;
  }

  20% {
    transform: scale(0.7) translate(3%, 3%);
    opacity: 0;
  }

  30% {
    transform: scale(0);
  }

  40% {
    transform: scale(0.7);
    opacity: 0;
  }

  60% {
    transform: scale(1.05);
    opacity: 1;
  }

  70%, 100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const numberSeven = keyframes`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(38%, -8%);
  }

  30% {
    transform: translate(36%, -8%);
  }

  40% {
    transform: translate(38%, -8%);
  }

  60% {
    transform: translate(-2%, 0);
  }

  70%, 100% {
    transform: translate(0, 0);
  }
`;

export const numberEight = keyframes`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(38%, -20%);
  }

  30% {
    transform: translate(34%, -18%);
  }

  40% {
    transform: translate(38%, -20%);
  }

  60% {
    transform: translate(-2%, 0);
  }

  70%, 100% {
    transform: translate(0, 0);
  }
`;

export const numberNine = keyframes`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(20%, 0);
  }

  30% {
    transform: translate(18%, 0);
  }

  40% {
    transform: translate(20%,0);
  }

  60% {
    transform: translate(-2%, 0);
  }

  70%, 100% {
    transform: translate(0, 0);
  }
`;

export const grayStarCircle = keyframes`
  0% {
    transform: translate(0, 0);
  }

  20% {
    transform: translate(0, -35%);
  }

  30% {
    transform: translate(0, -32%);
  }

  40% {
    transform: translate(0, -35%);
  }

  60% {
    transform: translate(0, 2%);
  }

  70%, 100% {
    transform: translate(0, 0);
  }
`;

export const pear = keyframes`
  0% {
    height: calc(250.35 / 848 * 100%);
  }

  20% {
    height: calc(195.35 / 848 * 100%);
  }

  30% {
    height: calc(200.35 / 848 * 100%);
  }

  40% {
    height: calc(195.35 / 848 * 100%);
  }

  60% {
    height: calc(255.35 / 848 * 100%);
  }

  70%, 100% {
    height: calc(250.35 / 848 * 100%);
  }
`;

export const certificate = keyframes`
  0% {
    height: calc(233.33333333 / 848 * 100%);
  }

  20% {
    height: calc(223.33333333 / 848 * 100%);
    transform: translateY(55px);
  }

  30% {
    height: calc(222.33333333 / 848 * 100%);
    transform: translateY(52px);
  }

  40% {
    height: calc(223.33333333 / 848 * 100%);
    transform: translateY(55px);
  }

  60% {
    height: calc(243.33333333 / 848 * 100%);
    transform: translateY(0);
  }

  70%, 100% {
    height: calc(233.33333333 / 848 * 100%);
    transform: translateY(0);
  }
`;

export const carrotCard = keyframes`
  0% {
    transform: rotate(-50deg);
  }

  20% {
    transform: rotate(-15deg) translateY(-30px);
  }

  30% {
    transform: rotate(-20deg) translateY(-30px);
  }

  40% {
    transform: rotate(-15deg) translateY(-30px);
  }

  60% {
    transform: rotate(-52deg) translateY(2px);
  }

  70%, 100% {
    transform: rotate(-50deg) translateY(0);
  }
`;

export const appleCard = keyframes`
  0% {
    transform: rotate(-20deg);
  }

  20% {
    transform: rotate(25deg);
  }

  30% {
    transform: rotate(20deg);
  }

  40% {
    transform: rotate(25deg);
  }

  60% {
    transform: rotate(-24deg);
  }

  70%, 100% {
    transform: rotate(-20deg);
  }
`;

export const kiwiCard = keyframes`
  0% {
    transform-origin: 0 100%;
    transform: rotate(-40deg);
  }

  20% {
    transform-origin: 0 100%;
    transform: rotate(10deg);
  }

  30% {
    transform-origin: 0 100%;
    transform: rotate(8deg);
  }

  40% {
    transform-origin: 0 100%;
    transform: rotate(10deg);
  }

  60% {
    transform-origin: 0 100%;
    transform: rotate(-42deg);
  }

  70%, 100% {
    transform-origin: 0 100%;
    transform: rotate(-40deg);
  }
`;

export const generateAnimation = (keyframes?: Keyframes) =>
  keyframes ? `${keyframes} 2.52s 0s both normal ease-in-out infinite` : '';
