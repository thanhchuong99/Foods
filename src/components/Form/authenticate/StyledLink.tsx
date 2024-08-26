import { styled } from '@mui/material';
import Link from 'next/link';

const StyledLink = styled(Link)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    lineHeight: '22px',
    textAlign: 'right',
    fontSize: '1rem',
    textDecoration: 'none',
    display: 'inline',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default StyledLink;
