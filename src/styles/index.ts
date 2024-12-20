import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Robot, sans-serif;
list-style: none
}
`
export const Container = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 100vh;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadown: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
`

export const Input = styled.input`
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  background-color: #fff;
  height: 36px;
  padding: 0 10px;
  margin-bottom: 18px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: rgb(1, 43, 102);
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export default EstiloGlobal
