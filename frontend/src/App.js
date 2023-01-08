import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./views/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
