import React from 'react'
import styled from 'styled-components';
import Coscard from '../../includes/coscard/Coscard';


function HomeCont() {
    return (
        <>
            <Homecontent >
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
                <Coscard />
            </Homecontent>
        </>
    )
}

const Homecontent = styled.div`
    padding-top: 10px;
    padding-left: 6%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    padding-top: 70px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 60px;
    width: 100%;
    }
`;

export default HomeCont