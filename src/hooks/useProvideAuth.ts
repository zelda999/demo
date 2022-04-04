import { useState } from 'react';

const fakeAuth = {
  isAuthenticated: false,
  signIn(cb: any) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signOut(cb: any) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const useProvideAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  const signIn = (cb: any) => {
    return fakeAuth.signIn(() => {
      setUser('huong');
      cb();
    });
  };

  const signOut = (cb: any) => {
    return fakeAuth.signOut(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signIn,
    signOut
  };
};

export default useProvideAuth;
