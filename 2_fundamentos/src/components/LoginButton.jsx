import React from 'react'

function LoginButton({login}) {
  return (
    <>
    <div>{login ? <button>Sair</button> : <button>Entrar</button>}</div>
    </>
  )
}

export default LoginButton