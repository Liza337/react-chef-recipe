import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import ChefDetails from './pages/ChefDetails/ChefDetails'
import Recipes from './pages/Recipes/Recipes'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'
import Terms from './pages/Terms/Terms'

const router = createBrowserRouter([{
  path:"/",
    element:<App/>,

    children: [
      {
        path:"/",
        element:<Home/>,
        loader: () => fetch("/chef.json")
        
      },
      {
        path:"/blog",
        element:<Blog/>
        
      },
      {
        path:"/about",
        element:<About/>
      },

      {
        path:"/login",
        element:<Login/>
      },

      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/terms",
        element:<Terms/>
        
      },

      {
        path:"/chef/:chefId",
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: async ({params}) =>{
          const res= await fetch("/chef.json");
          const chefs= await res.json();

          const findChef = chefs.find(chef => chef.id == params.chefId);
          return findChef;


        }
        
      },

      {
        path:"*",
        element:<NotFound/>
      }

    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router}>

        </RouterProvider>
     </AuthProvider>
  </React.StrictMode>,
)
