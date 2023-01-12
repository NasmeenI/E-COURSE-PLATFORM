import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";
import MyCourses from "./views/mycourses/MyCourses";
import CourseMainMenu from "./views/courseMainMenu/CourseMainMenu";
import Error from "./views/error/Error";

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
    element: <MyCourses />,
  },
  {
    path: "/mycourses/:id",
    element: <CourseMainMenu />,
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
    element: <Error />,
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
