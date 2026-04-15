import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/pages/Author/Login";
import { Home } from "../Components/pages/Home";
import Register from "../Components/pages/Author/Register";
import Layout from "../Components/NavbarComp/Layout";
import ProductDetials from "../Components/pages/Author/ProductDetials";
import Cart from "../Components/pages/Carts/Cart";

export let Mymap = createBrowserRouter([
        {path:"/",
        element : <Layout/>,   
        children :[
        {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/productDetails/:id",   
        element:<ProductDetials/>
    },
    {
        path:"/cart",   
        element:<Cart/>
    },{
        path:"/login",   
        element:<Login/>
    },{
        path:"/register",
        element:<Register/>
    }
    ] } 
])
