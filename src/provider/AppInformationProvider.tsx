'use client';
import { defaultAppInformation } from 'next-data/appInformation';
import { PropsWithChildren, createContext } from 'react';

export const AppInformationContext = createContext<IAppInformation>(defaultAppInformation);

interface AppInformationProviderProps extends PropsWithChildren {
  value: IAppInformation;
}

const AppInformationProvider = ({ children, value }: AppInformationProviderProps) => {
  return <AppInformationContext.Provider value={value}>{children}</AppInformationContext.Provider>;
};

export default AppInformationProvider;
