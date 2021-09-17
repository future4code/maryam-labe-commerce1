import React from "react";
import styled from "styled-components";


const ContainerFiltros = styled.div`
  max-height: 100vh;
  min-height: 80vh;
  height: 80%;
  width: 250px;
  display: flex ;
  flex-direction: column;
  border: 1px #555;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
  align-items: center;
  border-radius: 10px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;

  input {
    border-radius: 5px;
    border: none;
    height: 30px;
    margin-bottom: 20px;
    width: 200px;
  }
`

export default class MenuFiltros extends React.Component {
  render() {
    return (
      <ContainerFiltros>
      <h1>Filtros</h1>
        <InputContainer>
          <p>Busca por nome:</p>
          <input
          value={this.props.busca}
          onChange={this.props.atualizaBusca}
          />
        </InputContainer>

        <InputContainer>
          <p>Valor mínimo:</p>
          <input
          type="number"
          value={this.props.minPrice}
          onChange={this.props.atualizaPrecoMin}
          />
        </InputContainer>

        <InputContainer>
          <p>Valor máximo:</p>
          <input
          type="number"
          value={this.props.maxPrice}
          onChange={this.props.atualizaPrecoMax}
          />    
        </InputContainer>
      </ContainerFiltros>
    );
  }
  }