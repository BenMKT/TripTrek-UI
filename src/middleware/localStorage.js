const localStorageMiddleware = () => (next) => (action) => {
  if (action.type === 'user/loginUser/fulfilled') {
    const { username } = 'logged In';
    localStorage.setItem('username', username);
  } else if (action.type === 'user/logout') {
    localStorage.removeItem('username');
  }

  return next(action);
};
  
  export default localStorageMiddleware;