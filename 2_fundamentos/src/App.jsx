
import './App.css'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Events from './components/Events'
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
    </>
  )
}

export default App
