import axios from 'axios'

const BASE_URL = 'https://rleeee.herokuapp.com'
const API_URL_SIGNUP = '/auth/signup'
const API_URL_SIGNIN = '/auth/signin'

// SignUp user
const signup = async (userData) => {
  const response = await axios.post(`${BASE_URL}${API_URL_SIGNUP}`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// SignIn user
const signin = async (userData) => {
  const response = await axios.post(`${BASE_URL}${API_URL_SIGNIN}`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const authService = {
  signup,
  signin,
}

export default authService
