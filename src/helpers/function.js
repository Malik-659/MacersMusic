import axios from "axios";

//!
export const addToLocalStorage = (name, admin) => {
  if (!name) {
    return;
  } else {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("admin");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("name");
  if (!user) return false;
  return true;
};

export const checkAdmin = () => {
  const admin = localStorage.getItem("admin");
  if (admin) {
    return admin;
  } else {
    return false;
  }
};

export const getTotalPages = async (url) => {
  const { data } = await axios.get(url);
  const totalPages = Math.ceil(data.length / 3);
  return totalPages;
};

export const getAuthUser = () => {
  const user = JSON.parse(localStorage.getItem("name"));
  return user;
};

export const getMusicRating = (musicObj) => {
  const rating =
    musicObj.comments.reduce((acc, commentObj) => {
      return acc + commentObj.rating;
    }, 0) / musicObj.comments.length;
  return rating.toFixed(1);
};
