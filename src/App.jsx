import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
        <NavBar/>
        <HomePage/>
      </div>
    },
    {
      path:'/pastes',
      element: <div>
        <NavBar/>
        <Pastes/>
      </div>
    },
    {
      path:'/pastes/:id',
      element: <div>
        <NavBar/>
        <ViewPaste/>
      </div>
    },
  ]
)

function App() {
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
