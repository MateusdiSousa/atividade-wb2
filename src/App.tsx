import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Vendas } from './pages/vendas';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { TelaProduto } from './pages/produtos';
import { TelaServico } from './pages/servicos';
import { CadastroProduto } from './pages/cadastrarProduto';
import { CadastroServico } from './pages/cadastrarServico';


class App extends React.Component {
  componentDidMount() {
    // Inicialize Materialize CSS
    M.AutoInit();
  }

  render() {

    return (
      <>
        <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </head>
        <Routes>
          <Route path='/' element={<Vendas />} />
          <Route path='/produtos' element={<TelaProduto />} />
          <Route path='/servicos' element={<TelaServico />} />
          <Route path='/produtos/cadastro' element={<CadastroProduto/>}/>
          <Route path='/servicos/cadastro' element={<CadastroServico/>}/>
        </Routes >
      </>
    );
  }
}

export default App;
