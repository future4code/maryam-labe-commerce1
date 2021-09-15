import React from "react";
import styled from "styled-components";


const ContainerFiltros = styled.div`
border:1px solid black;
padding: 60px 60px;
`

const InputContainer = styled.div`
display: flex;
flex-direction: column;

`

export default class MenuFiltros extends React.Component {
    render() {
      return (
        <ContainerFiltros>
            <h3>Filtros</h3>
                <InputContainer>
                <p>Valor mínimo</p>
                <input
                type="number"
                />
                </InputContainer>

                <InputContainer>
                <p>Valor máximo</p>
                <input
                type="number"
                />    
                </InputContainer>
                
                <InputContainer>
                <p>Busca por nome</p>
                <input
                />
                </InputContainer>
        </ContainerFiltros>
      );
    }
  }