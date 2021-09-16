import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    height: 80%;
    width: 300px;
    h1{
      padding: 16px;
    }
    button {
      padding: 2px 4px;
      text-align: center;
    }
    p{
      margin: 0;
    }
`

const DisposicaoDaListaDeProdutos = styled.div`
    display:flex;
    flex-direction: column;
    `

const ItemDaListaDeProdutos= styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 12px;
    p{
      margin: 0;
      display: inline;
    }
    `

const ValorTotal = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
padding: 16px;`

const BotaoRemover = styled.div`
width: 30%;
max-width: 64px;
max-height: 20px;
text-align: center;
justify-content: center;
outline: 0;`

export default class MenuCarrinho extends React.Component {

  state = {

    listaDeProdutos:[
      {
      id: 1,
      quantidade: 3,
      produto: 'panos',
      valorTotal: '3000',
    }
    ],

    quantidade:'',
    produto: '',
    valorTotal: '',

  };

  removerProduto = (produtoSelecionado) => {

    if(produtoSelecionado.quantidade === 1){

      console.log("entrou1")

      const remocaoDeProduto = this.state.listaDeProdutos.filter(produtoAnalisado => {

        if ( produtoSelecionado.id !== produtoAnalisado.id ){

          console.log(produtoSelecionado.id, "e", produtoAnalisado.id)
          console.log("entrou2")
          return true
    
        } else {
    
          return false
    
        }
    
      })
    
        this.setState({ listaDeProdutos: remocaoDeProduto })

    } else {

      console.log("entrou 4")

      const listaDeProdutos = this.state.listaDeProdutos.map(produto => {

        if (produtoSelecionado.id === produto.id ){
    
          const objetoSelecionado = {
    
            ...produto,
    
            quantidade: produto.quantidade - 1
    
          }
    
          return objetoSelecionado
    
        } else {
    
          return produto
    
        }
    
      })
    
        this.setState({ listaDeProdutos: listaDeProdutos })
    
  }
  };

  render() {

    const produtosNoCarrinho = this.state.listaDeProdutos.map((produtos) =>{

      return (
          
        <ItemDaListaDeProdutos>

          <p>{produtos.quantidade}</p>

          <p>{produtos.produto}</p>

          <BotaoRemover>

              <button onClick={() => this.removerProduto(produtos)}>

              Remover

              </button>


          </BotaoRemover>

        </ItemDaListaDeProdutos>
      );

    });

    return (
      <ContainerCarrinho>

        <DisposicaoDaListaDeProdutos>

          <h1>Carrinho:</h1>

          {produtosNoCarrinho}

        </DisposicaoDaListaDeProdutos>

          <ValorTotal>

            <p>Valor Total:</p>
            {this.state.valorTotal}

          </ValorTotal>

      </ContainerCarrinho>
    );
  }
}