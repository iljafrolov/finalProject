import React from "react";
import "./Styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./theme";

import { ContentMain } from "./ContentMain";
import { PageRoot } from "./PageRoot";
import { ContentContacts } from "./ContentContacts";
import { ContentAbout } from "./ContentAbout";
import { Footer } from "./Footer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRoot />,
    children: [
      {
        path: "/",
        element: <ContentMain />,
      },
      {
        path: "/about",
        element: <ContentAbout />,
      },
      {
        path: "/contact/:type",
        element: <ContentContacts />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
};