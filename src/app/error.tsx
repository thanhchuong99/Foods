'use client'; // Error components must be Client Components

import { Button } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error',
};

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-5 fixed bg-white">
      <h2>Something went wrong!</h2>
      <br />
      {error.message}
      <Button
        variant="contained"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
