import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signupHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true)
      await createUser(email, password)
      setIsAuthenticating(false)
    } catch (e) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      )
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={'Creating user...'} />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
