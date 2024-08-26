import { accent, basic, dark, primary } from '@/theme/colors';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { paytoneOneFont } from '@/util/fonts';
import FreeCard from './FreeCard';
import PaidCard from './PaidCard';

const PricingPage = () => {
  return (
    <Box
      component="section"
      sx={{
        height: {
          xs: 'auto',
          lg: '1057px',
        },
        paddingTop: {
          xs: '100px',
          lg: '100px',
        },
        paddingBottom: {
          xs: '100px',
          lg: '100px',
        },
        bgcolor: '#F5F9FD',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: '64px',
            lineHeight: {
              xs: '56px',
            },
          }}
        >
          PRICING PAGE
        </Typography>
        <Stack direction={{ xs: 'column', lg: 'row' }}>
          <FreeCard />
          <Stack
            justifyContent="space-between"
            direction={{ xs: 'column', lg: 'row' }}
            sx={{
              marginLeft: {
                xs: 0,
                lg: '32px',
              },
              bgcolor: basic.white,
              boxShadow: '0 24px 16px 0 rgba(202, 202, 202, 0.15)',
              borderRadius: '24px',
              flexGrow: 1,
              padding: '48px',
              position: 'relative',
              width: {
                xs: '100%',
                lg: '771px',
              },
              overflow: 'hidden',
              marginTop: {
                xs: '20px',
                lg: 0,
              },
              height: {
                lg: '506px',
              },
            }}
          >
            <PaidCard
              title="Monthly"
              pricing={10}
              description="Pay as you go with our monthly plan for just $10 a month."
              per="month"
              list={[
                'Create up to 5 child profiles',
                'Unlimited food adventures',
                'Custom certificates',
                'Dedicated technical support',
                'Expert nutritionist tips and more',
              ]}
            />
            <Divider
              sx={{
                bgcolor: dark[20],
                flexShrink: 0,
                position: {
                  xs: 'relative',
                  lg: 'absolute',
                },
                width: {
                  xs: '100%',
                  lg: '1px',
                },
                height: {
                  xs: '1px',
                  lg: '410px',
                },
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                marginTop: {
                  xs: '32px',
                  lg: 0,
                },
                marginBottom: {
                  xs: '32px',
                  lg: 0,
                },
                bottom: {
                  xs: 0,
                  lg: '-10px',
                },
              }}
            />
            <Typography
              sx={{
                width: {
                  xs: '146px',
                  lg: '226px',
                },
                height: {
                  xs: '32px',
                  lg: '36px',
                },
                bgcolor: accent.softYellow,
                color: primary.base,
                fontSize: '0.75rem',
                position: {
                  xs: 'static',
                  lg: 'absolute',
                },
                top: '22px',
                right: '-55px',
                transform: {
                  lg: 'rotate(30deg)',
                },
                fontWeight: 900,
                textAlign: 'center',
                textTransform: 'uppercase',
                padding: '8px',
                borderRadius: {
                  xs: '16px',
                  lg: '0',
                },
              }}
            >
              Saving over 40%
            </Typography>
            <PaidCard
              title="ANNUALLY"
              pricing={70}
              description="Enjoy significant savings with our annual plan, priced at only $70 per year."
              per="year"
              list={[
                'Create up to 5 child profiles',
                'Unlimited food adventures',
                'Custom certificates',
                'Dedicated technical support',
                'Expert nutritionist tips and more',
              ]}
            />
          </Stack>
        </Stack>

        <Box
          sx={{
            marginTop: '32px',
            height: {
              xs: 'auto',
              lg: '199px',
            },
            border: `1px solid ${dark[20]}`,
            borderRadius: '24px',
            paddingTop: {
              xs: '32px',
              lg: '32px',
            },
            paddingBottom: {
              xs: '32px',
              lg: '32px',
            },
            paddingLeft: {
              xs: '32px',
              lg: '10px',
            },
            paddingRight: {
              xs: '32px',
              lg: '10px',
            },
          }}
        >
          <Typography
            sx={{ fontSize: '1.5rem', color: dark[50], fontWeight: 400, textAlign: 'center', lineHeight: '33px' }}
          >
            ADD-ON
          </Typography>

          <Typography
            sx={{
              ...paytoneOneFont.style,
              fontSize: '3rem',
              color: dark.base,
              fontWeight: 400,
              textAlign: 'center',
              mb: {
                xs: 0,
                lg: '13px',
              },
              lineHeight: '67px',
            }}
          >
            $20
          </Typography>

          <Typography
            sx={{
              fontSize: '1rem',
              color: dark[50],
              fontWeight: 400,
              textAlign: 'center',
              lineHeight: '22px',
              mt: {
                xs: '-9px',
                lg: 0,
              },
            }}
          >
            bundle including medal, sticker sheet and food utensils
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
