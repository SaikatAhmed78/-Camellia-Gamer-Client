import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/Register";

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
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
        ]
        
    }
])

export default router;