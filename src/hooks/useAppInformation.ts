import { AppInformationContext } from '@/provider/AppInformationProvider';
import { useContext } from 'react';

const useAppInformation = () => {
  return useContext(AppInformationContext);
};

export default useAppInformation;
