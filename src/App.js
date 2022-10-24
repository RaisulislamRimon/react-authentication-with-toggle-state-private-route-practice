import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl">Welcome to Authentech</h1>
      </div>
    </>
  );
}

export default App;
