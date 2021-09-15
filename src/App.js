import React from 'react';
import styled from 'styled-components';
import MenuFiltros from './components/MenuFiltros';
import AreaProdutos from './components/AreaProdutos';
import MenuCarrinho from './components/MenuCarrinho';


const ContainerGeral = styled.div`
display: flex;
padding: 16px;
justify-content: space-between;
`

export default class App extends React.Component {
  render() {
    return (
      <ContainerGeral>
        <div>
          <MenuFiltros />
        </div>
        <div>
          <AreaProdutos />
        </div>
        <div>
          <MenuCarrinho />
        </div>
      </ContainerGeral>
    );
  }
}
