import React, { Component, Suspense } from 'react'
import './assets/css/App.css'
import Filtro from './components/filtro/Filtro'
import { HashRouter, Route, Routes } from 'react-router-dom'

const Setor = React.lazy(() => import('./components/setor/CadastrarSetor'))
const Cargo = React.lazy(() => import('./components/cargo/CadastrarCargo'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense >
          <Routes>
            <Route path="*" name="Home" element={<Filtro />} />
            <Route path="/setor" name="Setor" element={<Setor />} />
            <Route path="/cargo" name="Cargo" element={<Cargo />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}


export default App
