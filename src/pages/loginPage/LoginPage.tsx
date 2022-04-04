import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from }: any = location.state || { from: { pathname: '/' } };
  let login = () => {
    auth.signIn(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default LoginPage;
