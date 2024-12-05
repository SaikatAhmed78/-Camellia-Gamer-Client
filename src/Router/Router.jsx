import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/addReview',
                element:
                    <PrivateRoute><AddReview></AddReview></PrivateRoute>
                    
                
            },
            {
                path: '/myReviews',
                element: 
              
                  <PrivateRoute>
                      <MyReviews></MyReviews>
                  </PrivateRoute>
              
            },
        ]
        
    }
])

export default router;