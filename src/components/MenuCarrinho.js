import React from "react";
import styled from "styled-components";


const ContainerCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const ValorTotal = styled.div`
display: flex;
justify-content: space-between;
text-align: center;`

const BotaoRemover = styled.div`
width: 30%;
max-width: 64px;
max-height: 20px;
text-align: center;
justify-content: center;`



export default class MenuCarrinho extends React.Component {

  state = {

    listaDeProdutos:[

    ],

    quantidade:'',
    produto: '',
    valorTotal: '',

  };

  selectTarefa = (id) => {

    const removerProduto = this.state.listaDeProdutos.filter(produto => {

    if ( id !== produto.id ){

      const produtoSelecionado = {

        ...produto,

      }

      return produtoSelecionado

    } else {

      return produto

    }

  })

    this.setState({ listaDeProdutos: removerProduto })

  };

  // const removeDaListaDeProdutos = this.state.listaDeProdutos.map((novosPosts) =>{

  //   return (

  //     <Produtos
  //     {...novosPosts}
  //     />

  //   );

  // })

  render() {
    return (
      <ContainerCarrinho>

          <h1>Carrinho:</h1>

          {this.state.listaDeProdutos}

          <ValorTotal>

            <p>Valor Total:</p>
            {this.state.valorTotal}

          </ValorTotal>

          <BotaoRemover>

          <button>

          onClick={() => this.selectTarefa(this.state.listaDeProdutos.id)}

          </button>

          </BotaoRemover>

      </ContainerCarrinho>
    );
  }
}