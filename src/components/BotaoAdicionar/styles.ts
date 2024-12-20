import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circulo = styled(Link)`
  height: 50px;
  width: 50px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 8px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  text-decoration: none;
`
