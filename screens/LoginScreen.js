import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const loginHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true)
      await login(email, password)
      setIsAuthenticating(false)
    } catch (e) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials and try again.'
      )
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={'Loggin you in...'} />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
