import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'
import { myRouter } from './Router'

function App() {
  
  return (
    <>
        <div>app</div>
        <RouterProvider router={myRouter} />
        <HomePage></HomePage>  
    </>
  )
}

export default App
