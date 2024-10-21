
import './App.css'
import Timer from './components/Timer'
import Context from './components/useContext'
import Contador from './components/UseReducer'

function App() {


  return (
    <>
      {/* useEffect */}
      <Timer />
      {/* useContext */}
      <Context />
      {/* UseReducer */}
      <Contador/>
    </>
  )
}

export default App
