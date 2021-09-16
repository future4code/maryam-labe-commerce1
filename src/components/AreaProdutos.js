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


    render() {
        const componentes = this.props.produtos
        .filter(produto => {
            return produto.name.toLowerCase().includes(this.props.busca.toLowerCase())
        })
        .filter(produto => {
            return this.props.minPrice === "" || produto.value >= this.props.minPrice
        })
        .filter(produto => {
            return this.props.maxPrice === "" || produto.value <= this.props.maxPrice
        })
        .sort((produtoAtual, proximoProduto) => {
            return this.props.order * (produtoAtual.value - proximoProduto.value)
        })
        .map((item) => {
            return (
                <ContainerProduto key={item.id}>
                    <p>{item.name}</p>
                    <ImagemDosProdutos src={item.imageUrl} />
                    <p>R$ {item.value},00</p>
                    <button onClick={()=> this.props.adicionaAoCarrinho(item.id)}>Adicionar ao Carrinho</button>
                </ContainerProduto>
            )
        })

      return (
        <ContainerProdutos>
            <Header>
                <p>Quantidade dos Produtos: {this.props.produtos.length}</p>
                 <div>
                    
                    <p>Preço: </p>
                     <select
                        name="order"
                        value={this.props.order}
                        onChange={this.props.atualizaOrdem}
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