import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './assets/pages/HomePage';
import Home from './assets/pages/Home';
import Hadis from './assets/pages/Hadis';
import SubjectHadis from './assets/pages/SubjectHadis';
import Bookmark from './assets/pages/Bookmark';
import File from './assets/pages/File';
import FindHadis from './assets/pages/FindHadis';
import About from './assets/pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/',
        element:<Hadis/>
      },
      {
        path:'/subjectHadis',
        element:<SubjectHadis/>
      },
      {
        path:'/bookMark',
        element:<Bookmark/>
      },
      {
        path:'/file',
        element:<File/>
      },
      {
        path:'/find',
        element:<FindHadis/>
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
