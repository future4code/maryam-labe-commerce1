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

  state = {
    Produtos: [
        {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 2,
        name: "Foguete da Missão Apollo 10",
        value: 1000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 3,
        name: "Foguete da Missão Apollo 12",
        value: 100.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 4,
        name: "Foguete da Missão Apollo 13",
        value: 10.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 5,
        name: "Foguete da Missão Apollo 14",
        value: 1.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
    ],

    carrinho:[
    ],
        busca: "",
        minPrice: "",
        maxPrice: "",
        parametroBusca: "price",
        order: 1
    };

    atualizaBusca = (evento) => {
      this.setState({
          busca: evento.target.value
      })
    }

  atualizaPrecoMin = (evento) => {
      this.setState({
          minPrice: evento.target.value
      })
  }

  atualizaPrecoMax = (evento) => {
      this.setState({
          maxPrice: evento.target.value
      })
  }

  atualizaOrdem = (evento) => {
      this.setState({
          order: evento.target.value
      })
  }
  render() {


    
    return (
      <ContainerGeral>
        <div>
          <MenuFiltros 
            atualizaBusca = {this.atualizaBusca}
            busca = {this.state.busca}
            atualizaPrecoMin = {this.atualizaPrecoMin}
            minPrice = {this.state.minPrice}
            atualizaPrecoMax = {this.atualizaPrecoMax}
            maxPrice = {this.state.maxPrice}
          />
        </div>
        <div>
          <AreaProdutos 
            produtos = {this.state.Produtos}
            atualizaOrdem = {this.atualizaOrdem}
            parametroBusca = {this.state.parametroBusca}
            order = {this.state.order}
            busca = {this.state.busca}
            minPrice = {this.state.minPrice}
            maxPrice = {this.state.maxPrice}
          />
        </div>
        <div>
          <MenuCarrinho />
        </div>
      </ContainerGeral>
    );
  }
}
