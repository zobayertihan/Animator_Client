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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
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
                element: <AddServices></AddServices>
            },
            {
                path: '/services/:id/review',
                element: <AddReview></AddReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
])

export default router;