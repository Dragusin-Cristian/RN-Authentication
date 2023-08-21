import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true)
    await login(email, password)
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={'Loggin you in...'} />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
