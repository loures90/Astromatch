import styled,{ keyframes } from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';




export const ProfileContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    height: 80vh;
`;
const noMatch = keyframes`
    from {
        transform:rotate(0deg);
        right:0px;
        opacity: 1;
    }to{
        transform:rotate(3deg);
        left: 10px;
        opacity:0.2;
    }
`; 

export const Img = styled.img`
    width: 80vw; 
    height: 60vh;
    border-radius:10px;
    display: block;
    margin: auto;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (min-width: 600px) {
    width: 400px;
    height: 400px;}
    `


export const ImgNoMatch = styled.img`
    width: 80vw; 
    height: 60vh;
    border-radius:10px;
    display: block;
    margin: auto;
    position: relative;
    animation: ${noMatch} 1s;
    overflow: hidden;
    /* Extra small devices (phones, 600px and down) */
   @media only screen and (min-width: 600px) {
    width: 400px;
    height: 400px;}
`;
const example = keyframes`
    from {
        transform:rotate(0deg);
        right:0px;
        opacity: 1;
    }to{
        transform:rotate(-3deg);
        right: 10px;
        opacity:0.2;
    }
`; 
export const ImgMatch = styled.img`
    width: 80vw; 
    height: 60vh;
    border-radius:10px;
    display: block;
    margin: auto;
    position: relative;
    animation: ${example} 1s;
    overflow: hidden;
        /* Extra small devices (phones, 600px and down) */
    @media only screen and (min-width: 600px) {
    width: 400px;
    height: 400px;}
`;

export const Btns = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: flex-end;
    margin-top: 15px;
    padding:5px;
    width:100%;
    /* border: solid 1px red; */

`;

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    align-content: center;
    margin-top: 10px;
    /* border: solid 1px red; */
`;
export const P = styled.p`
    margin: 2px;
    text-align:center;
`;
export const Heart = styled(FavoriteIcon)`
    color: green;
    cursor:pointer;
    :hover{
        color: lightgreen;
    }
`
export const OverHeart = styled(Fab)`
    border: solid 1px green;
    color:lightgreen;

`;

export const NextMatch = styled(CancelPresentationIcon)`
    color: red;
    cursor:pointer;
    :hover{
        color: lightsalmon;
    }
`;

export const ProfileText = styled.div`
    margin-top:5px;
    height: 50px;
    /* border:solid red 1px; */
`;

