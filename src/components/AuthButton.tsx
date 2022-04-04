import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signOut(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default AuthButton;
