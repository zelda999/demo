import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const PrivateRoute = ({
  children,
  path,
  ...rest
}: {
  children: React.ReactNode;
  path: string;
}) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
