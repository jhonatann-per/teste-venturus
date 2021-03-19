import React, { useState } from 'react';
import { Container } from './style';

const Exemplo = () =>{
  const [team, setTeam] = useState('');
  const [desc, setDesc] = useState('');
  const [msg200, setMsg200] = useState('');

  
  const handleInfos = () => {
    setMsg200('Tudo Salvo!')
  }


  return(
    <Container>
      <input type="text" placeholder="Nome do Time" onChange={ e => setTeam(e.target.value) }/>
      <textarea placeholder="Descrição do time" onChange={ e => setDesc(e.target.value) }/>

      <button onClick={handleInfos}>
        salvar
      </button>
      <span>{msg200}</span>
    </Container>
  )
}

export default Exemplo;
