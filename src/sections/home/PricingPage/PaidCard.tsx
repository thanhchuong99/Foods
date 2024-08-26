import { dark } from '@/theme/colors';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import { paytoneOneFont } from '@/util/fonts';

interface Props {
  title?: string;
  pricing: number;
  per: 'year' | 'month';
  description: string;
  list: string[];
}

const PaidCard = ({ pricing, per, description, list, title }: Props) => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          lg: '305.5px',
        },
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontWeight: 400,
          fontSize: {
            xs: '1.5rem',
            lg: '1.5rem',
          },
          lineHeight: {
            xs: '33px',
            lg: '32.74px',
          },
          color: dark[50],
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: '1.5rem', color: dark[50] }}></Typography>
      <Box>
        <Typography
          sx={{
            ...paytoneOneFont.style,
            fontSize: '3rem',
            color: dark.base,
            fontWeight: 400,
            position: 'relative',
            lineHeight: '67px',
          }}
          component="h4"
        >
          ${pricing}{' '}
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '1.25rem',
              color: dark[40],
              position: 'absolute',
              bottom: 0,
              paddingLeft: '4px',
            }}
            component="span"
          >
            /{per}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '1rem',
            color: dark[50],
            marginTop: {
              xs: '32px',
              lg: '26px',
            },
            marginBottom: {
              xs: '32px',
              lg: '26px',
            },
            lineHeight: '21.8px',
          }}
        >
          {description}
        </Typography>
        <List
          dense
          sx={{
            padding: 0,
            marginBottom: {
              xs: '32px',
              lg: '26px',
            },
            'li:last-child': {
              marginBottom: 0,
            },
          }}
        >
          {list.map((text, index) => (
            <ListItem key={`pricing-card-${index}`} sx={{ padding: 0, marginBottom: '8px', height: '22px' }}>
              <ListItemIcon sx={{ minWidth: 0, marginRight: '12px' }}>
                <Image src="/assets/svg/checkmark.svg" width={20} height={15} alt="checkmark" />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: 500,
                  color: dark[40],
                  lineHeight: '22.4px',
                  margin: 0,

                  span: {
                    fontSize: '1rem',
                  },
                }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
        <Button sx={{ height: 46, fontSize: '1rem', lineHeight: '22px' }} fullWidth variant="contained" color="primary">
          Choose Plan
        </Button>
      </Box>
    </Box>
  );
};

export default PaidCard;
