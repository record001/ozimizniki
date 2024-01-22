import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';
import Policy from './pages/Policy';
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<HomePage />
      },
      
      
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/register",
        element:<Register />
      }
    ]
    
  },
  {
    path:"/user/:userId",
    element:<UserPage />,
    
  },
  
  {
    path:"/policy",
    element:<Policy />,
    
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={appRouter} />
    </Provider> 
  </React.StrictMode>
);

