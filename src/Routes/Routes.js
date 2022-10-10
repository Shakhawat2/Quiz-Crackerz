import About from "../components/About";
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
                
            },
            {
                path : 'about',
                element : <About></About>
            }
        ]
    }
])