import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Root.jsx';
import Error from './Error Page/Error';
import Home from './assets/Pages/Home/Home';
import SignIn from './assets/Pages/SignIn Page/SignIn';
// import SignUp from './assets/Pages/SignUp Page/SignUp';
import AuthProvider from './Providers/AuthProvider';
import AddProducts from './assets/Pages/AddProducts/AddProducts';
import SignUp from './assets/Pages/SignUp Page/SignUp';
import SonyItems from './assets/Pages/CategoryItems/SonyItems';
import ProductDetails from './assets/Pages/ProductDetails/ProductDetails';
import UpdateProduct from './assets/Pages/UpdateProduct/UpdateProduct';
import AddToCart from './assets/Pages/AddToCart/AddToCart';
import SamsungItems from './assets/Pages/CategoryItems/SamsungItems';
import AppleItems from './assets/Pages/CategoryItems/AppleItems';
import RealmiItems from './assets/Pages/CategoryItems/RealmiItems';
import GoogleItems from './assets/Pages/CategoryItems/GoogleItems';
import IntelItems from './assets/Pages/CategoryItems/IntelItems';
import PrivateRoute from './Providers/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/signin",
        element: <SignIn/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProducts/></PrivateRoute>
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
        loader: ({params}) => fetch(`https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product/${params.id}`)
      },
      {
        path: "/sonyitems",
        element: <PrivateRoute><SonyItems/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/samsungitems",
        element: <PrivateRoute><SamsungItems/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/appleitems",
        element: <PrivateRoute><AppleItems/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/realmiitems",
        element: <PrivateRoute><RealmiItems/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/googleitems",
        element: <PrivateRoute><GoogleItems/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/intelitems",
        element: <PrivateRoute><IntelItems/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
      {
        path: "/productdetails/:id",
        element: <PrivateRoute><ProductDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product/${params.id}`)
      },
      {
        path: "/addtocart",
        element: <PrivateRoute><AddToCart/></PrivateRoute>,
        loader: () => fetch('https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/product'),
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
