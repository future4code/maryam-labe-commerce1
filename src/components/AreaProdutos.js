import React from "react";
import styled from "styled-components";

const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
`
const Header = styled.header`
    display: flex;
`

const AreaDosProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
`
const ContainerProduto = styled.div`
    display: flex ;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    padding-bottom: 10px;
`
const ImagemDosProdutos = styled.img`
    width: 250px;
`

export default class AreaProdutos extends React.Component {

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
        const componentes = this.state.Produtos
        .filter(produto => {
            return produto.name.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter(produto => {
            return this.state.minPrice === "" || produto.value >= this.state.minPrice
        })
        .filter(produto => {
            return this.state.maxPrice === "" || produto.value <= this.state.maxPrice
        })
        .sort((produtoAtual, proximoProduto) => {
            return this.state.order * (produtoAtual.value - proximoProduto.value)
        })

        .map((item) => {
            return (
                <ContainerProduto key={item.id}>
                    <p>{item.name}</p>
                    <ImagemDosProdutos src={item.imageUrl} />
                    <p>R$ {item.value},00</p>
                    <button>Adicionar ao Carrinho</button>
                </ContainerProduto>
            )
        })

      return (
        <ContainerProdutos>
            <Header>
                <p>Quantidade dos Produtos: {this.state.Produtos.length}</p>
                 <div>
                    <input 
                     placeholder="Pesquisa"
                     value={this.state.busca}
                     onChange={this.atualizaBusca}
                     />

                    <input
                     type="number" 
                     placeholder="Preço Mínimo"
                     value={this.state.minPrice}
                     onChange={this.atualizaPrecoMin}
                     />

                    <input
                     type="number"  
                     placeholder="Preço Máximo"
                     value={this.state.maxPrice}
                     onChange={this.atualizaPrecoMax}
                     />
                    <p>Preço: </p>
                     <select
                        name="order"
                        value={this.state.order}
                        onChange={this.atualizaOrdem}
                    >
                        <option value={1}>Crescente</option>
                        <option value={-1}>Decrescente</option>
                    </select>
                 </div>
            </Header>
            <AreaDosProdutos>
                {componentes}
            </AreaDosProdutos>
        </ContainerProdutos>
      );
    }
  } 