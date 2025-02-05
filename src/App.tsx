import { RouterProvider } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'
import { myRouter } from './Router'
import recipesStore from './store/recipesStore'
import { Provider } from 'react-redux'

function App() { 
    
  return (
    <>
        <Provider store={recipesStore}>
        <RouterProvider router={myRouter} />
        <HomePage></HomePage>
        </Provider>  
    </>
  )
}

export default App
