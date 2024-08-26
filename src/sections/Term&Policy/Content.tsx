import { Container } from '@mui/material';
import { SectionWrapper } from '@/sections/Term&Policy/Styles';

const Content = ({ content }: { content: string | undefined }) => {
  if (content) {
    return (
      <SectionWrapper>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
      </SectionWrapper>
    );
  }
};

export default Content;
