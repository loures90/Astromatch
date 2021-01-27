import React from 'react'
import {HeaderContainer, IconGroup, Clear, H1,H1Color} from  './HeaderStyle'
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Fab from '@material-ui/core/Fab';


export default function Header(props) {

  return (
    <HeaderContainer>
      <Clear style={{ fontSize: 40 }} onClick={props.clearMatches} />
      <H1><H1Color>ASTRO</H1Color>MATCH</H1>
      {props.pageHome ? <IconGroup style={{ fontSize: 40 }} onClick={props.togglePage}/> :
       <IconGroup style={{ fontSize: 40 }} onClick={props.togglePage}/>}
    </HeaderContainer>
  );
}


