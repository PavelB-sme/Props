import Listing from './components/Listing/Listing'
import './App.css'
import { data } from './components/data/data'
function App() {
  

  return (
    <>
      <Listing
        items={data}/>
    </>
  )
}

export default App
