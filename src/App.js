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
        quantidade: 1
        },
        {
        id: 2,
        name: "Tie Fighter",
        value: 12000.0,
        imageUrl: "https://www.jing.fm/clipimg/detail/249-2498314_tie-fighter-star-wars-png-image-tie-fighter.png",
        quantidade: 1
        },
        {
        id: 3,
        name: "Blue Origin",
        value: 100.0,
        imageUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/13819/production/_118379897_blueorigin_ns12_liftoff.jpg",
        quantidade: 1
        },
        {
        id: 4,
        name: "Millennium Falcon",
        value: 130000.0,
        imageUrl: "https://www.seekpng.com/png/detail/11-114257_falcon-falcon-star-war-ships-png.png",
        quantidade: 1
        },
        {
        id: 5,
        name: "Falcon 9",
        value: 1.0,
        imageUrl: "https://i1.wp.com/tuataras.net/wp-content/uploads/cohetes-de-propulsion-externos-1-1024x683.jpg?resize=750,500&ssl=1",
        quantidade: 1
        },
    ],

        busca: "",
        minPrice: "",
        maxPrice: "",
        parametroBusca: "price",
        order: 1,
        
        Carrinho: [
        ]
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


  adicionaAoCarrinho = (item) => {
    const copiaCarrinho = [...this.state.Carrinho];
    this.state.Produtos.filter((itemEscolhido) => {
      if (item === itemEscolhido) {
        copiaCarrinho.push(item)
      } else {
        return false
      }
    })
    this.setState({Carrinho: copiaCarrinho}) 
  }


  removerProduto = (item) => {

    console.log(item.quantidade)
    if(item.quantidade === 1){
      console.log("removendo")

      const remocaoDeProduto = this.state.Carrinho.filter(produtoAnalisado => {

        if ( item.id !== produtoAnalisado.id ){

          return true
    
        } else {
    
          return false
    
        }
    
      })
    
        this.setState({ Carrinho: remocaoDeProduto })

    } else {
      console.log("Nao remove")
      const listaDeProdutos = this.state.Carrinho.map(produto => {

        if (item.id === produto.id ){
    
          const objetoSelecionado = {
    
            ...produto,
    
            quantidade: produto.quantidade - 1
    
          }
    
          return objetoSelecionado
    
        } else {
    
          return produto
    
        }
    
      })
    
        this.setState({ Carrinho: listaDeProdutos })
    
  
  }
  }

  // valorTotal = (listaDeProdutos) => {

  //   const valorTotalDosProdutos = listaDeProdutos.reduce(somaTotal, 0)

  //   function somaTotal(total, item) {

  //     return total + (item.value * item.quantidade)

  //    };

  //    if (valorTotalDosProdutos === 0){

  //     return "0.00"

  //    } else {

  //    return valorTotalDosProdutos

  //   }
  // };


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
            adicionaAoCarrinho = {this.adicionaAoCarrinho}
          />
        </div>
        <div>
          <MenuCarrinho
          Carrinho = {this.state.Carrinho} 
          valorTotal = {this.valorTotal}
          removerProduto = {this.removerProduto}
          // Produtos = {this.state.Produtos}

          />
        </div>
      </ContainerGeral>
    );
  }
}