export const addLocalStorage = (user) => {
  localStorage.setItem("name", JSON.stringify(user.name));
};

export const logout = () => {
  localStorage.removeItem("name");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("user");
  if (!user) return false;
  return true;
};
