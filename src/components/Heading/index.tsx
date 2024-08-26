import { Typography, styled } from '@mui/material';
import { paytoneOneFont } from '@/util/fonts';

interface HeadingProps {
  children: React.ReactNode;
}

const StyledHeading = styled(Typography)(({ theme }) => ({
  ...paytoneOneFont.style,
  textTransform: 'uppercase',
  marginBottom: '31px',

  [theme.breakpoints.up('lg')]: {
    lineHeight: '45px',
  },
}));

const Heading = (props: HeadingProps) => {
  return <StyledHeading variant="h3">{props.children}</StyledHeading>;
};

export default Heading;
