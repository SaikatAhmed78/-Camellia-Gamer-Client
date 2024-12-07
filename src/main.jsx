import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ThemeProvider } from './Provider/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <ThemeProvider>
   <RouterProvider router={router}></RouterProvider>
   </ThemeProvider>
   </AuthProvider>
  </StrictMode>,
)
