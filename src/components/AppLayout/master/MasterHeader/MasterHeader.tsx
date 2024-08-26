'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeaderMenu from './HeaderMenu';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useMediaQuery, useTheme } from '@mui/material';
import MobileHeaderMenu from './MobileHeaderMenu';
import ActionButtons from './ActionButtons';
import { useMeQuery } from '@/queries/user/useMeQuery';

const HEADER_HEIGHT = 93;

const LogoContainer = () => (
  <Link className="relative -left-[14px] lg:left-0 lg:ml-[-10px]" href="/">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        cursor: 'pointer',
      }}
    >
      <Image priority src="/logo-header.svg" width={54} height={48} alt="logo" />
      <Image priority src="/WONDERFOODS.svg" width={98} height={17} alt="logo-text" />
    </Box>
  </Link>
);

interface Props {
  isAuthPage?: boolean;
  isHideMenu?: boolean;
  isHideActionButtons?: boolean;
}

export default function MasterHeader({ isAuthPage, isHideActionButtons, isHideMenu }: Props) {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const actionButtonRef = useRef<HTMLDivElement>(null);
  const isDown2MdBreakpoint = useMediaQuery(theme.breakpoints.down('2md'));
  const { data: user, isPending: isPendingMe } = useMeQuery();

  const hasUser = Boolean(user);

  const handleScrollPosition = (scrolled: boolean) => {
    setIsScrolled(scrolled);
  };

  useScrollPosition(handleScrollPosition);
  useEffect(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    // Note: Handle when mobile breakpoint. Action Button is visible and broken UI on server side.
    // Because isDown2MdBreakpoint is false on server side even if it is mobile breakpoint.
    // Hide action button on server side. Considering showing it on client side by condition.

    if (!actionButtonRef.current) return;

    requestAnimationFrame(() => (actionButtonRef.current!.style.display = 'block'));
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          overflow: 'auto',
          background: isAuthPage
            ? '#F4F8FC'
            : `${!isScrolled ? 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0) 90%)' : 'white'} `,
          p: {
            xs: '12px 24px',
            lg: '12px',
          },
          height: HEADER_HEIGHT,
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
          }),
        }}
        elevation={0}
      >
        <Toolbar
          disableGutters={true}
          sx={{
            minHeight: 69,
          }}
        >
          <Container
            disableGutters
            sx={{
              paddingX: 0,
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <LogoContainer />
              {!isAuthPage && !isHideMenu && (
                <HeaderMenu
                  sx={{
                    display: {
                      xs: 'none',
                      '2md': 'flex',
                    },
                  }}
                />
              )}
              {!isHideActionButtons && (
                <Stack flexDirection="row" gap={2}>
                  <Box
                    sx={theme => ({
                      [theme.breakpoints.down('2md')]: {
                        display: 'none',
                      },
                    })}
                    ref={actionButtonRef}
                  >
                    <ActionButtons
                      hideAuthGroup={hasUser || isDown2MdBreakpoint}
                      hideAccountPopover={isPendingMe || !hasUser}
                    />
                  </Box>
                  {!isAuthPage && <MobileHeaderMenu />}
                </Stack>
              )}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
