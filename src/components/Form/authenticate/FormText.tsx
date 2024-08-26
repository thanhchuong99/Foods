import { dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { withProperties } from '@/util/types';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import StyledLink from './StyledLink';
import { Router } from '@/util/Router';
import { TypographyProps } from '@mui/material/Typography/Typography';

const FormTitle = (props: { children: string; sx?: SxProps<Theme>; className?: string }) => {
  return (
    <Typography
      className={props.className}
      variant="h1"
      sx={theme => ({
        color: dark.base,
        textAlign: 'center',

        [theme.breakpoints.up('xs')]: {
          fontSize: '2rem',
          lineHeight: '45px',
        },

        [theme.breakpoints.up('lg')]: {
          ...paytoneOneFont.style,
          paddingLeft: '93px',
          paddingRight: '93px',
        },
      })}
    >
      {props.children}
    </Typography>
  );
};

const FormDescription = (props: {
  children: React.ReactNode;
  className?: string;
  typoProps?: TypographyProps;
  isDangerouslySetInnerHTML?: boolean;
}) => {
  return (
    <Typography
      sx={{ fontWeight: 500, fontSize: '1rem', lineHeight: '22px', textAlign: 'center', color: dark[40] }}
      className={props.className}
      {...props.typoProps}
      {...(props.isDangerouslySetInnerHTML && typeof props.children === 'string'
        ? { dangerouslySetInnerHTML: { __html: props.children } }
        : { children: props.children })}
    />
  );
};

const FormDontHaveAccount = () => {
  return (
    <Typography
      sx={() => ({
        fontWeight: 500,
        fontSize: '1rem',
        textAlign: 'center',
        lineHeight: '22px',
        color: dark[40],
      })}
    >
      Don’t have account ? <StyledLink href={Router.Register}>Register</StyledLink>
    </Typography>
  );
};

const FormHaveAccount = () => {
  return (
    <Typography
      sx={() => ({
        fontWeight: 500,
        fontSize: '1rem',
        textAlign: 'center',
        lineHeight: '22px',
        color: dark[40],
      })}
    >
      Do you have account ? <StyledLink href={Router.Login}>Sign in</StyledLink>
    </Typography>
  );
};

export default withProperties(Box, { FormTitle, FormDescription, FormDontHaveAccount, FormHaveAccount });
