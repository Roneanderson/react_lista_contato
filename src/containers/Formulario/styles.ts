import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: '#fcfcfc';

  input {
    border: 1px solid #48456c;
    border-radius: 8px;
    height: 40px;
    background-color: 363653;
    width: 100%
    font-size: 16px;
    padding-left: 10px;
    width: 100%;
  }

  label {
    display: block;
    margin-top: 18px;
    margin: 10px
    font-size: 18px;
    font-weight: bold;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
