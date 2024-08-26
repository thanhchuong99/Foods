'use client';
import { Box, Container, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SubscribeTextField from './SubscribeTextField';
import StyledDivider from '@/components/Divider';
import { dark, primary } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Router } from '@/util/Router';
import { useMeQuery } from '@/queries/user/useMeQuery';
import InstagramIcon from '@mui/icons-material/Instagram';
import useAppInformation from '@/hooks/useAppInformation';

const StyledFooter = styled(Box)(() => ({
  backgroundColor: '#F5F9FD',
  paddingTop: '80px',
  paddingBottom: '32px',
}));

const FooterTitle = styled(Typography)(() => ({
  ...paytoneOneFont.style,
  fontWeight: 400,
  lineHeight: '34px',
  fontSize: '1.5rem',
  marginBottom: '16px',
  color: dark.base,
  textTransform: 'uppercase',
}));

const FooterList = styled(Stack)(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  gap: '8px',
  alignItems: 'center',

  [theme.breakpoints.up('lg')]: {
    alignItems: 'flex-start',
  },
}));

const FooterLink = styled(Link)(() => ({
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: '22px',
  color: dark[40],
  textDecoration: 'none',
  width: 'fit-content',
  textAlign: 'center',
}));

const FooterText = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '22px',
  color: dark[40],
}));

const FooterBottomLink = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '24px',
  color: dark[40],
  textDecoration: 'underline',
  textDecorationThickness: '0.4px',

  [theme.breakpoints.up('xs')]: {
    textAlign: 'center',
  },

  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

const SocialLink = styled(Link)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    color: dark[50],
  },

  'svg.instagram-icon': {
    fontSize: '1.2rem',
  },
}));

const WrapperBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.up('lg')]: {
    alignItems: 'flex-start',
  },
}));

const StackTopFooter = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  rowGap: '48px',

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '254px  calc(127px + 100px)  calc(120px + 93px)  auto',
    rowGap: 0,
  },
}));

const StackTopFooterItem = styled(Box)(({ theme }) => ({
  marginLeft: 0,

  [theme.breakpoints.up('lg')]: {
    ':nth-child(2)': {
      marginLeft: '100px',
    },

    ':nth-child(3)': {
      marginLeft: '93px',
    },

    ':nth-child(4)': {
      marginLeft: '100px',
    },
  },
}));

interface Props {
  isAuthPage?: boolean;
}

const MasterFooter = ({ isAuthPage }: Props) => {
  const appInformation = useAppInformation();
  const { data: user } = useMeQuery();

  const accountUrl = user ? Router.Profile : Router.Login;

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        {!isAuthPage && (
          <StackTopFooter>
            <StackTopFooterItem>
              <WrapperBox>
                <Link href={Router.Root} className="mb-4">
                  <Image src="/logo-footer.svg" width={84} height={75} alt="footer logo" />
                </Link>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '1rem',
                    lineHeight: '22px',
                    color: dark[50],
                    maxWidth: {
                      xs: '100%',
                      lg: '260px',
                    },
                  }}
                >
                  Foods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.
                </Typography>
              </WrapperBox>
            </StackTopFooterItem>
            <StackTopFooterItem>
              <WrapperBox>
                <FooterTitle>PLATFORM</FooterTitle>
                <FooterList>
                  <FooterLink href={Router.Root}>Home</FooterLink>
                  <FooterLink href={Router.HowItWorks}>How it Works</FooterLink>
                  <FooterLink href={Router.About}>About</FooterLink>
                  <FooterLink href={accountUrl}>Account Page</FooterLink>
                </FooterList>
              </WrapperBox>
            </StackTopFooterItem>
            <StackTopFooterItem>
              <WrapperBox>
                <FooterTitle>COMPANY</FooterTitle>
                <FooterList>
                  <FooterLink href={Router.Contact.concat('/#faq')}>FAQ</FooterLink>
                  <FooterLink href={Router.Contact}>Support</FooterLink>
                  <FooterLink href={Router.Contact}>Contact</FooterLink>
                </FooterList>
              </WrapperBox>
            </StackTopFooterItem>
            <StackTopFooterItem>
              <WrapperBox>
                <FooterTitle>Subscribe</FooterTitle>
                <FooterText
                  sx={{
                    marginBottom: '12px',
                    textAlign: {
                      xs: 'center',
                      lg: 'left',
                    },
                  }}
                >
                  Join our mailing list for the latest updates and exclusive offers.
                </FooterText>
                <SubscribeTextField />
                <FooterText
                  sx={{
                    marginTop: '12px',
                    textAlign: {
                      xs: 'center',
                      lg: 'left',
                    },
                  }}
                >
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
                </FooterText>
              </WrapperBox>
            </StackTopFooterItem>
          </StackTopFooter>
        )}

        <StyledDivider sx={{ marginTop: !isAuthPage ? '64px' : '0' }} />

        <Stack
          direction={{ lg: 'row' }}
          alignItems="center"
          marginTop="16px"
          flexWrap="wrap"
          sx={{ rowGap: { xs: '24px', lg: '8px' } }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: '24px',
              color: dark[40],
              marginRight: {
                lg: '24px',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
            }}
          >
            © {new Date().getFullYear()}{' '}
            <Box sx={{ color: primary.base }} component="span">
              {appInformation?.app_title ?? 'Foods'}
            </Box>{' '}
            All rights reserved.
          </Typography>
          <Stack direction="row" justifyContent="center" rowGap="12px" columnGap="24px" flexWrap="wrap">
            <FooterBottomLink href={Router.Privacy}>Privacy Policy</FooterBottomLink>
            <FooterBottomLink href={Router.TermConditions}>Terms and Conditions</FooterBottomLink>
            {/* Todo: Update Cookie Policy */}
            {/* <FooterBottomLink href="/#">Cookie Policy</FooterBottomLink> */}
            {!user && (
              <FooterBottomLink href={Router.AccountDeletionRequest}>Account Deletion Request</FooterBottomLink>
            )}
          </Stack>
          <Stack
            mt={{ xs: '8px', lg: 0 }}
            marginLeft={{ md: '', lg: 'auto' }}
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing="16px"
          >
            {appInformation?.facebook_url && (
              <SocialLink href={appInformation?.facebook_url} target="_blank">
                <Image src="/assets/svg/social-icons/facebook.svg" width={16} height={16} alt="Facebook" />
              </SocialLink>
            )}
            {appInformation?.x_url && (
              <SocialLink href={appInformation?.x_url} target="_blank">
                <Image src="/assets/svg/social-icons/x.svg" width={17} height={16} alt="Twitter" />
              </SocialLink>
            )}
            {appInformation?.linkedin_url && (
              <SocialLink href={appInformation?.linkedin_url} target="_blank">
                <Image src="/assets/svg/social-icons/linkedin.svg" width={16} height={16} alt="Linkedin" />
              </SocialLink>
            )}
            {appInformation?.youtube_url && (
              <SocialLink href={appInformation?.youtube_url} target="_blank">
                <Image src="/assets/svg/social-icons/youtube.svg" width={22} height={16} alt="Youtube" />
              </SocialLink>
            )}
            {appInformation?.instagram_url && (
              <SocialLink href={appInformation?.instagram_url ?? ''} target="_blank">
                <InstagramIcon className="instagram-icon" />
              </SocialLink>
            )}
          </Stack>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

export default MasterFooter;
