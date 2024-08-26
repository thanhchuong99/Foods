import { useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { useLogoutMutation } from '@/queries/auth/useLogoutMutation';
import { useMeQuery } from '@/queries/user/useMeQuery';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { basic, dark } from '@/theme/colors';
import { useRouter } from 'next/navigation';
import { Router } from '@/util/Router';
import CircleUser from 'public/assets/svg/circle-user.svg';
import ArrowSvg from 'public/assets/svg/arrow-popover.svg';
import { Divider } from '@mui/material';

// ----------------------------------------------------------------------

const menu_options = [
  {
    label: 'Profile',
    icon: <PersonIcon />,
  },
];

const StyledNameText = styled(Typography)(({ theme }) => ({
  color: dark[60],
  fontWeight: 700,
  lineHeight: '19px',
  fontSize: '0.875rem',
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'none',
  cursor: 'pointer',

  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const StyledAvatarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  backgroundColor: basic.white,
  borderRadius: '40px',
  padding: '6px',

  [theme.breakpoints.up('2md')]: {
    padding: '6px 12px 6px 12px',
  },
}));

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { mutate: logout, isPending: isPendingLogout } = useQueryWrapper(useLogoutMutation());
  const [open, setOpen] = useState<HTMLDivElement | null>(null);
  const { data: user } = useMeQuery();
  const router = useRouter();

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setOpen(event.currentTarget);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    setOpen(null);
  };

  const handleClickMenu = (name: string, event: React.MouseEvent<HTMLDivElement>) => {
    switch (name) {
      case 'Home':
        router.push(Router.Root);
        break;
      case 'Profile':
        router.push(Router.Profile);
        break;
    }
    handleClose(event);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <StyledAvatarWrapper onClick={handleOpen}>
        <IconButton
          sx={{
            width: {
              xs: 38,
              '2md': 32,
            },
            height: {
              xs: 38,
              '2md': 32,
            },
            background: open
              ? theme =>
                  `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
              : '',
          }}
        >
          <Avatar
            src={user?.avatar}
            alt={user?.fullname}
            sx={{
              width: {
                xs: 38,
                '2md': 32,
              },
              height: {
                xs: 38,
                '2md': 32,
              },
              backgroundColor: basic.white,
              border: 'none',
            }}
          >
            <CircleUser />
          </Avatar>
        </IconButton>
        <StyledNameText>{user?.fullname}</StyledNameText>
      </StyledAvatarWrapper>

      <Popover
        disableScrollLock
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              position: 'relative',
              p: 0,
              mt: 1,
              width: 300,

              '.arrow-wrapper': {
                display: 'inline-flex',
                verticalAlign: 'top',
                svg: {
                  path: {
                    fill: 'red',
                  },
                },
              },
            },
          },
        }}
      >
        <Box
          className="arrow-wrapper"
          sx={{
            position: 'absolute',
            top: -5,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            backgroundColor: 'red',
          }}
        >
          <ArrowSvg />
        </Box>
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }} variant="subtitle2" noWrap title={user?.fullname}>
            {user?.fullname}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap title={user?.email}>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {menu_options.map(option => (
          <MenuItem
            sx={{ alignItems: 'center', display: 'flex', gap: 1.2, color: dark.base, py: 1.5 }}
            key={option.label}
            onClick={e => handleClickMenu(option.label, e as unknown as React.MouseEvent<HTMLDivElement>)}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}

        <MenuItem
          disabled={isPendingLogout}
          disableRipple
          disableTouchRipple
          onClick={() => logout()}
          sx={{ color: 'error.main', py: 1.5, alignItems: 'center', display: 'flex', gap: 1.2 }}
        >
          <LogoutIcon />
          Log out
        </MenuItem>
      </Popover>
    </Box>
  );
}
