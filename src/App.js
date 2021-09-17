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
        name: "Apollo 11",
        value: 1200000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 2,
        name: "Tie Fighter",
        value: 1300000.0,
        imageUrl: "https://www.jing.fm/clipimg/detail/249-2498314_tie-fighter-star-wars-png-image-tie-fighter.png",
        },
        {
        id: 3,
        name: "Blue Origin",
        value: 9005000.0,
        imageUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/13819/production/_118379897_blueorigin_ns12_liftoff.jpg",
        },
        {
        id: 4,
        name: "Millennium Falcon",
        value: 13000000.0,
        imageUrl: "https://www.seekpng.com/png/detail/11-114257_falcon-falcon-star-war-ships-png.png",
        },
        {
        id: 5,
        name: "Falcon 9",
        value: 90000000.0,
        imageUrl: "https://i1.wp.com/tuataras.net/wp-content/uploads/cohetes-de-propulsion-externos-1-1024x683.jpg?resize=750,500&ssl=1",
        },
        {
        id: 6,
        name: "Apollo 13",
        value: 800000.0,
        imageUrl: "https://dicaappdodia.com/wp-content/uploads/2020/04/nasa-1.jpg",
        },
        {
        id: 7,
        name: "Enterprise",
        value: 20000500.0,
        imageUrl: "https://img.olhardigital.com.br/wp-content/uploads/2019/10/20191022062955.jpg",
        },
        {
        id: 8,
        name: "Destroyer",
        value: 66000000.0,
        imageUrl: "https://ecsmedia.pl/c/16195186897249046-png-gallery.big-iext70660636.jpg",
        },
        {
        id: 9,
        name: "Flying Saucers",
        value: 15000.0,
        imageUrl: "https://www.talkbass.com/attachments/killoftheday515-jpg.2017396/",
        },
        {
        id: 10,
        name: "Axion",
        value: 30000500.0,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2016/10/super_imgnave-axiom-filme-wall-e.jpg?quality=70&strip=info&w=550",
        },
        {
        id: 11,
        name: "Endurance",
        value: 10000500.0,
        imageUrl: "https://i.pinimg.com/originals/c5/59/40/c55940458550f0efc45a4928e6b3e8ef.jpg",
        },
        {
        id: 12,
        name: "R-1 IIIA-1",
        value: 100500.0,
        imageUrl: "https://ogimg.infoglobo.com.br/in/22017049-043-409/FT1086A/652/INFOCHPDPICT000041730665.jpg",
        },
    ],

        busca: "",
        minPrice: "",
        maxPrice: "",
        parametroBusca: "price",
        order: 1,
        
        Carrinho: []
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
    const produtoEncotrado = this.state.Carrinho.filter((itemEscolhido) => {
      if (item.id === itemEscolhido.id) {
        return itemEscolhido
      } else {
        return false
      }
    })

    if (produtoEncotrado.length === 0){
      item.quantidade = 1;
      const novoCarrinho = [item, ...this.state.Carrinho]
      this.setState({ Carrinho: novoCarrinho})
    } else { 
      const novoCarrinho = this.state.Carrinho.map((objeto) => {
        if (objeto.id === item.id){
          return {...objeto, quantidade: objeto.quantidade + 1}
        } else{
          return objeto
        }
      })

      this.setState({ Carrinho: novoCarrinho})
    }
  }

  removerProduto = (item) => {
    if(item.quantidade === 1){
      const remocaoDeProduto = this.state.Carrinho.filter(produtoAnalisado => {
        if ( item.id !== produtoAnalisado.id ){
          return true
        } else {
          return false
        }
      })
        this.setState({ Carrinho: remocaoDeProduto })
    } else {
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

  valorTotal = () => {
    const copiaCarrinho = [...this.state.Carrinho]
    const valorTotalDosProdutos = copiaCarrinho.reduce(somaTotal, 0)
    function somaTotal(total, item) {
      return total + (item.value * item.quantidade)
     };
     if (valorTotalDosProdutos === 0){
      return "0.00"
     } else {
     return valorTotalDosProdutos
    }
  };

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
          />
        </div>
      </ContainerGeral>
    );
  }
}