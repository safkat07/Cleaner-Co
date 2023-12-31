import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Home from "../Page/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

export default routes;
