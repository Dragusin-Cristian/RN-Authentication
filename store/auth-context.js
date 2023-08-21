import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => { },
  logout: () => { },
})

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState()

  const authenticate = (token) => {
    setAuthToken(token)
    AsyncStorage.setItem('token', token)
  }

  const logout = () => {
    setAuthToken(null)
    AsyncStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider
      value={{
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
