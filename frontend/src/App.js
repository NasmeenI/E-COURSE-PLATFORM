import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Mycourses from "./views/mycourses/mycourses";

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
    path: "/mycourses",
    element: <Mycourses />,
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
