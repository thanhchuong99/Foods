import { Box, CircularProgress } from '@mui/material';

const FullScreenLoading = () => {
  return (
    <Box
      sx={{
        zIndex: 999,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default FullScreenLoading;
