import AccountPopover from '@/components/AccountPopover';
import { Router } from '@/util/Router';
import { Stack, Button, SxProps, Theme } from '@mui/material';
import { useRouter } from 'next/navigation';

interface Props {
  sx?: SxProps<Theme>;
  hideAuthGroup?: boolean;
  hideAccountPopover?: boolean;
}

const ActionButtons = ({ sx, hideAuthGroup, hideAccountPopover }: Props) => {
  const router = useRouter();

  return (
    <Stack
      flexDirection={{ xs: 'column', '2md': 'row' }}
      alignItems={{ xs: 'stretch', '2md': 'center' }}
      gap="12px"
      sx={sx}
    >
      {!hideAuthGroup && (
        <>
          <Button
            onClick={() => router.push(Router.Register)}
            color="primary"
            variant="outlined"
            sx={{
              width: { xs: '100%', '2md': 87 },
              height: { xs: '65px', '2md': '43px' },
              fontSize: { xs: '1.5rem', '2md': '0.875rem' },
            }}
          >
            Register
          </Button>
          <Button
            onClick={() => router.push(Router.Login)}
            color="primary"
            variant="contained"
            sx={{
              width: { xs: '100%', '2md': 69 },
              height: { xs: '65px', '2md': '43px' },
              fontSize: { xs: '1.5rem', '2md': '0.875rem' },
            }}
          >
            Login
          </Button>
        </>
      )}
      {!hideAccountPopover && <AccountPopover />}
    </Stack>
  );
};

export default ActionButtons;
