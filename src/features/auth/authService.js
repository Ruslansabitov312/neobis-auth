import axios from 'axios'

const BASE_URL = 'https://rleeee.herokuapp.com'
const API_URL = '/auth/signup'

// SignUp user
const signup = async (userData) => {
  const response = await axios.post(`${BASE_URL}${API_URL}`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    
  }

  return response.data
}

const authService = {
  signup,
}

export default authService
