import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { basic, dark } from '@/theme/colors';
import { useGetFAQs } from '@/queries/content/useGetFAQs';
import ContactAccordion from '@/sections/contact/ContactAccordion';
import { paytoneOneFont } from '@/util/fonts';
import { Box, Container, Typography } from '@mui/material';

const FAQS = () => {
  const { data: faqs } = useQueryWrapper(useGetFAQs());

  return (
    <Box component="section" id="faq" sx={{ paddingY: '100px', backgroundColor: `${basic.grey}` }}>
      <Container
        sx={theme => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: '757px',
            margin: '0 auto',
          },
        })}
      >
        <Typography
          sx={{
            ...paytoneOneFont.style,
            fontWeight: 400,
            fontSize: '2.5rem',
            color: dark.base,
            lineHeight: '1.4',
            marginBottom: 8,
            textAlign: 'center',
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        {faqs &&
          faqs.map((f, index) => (
            <ContactAccordion key={f.id} defaultExpanded={index === 0} title={f.title} description={f.content} />
          ))}
      </Container>
    </Box>
  );
};

export default FAQS;
