import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main.jsx";
import Home from "../components/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Profile from "../components/Profile.jsx";
import Wallet from "../components/Wallet.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/wallet',
                element:<Wallet></Wallet>
            }
        ]
    }
])

export default router;