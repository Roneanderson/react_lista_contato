import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  backgroudn-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Botao = styled.button`
  font-weght: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 8px;
  border-radius: 8px;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  color: #fff
  font-eight: bold
  font-size: 10px
`
export const BotaSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaCancelaRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
