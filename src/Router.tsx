
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router"
import AppLayout from "./components/router-components/AppLayout"
import About from "./components/router-components/about"
import Welcome from "./components/router-components/welcome"

export const myRouter = createBrowserRouter([
    {
    path: '/',
    element:<AppLayout />,
    errorElement: <>main error</>,
    children: [
        {
            path: 'about', element: <About/>,            
        },
        {
            path: 'welcome', element:  <Welcome/>
        }        
    ]


    
}
])



