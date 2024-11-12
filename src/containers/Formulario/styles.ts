import styled from 'styled-components'

export const Form = styled.form`
  max-width: 400px;
  width: 100%;

  input {
    margin-bottom: 18px;
  }

  textarea {
    resize: none;
    margin: 16px 0;
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

  input {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
