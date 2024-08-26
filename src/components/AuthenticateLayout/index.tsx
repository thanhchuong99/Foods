'use client';
import { Box, Grid, styled } from '@mui/material';

const StyledGrid = styled(Grid)(() => ({
  '@media (max-width: 992px)': {
    flexBasis: '100%',
    width: '100%',
    maxWidth: '100%',
  },
}));

const AuthenticateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '100%' }}>
        <StyledGrid item md={6}>
          <Box
            sx={theme => ({
              [theme.breakpoints.up('xs')]: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                paddingX: '24px',
                paddingY: '10px',
              },
            })}
          >
            {children}
          </Box>
        </StyledGrid>
        <StyledGrid
          item
          sx={theme => ({
            [theme.breakpoints.down('md')]: {
              display: 'none',
            },
            '@media (max-width: 992px)': {
              display: 'none',
            },
          })}
          md={6}
        >
          <Box
            sx={() => ({
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/assets/image/authenticate-background2.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            })}
          />
        </StyledGrid>
      </Grid>
    </Box>
  );
};

export default AuthenticateLayout;
