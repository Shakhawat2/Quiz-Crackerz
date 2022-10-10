import About from "../components/About";
import Root from "../MainLayout/Root";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : 'about',
                element : <About></About>
            }
        ]
    }
])