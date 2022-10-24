import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl">Welcome to Authentech</h1>
      </div>
    </>
  );
}

export default App;
