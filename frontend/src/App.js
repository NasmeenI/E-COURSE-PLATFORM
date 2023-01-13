import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./views/courses/Courses";
import Details from "./views/details/Details";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { Toaster } from "react-hot-toast";
import MyCourses from "./views/mycourses/MyCourses";
import CourseMenu from "./views/courseMenu/CourseMenu";
import Error from "./views/error/Error";
import LecturePage from "./views/lecturePage/LecturePage";
import AssignmentPage from "./views/assignmentPage/AssignmentPage";
import ViewStudent from "./views/viewStudent/ViewStudent";
import { auth } from "./api/firebase";
import { useContext } from "react";
import UserAPI from "./api/UserAPI";
import Loader from "./Loader";
import CreateCoursePage from "./views/createCoursePage/CreateCoursePage";
import CreateMaterialPage from "./views/createMaterialPage/CreateMaterialPage";
import Profile from "./views/profile/Profile";
import Rating from "./views/rating/Rating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
    path: "/mycourses/createcourse",
    element: <CreateCoursePage />,
  },
  {
    path: "/mycourses/:courseID",
    element: <CourseMenu />,
  },
  {
    path: "/mycourses/:courseID/rating",
    element: <Rating />,
  },
  {
    path: "/mycourses/:courseID/creatematerial",
    element: <CreateMaterialPage />,
  },
  {
    path: "/mycourses/:courseID/viewstudent",
    element: <ViewStudent />,
  },
  {
    path: "/mycourses/:courseID/lecture/:lectureID",
    element: <LecturePage />,
  },
  {
    path: "/mycourses/:courseID/assignment/:assignmentID",
    element: <AssignmentPage />,
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
