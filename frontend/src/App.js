import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Home from "./views/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <Courses />,
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
