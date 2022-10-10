import About from "../components/About";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Root from "../MainLayout/Root";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : 'blog',
                element : <Blog></Blog>
            },
            {
                path : 'about',
                element : <About></About>
            }
        ]
    }
])