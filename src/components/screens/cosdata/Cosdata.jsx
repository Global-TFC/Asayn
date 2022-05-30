import React from 'react'
import styled from 'styled-components'
import Coscard from '../../includes/coscard/Coscard'

function Cosdata() {
  return (
       <Datahome>
           <Pagehead>Coures Name</Pagehead>
           <Pagedata>
               <Coscard/>
               <Coscard/>
               <Coscard/>
               <Coscard/>
               <Coscard/>
               <Coscard/>
               <Coscard/>
               <Coscard/>
               <Coscard/>
           </Pagedata>
       </Datahome>
  )
}

const Datahome = styled.div`
    padding-top: 70px;
`;
const Pagehead = styled.h2`
    color: #000000;
`;
const Pagedata = styled.div`
    background-color: #df1111;
`;

export default Cosdata;