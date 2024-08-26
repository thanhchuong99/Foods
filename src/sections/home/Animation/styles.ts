import { keyframes } from '@mui/material';

export const center = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export const keyframesBounce = (from: any, to: any) => keyframes`
/* zoom out */ 
  0%, 20%, 100% {
    ${from}
  }
  40%, 80%{
    ${to}
  }
`;

export const zoomKeyframes = (from: number, to: number) => {
  const fromValue = {
    width: `${from}px`,
    height: `${from}px`,
  };
  const toValue = {
    width: `${to}px`,
    height: `${to}px`,
  };

  return keyframesBounce(fromValue, toValue);
};

export const moveVerticalKeyframes = (from: string, to: string) => {
  const fromValue = {
    top: from,
  };
  const toValue = {
    top: to,
  };

  return keyframesBounce(fromValue, toValue);
};
interface TopLeft {
  top: number;
  left: number;
}

type Hide = 'from' | 'to';
export const moveItemKeyframesAndHide = (from: TopLeft, to: TopLeft, hide?: Hide) => {
  const fromValue = {
    top: `${from.top}px`,
    left: `${from.left}px`,
    opacity: 1,
  };
  const toValue = {
    top: `${to.top}px`,
    left: `${to.left}px`,
    opacity: 1,
  };
  switch (hide) {
    case 'from':
      fromValue.opacity = 0;
      toValue.opacity = 1;
      break;
    case 'to':
      fromValue.opacity = 1;
      toValue.opacity = 0;
      break;
    default:
      break;
  }

  return keyframesBounce(fromValue, toValue);
};
