
import './App.css'
import Counter from './components/Counter'
import Descricao from './components/Descricao'
import Pai from './components/Pai'
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
    </>
  )
}

export default App
