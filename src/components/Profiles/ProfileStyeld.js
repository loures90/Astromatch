import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';




export const ProfileContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    height: 80vh;
`;
export const Img = styled.img`
    width: 34vw; 
    height: 60vh;
    border-radius:10px;
    display: block;
    margin: auto;
    margin-bottom:20px;
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
    justify-content:space-around;
    align-items: center;
    margin-top: 10px;
    padding:10px;
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

