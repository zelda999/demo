import React from 'react';
import { authContext } from './hooks/useAuth';
import useProvideAuth from './hooks/useProvideAuth';

const ProvideAuth = ({ children }: { children: React.ReactNode }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default ProvideAuth;
