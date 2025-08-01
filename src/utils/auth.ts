export const getAccessToken = () => localStorage.getItem('accessToken');

export const setAccessToken = (token: string) =>
  localStorage.setItem('accessToken', token);

export const removeAccessToken = () => localStorage.removeItem('accessToken');

export const isAuthenticated = () => !!localStorage.getItem('accessToken');

export const logout = () => {
  removeAccessToken();
  window.location.href = '/login';
};