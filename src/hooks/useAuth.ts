import { createContext, useContext } from 'react';

type user = {
  user: string | null;
  signOut: (value: () => void) => void;
  signIn: (value: () => void) => void;
};

const initAuthContext: user = {
  user: '',
  signOut: () => {
    return;
  },
  signIn: () => {
    return;
  }
};

export const authContext = createContext(initAuthContext);

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
