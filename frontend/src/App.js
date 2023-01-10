import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Mycourse from "./views/mycourse/Mycourse";
import Register from "./views/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses/:id",
    element: <Details />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/mycourse",
    element: <Mycourse />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>404 not found XD</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
