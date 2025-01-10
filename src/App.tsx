import "./styles/global.module.css";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Suspense fallback={<h1> Loading...</h1>}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
