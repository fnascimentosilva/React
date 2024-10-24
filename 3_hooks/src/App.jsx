
import './App.css'
import DisplaWindowSize from './components/DisplayWindowSize'
import ExemploUseEffect from './components/ExemploUseEffect'
import Exercises from './components/Exercises'
import Timer from './components/Timer'
import Context from './components/useContext'
import Contador from './components/UseReducer'

function App() {


  return (
    <>
      {/* useEffect */}
      <ExemploUseEffect/>
      <Timer />
      {/* useContext */}
      <Context />
      {/* UseReducer */}
      {/* Utilizados em estados mais complexos */}
      <Contador/>
      {/* Custom hook */}
      <DisplaWindowSize/>
      {/* Resolução de exercicios */}
      <Exercises/>
    </>
  )
}

export default App
