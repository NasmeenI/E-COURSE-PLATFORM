import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Mycourses from "./views/mycourses/mycourses";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";

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
  return (
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
