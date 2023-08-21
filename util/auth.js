import axios from "axios";
import { FIREBASE_API_KEY } from '@env'

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_API_KEY}`
  const response = await axios.post(
    url,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    });
}

export const createUser = async (email, password) => {
  await authenticate('signUp', email, password)
}

export const login = async (email, password) => {
  await authenticate('signInWithPassword', email, password)
}


