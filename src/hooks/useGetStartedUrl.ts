import { useMeQuery } from '@/queries/user/useMeQuery';
import { Router } from '@/util/Router';

const useGetStartedUrl = () => {
  const { data: user } = useMeQuery();

  const url = user ? Router.Profile : Router.Register;

  return url;
};

export default useGetStartedUrl;
