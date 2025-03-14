import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    list-style: none;
    color: #fff;
    background-color: ${variaveis.fundo};

  }
`
export const Container = styled.div`
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  margin-top: 32px;
  padding: 0 40px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
  font-weight: bold;
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  color: #fff;
  border-color: ${variaveis.borda};
  border: 1px solid;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
