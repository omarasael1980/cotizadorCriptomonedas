import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFFFFF;
    padding: 15px;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Lato',sans-serif;
    font-weight: 700;


`
const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
