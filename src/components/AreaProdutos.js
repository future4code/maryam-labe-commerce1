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
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 3,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 4,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
        {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://static.todamateria.com.br/upload/ap/ol/apollo11decolando-cke.jpg",
        },
    ]
    };

    render() {
        const componentes = this.state.Produtos.map((item) => {
            return (
                <ContainerProduto key={item.id}>
                    <p>{item.name}</p>
                    <ImagemDosProdutos src={item.imageUrl} />
                    <p>{item.value}</p>
                    <button>Adicionar ao Carrinho</button>
                </ContainerProduto>
            )
        })
        console.log(this.state.Produtos.length)

        // //Função para ordenar os produtos em ordem Crescente
        // const ordenaProdutosCrescente = this.state.Produtos.map((produtos) => {
        //     produtos.value.sort((a, b) => {
        //         if (a > b) {
        //             return 1;}
        //         if (a < b) {
        //             return -1;}
        //         return 0
        //     })
        //     return produtos
        // })

        // //Função para ordenar os produtos em ordem Decrescente
        // const ordenaProdutosCrescente = this.state.Produtos.map((produtos) => {
        //     produtos.value.sort((a, b) => {
        //         if (a < b) {
        //             return 1;}
        //         if (a > b) {
        //             return -1;}
        //         return 0
        //     })
        //     return produtos
        // })

      return (
        <ContainerProdutos>
            <Header>
                <p>Quantidade dos Produtos: {this.state.Produtos.length}</p>  
            </Header>
            <AreaDosProdutos>
                {componentes}
            </AreaDosProdutos>
        </ContainerProdutos>
      );
    }
  } 