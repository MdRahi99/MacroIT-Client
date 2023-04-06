import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import About from "../Components/About/About/About";
import Service from "../Components/Service/Service/Service";
import Contact from "../Components/Contact/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/service",
          element: <Service></Service>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
      ],
    },
  ]);

export default router;