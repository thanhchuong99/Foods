import useAppInformation from '@/hooks/useAppInformation';
import { basic, dark, primary } from '@/theme/colors';
import { nunitoFont } from '@/util/fonts';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Chip, Container, Typography } from '@mui/material';
import Link from 'next/link';

const textStyle = {
  ...nunitoFont.style,
  fontWeight: 500,
  fontSize: '1.25rem',
  color: dark['40'],
  lineHeight: '1.3',
};

const chipStyle = {
  color: `${primary.base}`,
  borderColor: 'currentcolor',
  marginTop: 3,
  borderWidth: '2px',
  borderRadius: '18px',
  padding: '7.5px 12px',
  height: 'fit-content',
  '& .MuiChip-label': {
    padding: 0,
    marginLeft: '10px',
    fontWeight: 700,
    fontSize: '0.875rem',
  },
  '& .MuiChip-icon': {
    margin: 0,
    width: '25px',
    height: '24px',
  },
};

const MAIL_ADDRESS = 'help@Foodsapp.com';

const Feedback = () => {
  const appInformation = useAppInformation();

  return (
    <Box
      sx={{
        paddingY: {
          xs: '64px',
          lg: '90px',
        },
        backgroundColor: basic.white,
      }}
    >
      <Container
        sx={theme => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: '760px',
            margin: '0 auto',
          },
        })}
      >
        <Typography sx={textStyle}>
          Hi! We’re happy to see you and want to ensure your experience using Foods is excellent!.
        </Typography>
        <Typography
          sx={{
            ...textStyle,
            marginTop: {
              xs: 5,
              lg: 4,
            },
          }}
        >
          Contact us using the email address below, and we’ll get back to you as soon as possible. Thank you!
        </Typography>
        <Link href={`mailto:${appInformation?.contact_email ?? MAIL_ADDRESS}`}>
          <Chip
            label={appInformation?.contact_email ?? MAIL_ADDRESS}
            sx={chipStyle}
            variant="outlined"
            icon={<EmailIcon color="inherit" />}
          />
        </Link>
      </Container>
    </Box>
  );
};

export default Feedback;
