import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portofilio from './Components/Portofilio/Portofilio'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'




function App() {

  const routes = createBrowserRouter([
    
    {
    path:"/",element:<Layout />,
    
    children:[
      {index:true,element:<Home />},
        {path:"about",element:<About />},
        {path:"contact",element:<Contact />}, 
        {path:"Portofilio",element:<Portofilio />},
        {path:"*",element:<Notfound />}
    ]
  }
])
  

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
