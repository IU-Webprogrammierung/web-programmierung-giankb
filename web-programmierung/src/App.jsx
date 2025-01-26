import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Hobby from "./pages/Hobby.jsx";
import Studies from "./pages/Studies.jsx";
import Work from "./pages/Work.jsx";
import Navigation from "./ui/Navigation.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/hobby",
        element: <Hobby />,
    },
    {
        path: "/studies",
        element: <Studies />,
    },
    {
        path: "/work",
        element: <Work />,
    },
]);

function App() {

  return (
    <>
        <Navigation />
        <RouterProvider router={router} />
    </>
  )
}

export default App
