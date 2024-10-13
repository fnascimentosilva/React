
import './App.css'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Events from './components/Events'
import Exercises from './components/Exercises'
import Greetings from './components/Exercises'
import Lists from './components/Lists'
import Pai from './components/Pai'
import RevisaoUseState from './components/RevisaoUseState'
import UserInfoForm from './components/UserInfoForm'

import Welcome from './components/Welcome'

function App() {


  return (
    <>
      <Welcome></Welcome>
      <Pai></Pai>
      <Descricao nome = "Rosicleia" cor="morena"/>
      <Counter/>
      <UserInfoForm/>
      <RevisaoUseState/>
      <Events/>
      <Lists numbers={[1,2,3,4,5]}/>
      <Exercises/>
    </>
  )
}

export default App
