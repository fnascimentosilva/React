
import './App.css'
import DisplaWindowSize from './components/DisplayWindowSize'
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
      {/* Utilizados em estados mais complexos */}
      <Contador/>
      {/* Custom hook */}
      <DisplaWindowSize/>
    </>
  )
}

export default App
