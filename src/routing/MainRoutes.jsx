import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlayListPage from "../pages/PlayListPage";
import RadioPage from "../pages/RadioPage";
import MusicCreate from "../components/musics/MusicCreate";
import PlayFavorite from "../components/PlayList/PlayFavorite";
import MusicDetails from "../components/musics/MusicDetails";

const MainRoutes = () => {
  const Links = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/playlist",
      element: <PlayListPage />,
    },
    {
      id: 3,
      path: "/radio",
      element: <RadioPage />,
    },
    {
      id: 4,
      path: "/add-music",
      element: <MusicCreate />,
    },
    {
      id: 5,
      path: "/favorite",
      element: <PlayFavorite />,
    },
    {
      id: 6,
      path: "/details/:id",
      element: <MusicDetails />
    },

  ];
  return (
    <Routes>
      {Links.map((link) => (
        <Route key={link.id} path={link.path} element={link.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
