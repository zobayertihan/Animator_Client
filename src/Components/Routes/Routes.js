import { createBrowserRouter } from "react-router-dom";
import Service from "../Service/Service";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import Services from "../Services/Services";
import Login from "../User/Login/Login";
import SignUp from "../User/SignUp/SignUp";
import AddServices from "../AddServices/AddServices";
import AddReview from "../AddReview/AddReview";
import MyReviews from "../MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";
import EditREview from "../MyReviews/EditREview";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://animator-server.vercel.app/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://animator-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://animator-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/services/:id/review',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://animator-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute><EditREview></EditREview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://animator-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;