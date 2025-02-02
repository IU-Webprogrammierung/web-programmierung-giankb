import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Saga from "./pages/Saga.jsx";
import Animations from "./pages/Animations.jsx";
import Curiosities from "./pages/Curiosities.jsx";
import ErrorPage from "./pages/Error.jsx";
import Starfield from "./ui/StarField.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/saga",
        element: <Saga />,
    },
    {
        path: "/animations",
        element: <Animations />,
    },
    {
        path: "/curiosities",
        element: <Curiosities />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);

function App() {

  return (
    <>
        <Starfield />
        <RouterProvider router={router}/>
    </>
  )
}

export default App
