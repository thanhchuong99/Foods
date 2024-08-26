'use client';

import Button from '@mui/material/Button';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
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
      </body>
    </html>
  );
}
