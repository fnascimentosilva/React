import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>Página nao encontrada</h2>
        <Link to={'/'}>Voltar para a página inicial</Link>
    </div>
  )
}

export default NotFound