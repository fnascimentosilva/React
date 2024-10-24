
import './App.css'
import DisplaWindowSize from './components/DisplayWindowSize'
import ExemploUseEffect from './components/ExemploUseEffect'
import Exercises from './components/Exercises'
import Revisao from './components/Revisao'
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
      {/* Refaazendo o exercicio numero 1 UseEffect */}
      <Revisao/>
    </>
  )
}

export default App
