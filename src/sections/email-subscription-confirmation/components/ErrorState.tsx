'use client';
import errorJson from 'public/error.json';
import State, { type StateProps } from './State';
import { FC } from 'react';

interface ErrorStateProps {
  title?: string;
  error?: string;
  actions?: StateProps['action'];
}

const ErrorState: FC<ErrorStateProps> = ({ title, error, actions }) => {
  return (
    <State
      title={title ?? 'Oops! Something Went Wrong.'}
      content={error ?? 'We Couldn’t Complete Your Email Subscription.'}
      action={actions}
      playerProps={{ loop: false, src: errorJson }}
    />
  );
};

export default ErrorState;
