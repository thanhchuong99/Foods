import React from 'react';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';

import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { Router } from '@/util/Router';
import { basic, dark, primary } from '@/theme/colors';

import UserSvg from 'public/assets/svg/sidebar/user.svg';
import BillingSvg from 'public/assets/svg/sidebar/billing.svg';
import LogoutSvg from 'public/assets/svg/sidebar/logout.svg';
import { useLogoutMutation } from '@/queries/auth/useLogoutMutation';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';

const drawerWidth = 200;

const StyledSidebar = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  borderRadius: 16,
  boxShadow: '0 12px 24px 0 rgba(10, 38, 84, 0.15)',
  width: '100%',
  marginBottom: 30,

  [theme.breakpoints.up('md')]: {
    width: drawerWidth,
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: 0,
  color: 'red',

  path: {
    fill: dark[60],
  },
}));

const StyledListItemText = styled(ListItemText)(() => ({
  marginTop: 0,
  marginBottom: 0,
  fontSize: '1rem',
  color: dark[60],

  span: {
    lineHeight: '22px',
    fontWeight: 700,
  },
}));

const StyledListItem = styled(ListItem)(() => ({
  gap: 8,
  paddingLeft: 24,
  paddingTop: 16,
  paddingBottom: 16,
  cursor: 'pointer',

  ':first-child': {
    borderRadius: '16px 16px 0 0',
  },

  ':last-child': {
    borderRadius: '0 0 16px 16px',
  },

  '&.active': {
    backgroundColor: primary[50],

    // Text
    '.MuiListItemText-root': {
      color: basic.white,
    },

    // Icon
    '.MuiListItemIcon-root': {
      path: {
        fill: basic.white,
      },
    },
  },
}));

const StyledList = styled(List)(() => ({
  paddingTop: 0,
  paddingBottom: 0,
}));

const menuItems = [
  { text: 'My Account', icon: <UserSvg />, path: Router.Profile },
  { text: 'Billing', icon: <BillingSvg />, path: Router.Billing },
];

const MasterSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { mutate, isPending: isPendingLogout } = useQueryWrapper(useLogoutMutation());
  const isActive = (path: string) => pathname === path;

  const handleClickMenu = (url: string) => {
    router.push(url);
  };

  return (
    <StyledSidebar id="sidebar">
      <StyledList>
        {menuItems.map((item, index) => (
          <StyledListItem
            key={index}
            onClick={() => handleClickMenu(item.path)}
            className={clsx({ active: isActive(item.path) })}
          >
            <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            <StyledListItemText primary={item.text} />
          </StyledListItem>
        ))}
        <Divider sx={{ borderColor: dark[5] }} />
        <StyledListItem onClick={() => !isPendingLogout && mutate()}>
          <StyledListItemIcon>
            <LogoutSvg />
          </StyledListItemIcon>
          <StyledListItemText primary="Log out" />
        </StyledListItem>
      </StyledList>
    </StyledSidebar>
  );
};

export default MasterSidebar;
