import React from 'react'

//Membro
const Filtro = React.lazy(() => import('./components/filtro/Filtro'))
const Setor = React.lazy(() => import('./components/setor/CadastrarSetor'))
const Cargo = React.lazy(() => import('./components/cargo/CadastrarCargo'))


const routes = [
  { path: '/trabalhador', name: 'Trabalhador', element: Filtro, exact: true },
  { path: '/setor', name: 'Setor', element: Setor, exact: true },
  { path: '/cargo', name: 'Cargo', element: Cargo, exact: true },

]

export default routes
