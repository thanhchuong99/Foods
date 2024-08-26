import { Box, styled } from '@mui/material';
import { nunitoFont } from '@/util/fonts';
import { dark, primary } from '@/theme/colors';

export const SectionWrapper = styled(Box)`
  ${nunitoFont.style}
  padding: 75px 0 134px;
  color: ${dark.base};

  & h3 {
    padding: 32px 0;
    font-style: normal;
    font-size: 2rem;
    font-weight: 700;
    line-height: 51px;
  }

  & p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  & p.mb-4 {
    margin-bottom: 16px;
  }

  & p.mb-6 {
    margin-bottom: 24px;
  }

  & ul {
    list-style: none;
    margin-left: 32px;

    li {
      position: relative;

      ::before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        background-color: ${dark.base};
        border-radius: 50%;
        top: 16px;
        left: -19px;
        /* left: 0; */
        transform: translateY(-50%);
      }
    }
  }

  & a {
    color: ${primary.base};
  }
`;
