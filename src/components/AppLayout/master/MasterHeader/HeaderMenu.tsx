'use client';
import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { accent, dark } from '@/theme/colors';
import { Router } from '@/util/Router';
import { SxProps, Theme } from '@mui/material';

const listMenu = [
  { name: 'Home', href: '/' },
  { name: 'How it works', href: '/how-it-works' },
  { name: 'About', href: Router.About },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

interface Props {
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const HeaderMenu = ({ sx, onClick }: Props) => {
  const pathname = usePathname();

  return (
    <MenuList
      sx={{
        alignItems: { xs: 'stretch', '2md': 'center' },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          '2md': 'row',
        },
        gap: { xs: 2, '2md': 1 },
        paddingTop: '0',
        paddingBottom: 0,
        mb: {
          xs: '32px',
          '2md': 0,
        },

        '.header-menu-link': {
          textDecoration: 'none',

          span: {
            fontSize: {
              xs: '1.5rem',
              '2md': '1rem',
            },
            color: dark[60],
            fontWeight: 700,
            lineHeight: {
              xs: '33px',
              '2md': '22px',
            },
          },

          ':last-child': {
            li: {
              marginBottom: 0,
            },
          },
        },

        '.header-menu-link.active': {
          span: {
            color: theme => theme.palette.primary.main,
          },
        },
        ...sx,
      }}
    >
      {listMenu.map((item, index) => {
        const { name, href } = item;
        const isActive = pathname === href ? 'active' : '';

        return (
          <Link
            onClick={onClick}
            className={`header-menu-link ${isActive}`}
            key={`header-menu-${index}`}
            href={href || '#'}
          >
            <MenuItem
              sx={{
                padding: {
                  xs: '16px 16px',
                  '2md': '8px 16px',
                },
                borderRadius: '18px',
                backgroundColor: isActive ? accent.softYellow : '',
                '&:hover': {
                  backgroundColor: isActive ? accent.softYellow : '',
                },
              }}
            >
              <ListItemText
                sx={{
                  textAlign: {
                    xs: 'right',
                    '2md': 'left',
                  },
                }}
              >
                {name}
              </ListItemText>
            </MenuItem>
          </Link>
        );
      })}
    </MenuList>
  );
};

export default HeaderMenu;
