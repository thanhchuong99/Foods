'use client';
import { FC } from 'react';
import loadingJson from 'public/walking-broccoli.json';
import State, { StateProps } from './State';

interface LoadingStateProps {
  title?: string;
  content?: StateProps['content'];
}

const LoadingState: FC<LoadingStateProps> = ({ title, content }) => {
  return (
    <State
      title={title || 'Loading...'}
      content={content || 'Please wait a moment while we process your request.'}
      playerProps={{ loop: true, src: loadingJson }}
    />
  );
};

export default LoadingState;
