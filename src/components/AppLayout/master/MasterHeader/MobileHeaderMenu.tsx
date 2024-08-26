import { Box, Button, Drawer } from '@mui/material';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import Image from 'next/image';
import ActionButtons from './ActionButtons';
import MobileMenuIcon from 'public/assets/svg/mobile-menu-icon.svg';
import { useMeQuery } from '@/queries/user/useMeQuery';

interface MobileHeaderMenuProps {
  isAuthPage?: boolean;
}

const MobileHeaderMenu = ({ isAuthPage }: MobileHeaderMenuProps) => {
  const [open, setOpen] = useState(false);
  const { data: user } = useMeQuery();

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <Drawer
        ModalProps={{ disableScrollLock: true }}
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={theme => ({
          '.MuiDrawer-paperAnchorRight': {
            height: '100%',
            maxHeight: '733px',
          },

          [theme.breakpoints.up('2md')]: {
            display: 'none',
          },
        })}
      >
        <Box sx={{ padding: '42px 24px 48px', width: '100vw' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '32px' }}>
            <Button
              onClick={() => toggleDrawer(false)}
              variant="contained"
              sx={{
                backgroundImage: 'linear-gradient(to bottom, #C5C5C5 0%, #B2B2B2 50%)',
                boxShadow: '0 4px 10px 0 rgba(185, 185, 185, 0.3)',
                height: 48,
                minWidth: 48,
                width: 48,
                borderRadius: '18px',
              }}
            >
              <Image src="/assets/svg/close-icon.svg" alt="menu header" width={21} height={21} />
            </Button>
          </Box>
          {!isAuthPage && <HeaderMenu onClick={() => toggleDrawer(false)} />}
          {<ActionButtons hideAuthGroup={Boolean(user)} hideAccountPopover />}
        </Box>
      </Drawer>
      <Button
        sx={{
          width: '48px',
          minWidth: 48,
          height: 48,
          display: {
            xs: 'inline-flex',
            '2md': 'none',
          },

          svg: {
            flexShrink: 0,
          },
        }}
        variant="contained"
        color="primary"
        onClick={() => toggleDrawer(true)}
      >
        <MobileMenuIcon />
      </Button>
    </>
  );
};

export default MobileHeaderMenu;
