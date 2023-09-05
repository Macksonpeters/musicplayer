import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Components/About";
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import Welcome from "./Pages/Welcome";
import Errorpage from "./Pages/Errorpage";
import PrivateRoute from "./Components/Privateroute";
import Paystack from "./Pages/Paystack";
import Lesson from "./Components/Lesson";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route path="/" element={<Home />} />

      <Route path="/search" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Welcome />} />
      <Route path="/paystack" element={<Paystack />} />
      <Route path="/lesson" element={<Lesson />} />

      {/* <Route
        path="/home"
        element={
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        }
      /> */}

      <Route path="*" element={<Errorpage />} />
      {/* ... etc. */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
