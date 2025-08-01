import axios from 'axios';

export const login = async (userName: string, password: string) => {
  console.log('Login response:', password);
  const response = await axios.post('http://localhost:5025/api/login', {
    userName,
    password,
  });

  return response.data;
};