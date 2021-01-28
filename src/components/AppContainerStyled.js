import styled from 'styled-components'

export const Container = styled.div`
    background-color:#f5f5f5;
    width: 99vw;
    height: 99vh;
    border:#ffa726 5px solid;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    color: #000;    
    font-weight: bold;


        /* Extra small devices (phones, 600px and down) */
        @media only screen and (min-width: 600px) {
        width: 450px;
        height: 650px;
    }
`;