import React from "react";
import styled from "styled-components";

const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const NomeLoja = styled.div`
    display: flex;
    justify-content: center;
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const OrdenaPreço = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        margin-right: 10px;
    }

    select {
        border-radius: 5px;
    }

`
const Footer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;

    p > a {
        text-decoration: none;
        color: black;
        font-weight: bolder;
    }

    a:hover {
        color: gray;
    }

`


const AreaDosProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`
const ContainerProduto = styled.div`
    display: flex ;
    flex-direction: column;
    border: 1px #555;
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    align-items: center;
    padding-bottom: 10px;
    border-radius: 10px;

    button {
        border:none;
        border-radius: 5px;
        background-color: darkgray;
        padding: 10px;
        font-size: 18px;
    }

    button:hover {
        color: white;
    }

    button:active {
        color: lightgray
    }
`
const ImagemDosProdutos = styled.img`
    width: 250px;
    height: 200px;
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
                    <button onClick={()=> this.props.adicionaAoCarrinho(item)}>Adicionar ao Carrinho</button>
                </ContainerProduto>
            )
        })

      return (
        <ContainerProdutos>
            <NomeLoja>
            <h1>Spaceships by X Æ A-XII</h1>
            </NomeLoja>
            <Header>
                <p>Quantidade dos Produtos: {componentes.length}</p>
                 <OrdenaPreço>
                    
                    <p>Preço: </p>
                     <select
                        name="order"
                        value={this.props.order}
                        onChange={this.props.atualizaOrdem}
                    >
                        <option value={1}>Crescente</option>
                        <option value={-1}>Decrescente</option>
                    </select>
                 </OrdenaPreço>
            </Header>
            <AreaDosProdutos>
                {componentes}
            </AreaDosProdutos>
                <Footer>
                    <div>
                        <p>Site desenvolvido com React</p>
                        <p>Alunos da <a href="http://labenu.com.br" alt="site da Labenu" target="blank">Labenu</a> - turma Maryam</p>
                    </div>
                    <div>
                        <p><em>Projeto Desenvolvido em Agosto de 2021 por:</em></p>
                        <p><a href="https://github.com/allan-gilber" alt="GitHub do Allan" target="blank">Allan Gilber Martins</a></p>
                        <p><a href="https://www.linkedin.com/in/ericomarshall/" alt="Linkedin do Érico" target="blank">Érico Marshall</a></p>
                        <p><a href="https://www.linkedin.com/in/leonardo-camillo-9a5682191/" alt="GitHub do Leonardo" target="blank">Leonardo Camillo</a></p>
                    </div>
                </Footer>
        </ContainerProdutos>
      );
    }
  } 