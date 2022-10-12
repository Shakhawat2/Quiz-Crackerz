import About from "../components/About";
import AllTopics from "../components/AllTopics";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Statistic from "../components/Statistic";
import Root from "../MainLayout/Root";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'home',
                element : <Home></Home>
            },
            {
                path : 'topics',
                loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element : <AllTopics></AllTopics>
            },
            {
                path : '/quiz/:id',
                loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element : <Quiz></Quiz>
            },
            {
                path : 'blog',
                element : <Blog></Blog>
            },
            {
                path : 'statistic',
                loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element : <Statistic></Statistic>
            },
            {
                path : 'about',
                element : <About></About>
            }
        ]
    }
])