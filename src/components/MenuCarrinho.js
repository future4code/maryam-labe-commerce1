import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  max-height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px #555;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
  border-radius: 10px;
  height: 80%;
  width: 300px;

    h1 {
      padding: 16px;
    }

    button {
      padding: 2px 4px;
      text-align: center;
    }

    p {
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
  align-items: center;

    p{
      margin: 0;
      display: inline;
      font-size: 24px;
    }
`

const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 16px;
    
    p{
      margin: 0;
      display: inline;
      font-size: 24px;
    }
`

const BotaoRemover = styled.div`
  width: 30%;
  max-width: 64px;
  max-height: 20px;
  text-align: center;
  justify-content: center;
  outline: 0;

  button {
    border: none;
    border-radius: 5px;
    background-color: darkgrey;
    padding: 5px;
  }

  button:hover {
    color: white;
  }
  
  button:active {
        color: lightgray
    }
`

export default class MenuCarrinho extends React.Component {

  render() {

    const produtosNoCarrinho = this.props.Carrinho.map((produtos) => {
      return (

        <ItemDaListaDeProdutos key={produtos.id}>
          <p>{produtos.quantidade}x</p>
          <p>{produtos.name}</p>
          <BotaoRemover>
              <button onClick={() => this.props.removerProduto(produtos)}>Remover</button>
          </BotaoRemover>
        </ItemDaListaDeProdutos>
      );

    })

    return (
      <ContainerCarrinho>
        <DisposicaoDaListaDeProdutos>
          <h1>Carrinho:</h1>
          {produtosNoCarrinho}
        </DisposicaoDaListaDeProdutos>
          <ValorTotal>
            <p>Valor Total:</p>
            <p>R${this.props.valorTotal(this.props.carrinho)}</p>
          </ValorTotal>
      </ContainerCarrinho>
    );
  }
}