import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px #555;
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    border-radius: 10px;
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

const CarrinhoVazio = styled.div`
  margin: 0;
  display: inline;
  font-size: 24px;
  padding: 16px;`

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
}`

const BotaoRemover = styled.div`
width: 30%;
max-width: 64px;
max-height: 20px;
text-align: center;
justify-content: center;
outline: 0;`



export default class MenuCarrinho extends React.Component {

  state = {

    quantidade:'',
    produto: '',
    valorTotal: '',

  };

  // listaDoCarrinho = (produtosNoCarrinho) => {
  //   console.log(produtosNoCarrinho)
  //   let tamanhoDoObjeto = produtosNoCarrinho.length
  //   if (tamanhoDoObjeto === 0)
  //   {

  //       return (<CarrinhoVazio> O carrinho está vazio.</CarrinhoVazio>)

  //   } else{

  //     return produtosNoCarrinho
  // }}
  //≈

  // componentDidUpdate(){
  //   componentDidUpdate(prevProps) {
  //     if(prevProps.value !== this.props.value) {
  //       this.setState({value: this.props.value});
  //     }
  //   // }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.pokemons !== this.state.pokemons) {
  //     console.log('pokemons state has changed.')
  //   }
  // }
  
  render() {

    const produtosNoCarrinho = this.props.Carrinho.map((produtos) => {
      return (

        <ItemDaListaDeProdutos key={produtos.id}>
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
            {/* <p>R${this.props.valorTotal(this.props.carrinho)}</p> */}

          </ValorTotal>

      </ContainerCarrinho>

    );
  }
}