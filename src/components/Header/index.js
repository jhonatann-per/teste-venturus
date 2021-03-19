import React from 'react';
import {Container} from './style';

const Header = () => {
  return(
    <Container> 
      <header className="header">
        <h1 className='logo'> Squad Management Tool </h1>
        <h1 className='usuario'> John Doe </h1>
      </header>
    </Container>
  );
}
export default Header;
