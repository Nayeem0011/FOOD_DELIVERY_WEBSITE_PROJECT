
import { Toaster } from 'react-hot-toast'
import './App.css'

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'

function App() {
  return (
    <>
      
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
