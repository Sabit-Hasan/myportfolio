import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

export default router;