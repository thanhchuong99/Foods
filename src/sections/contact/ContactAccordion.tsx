'use client';

import { basic, dark } from '@/theme/colors';
import { nunitoFont } from '@/util/fonts';
import ExpandMoreIcon from 'public/assets/svg/expanded.svg';
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MUIAccordion,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import { useState } from 'react';

const Title = styled(Typography)(() => ({
  ...nunitoFont.style,
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '25px',
  color: dark.base,
}));

const Description = styled(Typography)(() => ({
  ...nunitoFont.style,
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '24px',
  color: dark[40],
}));

interface ContactAccordionProps {
  title: string;
  description: string;
  defaultExpanded?: boolean;
}

const ContactAccordion = ({ title, description, defaultExpanded = false }: ContactAccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleExpansion = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <MUIAccordion
      expanded={expanded}
      onChange={handleExpansion}
      slotProps={{ transition: { timeout: 500 } }}
      sx={{
        '&.MuiAccordion-root': {
          borderRadius: 2,
          boxShadow: `0 12px 12px 0 ${alpha(basic.grey2, 0.15)}`,
          paddingX: 2,
          paddingBottom: 1,
        },
        '&.MuiAccordion-root:not(:last-child)': { marginBottom: 3 },
        '&.MuiAccordion-root:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          '& .MuiAccordionSummary-content': { paddingY: 1, margin: 0, minHeight: 'auto' },
          '&.MuiAccordionSummary-root': {
            minHeight: 'auto',
            paddingTop: 1,
            paddingX: 0,
          },
          '& .MuiAccordionSummary-content.Mui-expanded': { margin: 0 },

          '&.MuiAccordionSummary-root[aria-expanded=true]': {
            borderBottom: `1px solid ${dark[5]}`,
          },
        }}
      >
        <Title>{title}</Title>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingBottom: 0, paddingTop: 2, paddingX: 0 }}>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default ContactAccordion;
