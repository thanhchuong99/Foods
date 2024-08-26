import successJson from 'public/success-mail.json';
import { Router } from '@/util/Router';
import State from './State';
import useAppInformation from '@/hooks/useAppInformation';
import { goToHome, thankYouSubscribeNewsletter, thankYouSubscribeNewsletterTitle } from '@/const/messages';

const FinishState = () => {
  const data = useAppInformation();

  return (
    <State
      title={thankYouSubscribeNewsletterTitle}
      content={thankYouSubscribeNewsletter.replace('<title>', data?.app_title || '')}
      action={{ label: goToHome, href: Router.Root }}
      playerProps={{ loop: false, src: successJson }}
    />
  );
};

export default FinishState;
