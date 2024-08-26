import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';
import { Box, Skeleton, SxProps, Theme } from '@mui/material';
import clsx from 'clsx';

interface Props extends ImageProps {
  sxWrapper?: SxProps<Theme>;
}

const LazyLoadImage: FC<Props> = props => {
  const [loaded, setLoaded] = useState(false);

  const { sxWrapper, ...restProps } = props;

  return (
    <Box className="lazy-load-image" sx={{ position: 'relative', width: '100%', height: '100%', ...sxWrapper }}>
      <Image
        onLoad={() => {
          setLoaded(true);
        }}
        {...restProps}
        className={clsx(restProps.className, {
          invisible: !loaded,
        })}
        alt={restProps.alt}
      />
      {!loaded && (
        <Skeleton
          sx={{
            bgcolor: 'grey.100',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 99,
          }}
          variant="rounded"
          animation="wave"
          width={restProps.width}
          height={restProps.height}
          {...restProps}
        />
      )}
    </Box>
  );
};

export default LazyLoadImage;
