import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,Blog,Contract,About,Hire, CarRent, PartnerForm,SinglePost } from './Components/index.js'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },{
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/Hire",
//         element: <Hire />
//       },
//       {
//         path: "/CarRent",
//         element: <CarRent />
//       },
//       {
//         path: "/Blog",
//         element: <Blog />
//       },
//       {
//         path: "/Contract",
//         element: <Contract />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Hire a Driver" element={<Hire/>}/>
      <Route path="Corporate Rent" element={<CarRent/>}/>
      <Route path="Blog" element={<Blog/>}/>
      <Route path="/post/:id" element={<SinglePost />}/>
      <Route path="Contract Us" element={<Contract/>}/>
      <Route path="partner-form" element={<PartnerForm/>}/>
      
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
