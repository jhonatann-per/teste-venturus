import React from 'react';
import {Container} from './style';
import { Link } from 'react-router-dom'
import Header from './../../components/Header';
import TagsInput from '../../components/Tags';

const Cadastro = () =>{

    const selectedTags = tags => {
		console.log(tags);
	};

    return(
        <Container>
            <Header/>
            <div className="cadastro">
                <form>
                    <div className="painelCadastro">
                        <h1 className="titulo">Create your team</h1>
                        <p><hr className="linha"/></p>
                        <span className="tituloCadastro">TEAM INFORMATION</span>
                        <div className="top">
                            <div className="tabela1">
                                <span className="tituloTabela">Team name</span>
                                <input className="nome" type="text" placeholder="  insert team name"/>
                                <span className="tituloTabela">Description</span>
                                <textarea className="descricao" />
                            </div>
                            <div className="tabela2">
                                    <span className="tituloTabela">Team website</span>
                                    <input type="url" className="site" placeholder="  http://myteam.com" />
                                    <span className="tituloTabela">Team type</span>
                                <div className="botaoRadio">
                                    <input className="radioBt" name="bt" type="radio" id="b1"/> 
                                    <label className="lB1" htmlFor="b1">Real</label>
                                    <input className="radioBt" name="bt" type="radio" id="b2"/>
                                    <label className="lB1" htmlFor="b2">Fantasy</label>
                                </div>
                                <span className="tituloTabela">Tags</span>
                                <TagsInput 
                                    selectedTags={selectedTags}
                                    tags={
                                        [
                                            'BR',
                                            'PTW',
                                            'Atack',
                                            'Defense'
                                        ]
                                    }
                                />
                            </div>
                        </div>
                        <span className="tituloCadastro1">CONFIGURE SQUAD</span>
                        <div className="meio">    
                            <div className="tabela3">
                                <div>
                                    <span className="tituloTabela">Formation</span>
                                    <select className="opcaoTime">
                                        <option value="3-4-3">3-4-3</option>
                                        <option value="4-3-3">4-3-3</option>
                                        <option value="3-3-4">3-3-4</option>
                                    </select>
                                </div>
                                <div className="campo">
                                    <div className="bloco3bg">
                                        <div className="linhaDoCampo"></div>
                                        <div className="bola"></div>
                                    </div>
                                    <div className="posicoes">
                                        <div className="bolasAtacante">
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                        </div>


                                        <div className="bolasArtilheiro">
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                        </div>


                                        <div className="bolasMeia">
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                        </div>


                                        <div className="bolasVolante">
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                        </div>


                                        <div className="bolaZagueiro">
                                            <div className="bolaJogador">
                                                +
                                                <div className="bordaBola"></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="estiloSalvar">
                                    <Link to="/" className="botaoSalvar">Save</Link>
                                </div>
                            </div>
                            <div className="tabela4">
                                <span className="tituloTabela">Search Players</span>
                                <input className="buscarJogador"type="text"/> 
                                <div className="escolhaJogador">

                                    <div className="jogadores">
                                        <div className="jogador">
                                            <div className="nomeJogador">
                                                <span>
                                                    Name:
                                                </span>
                                                <span>
                                                    Ronaldo
                                                </span>
                                            </div>
                                            <div className="idadeJogador">
                                                <span>
                                                    Age:
                                                </span>
                                                <span>
                                                    36
                                                </span>
                                            </div>
                                        </div>
                                        <div className="paisJogador">
                                            <span>
                                                Nacionality:
                                            </span>
                                            <span>
                                                Portugal
                                            </span>
                                        </div>
                                    </div>
                                    

                                    <div className="jogadores">
                                        <div className="jogador">
                                            <div className="nomeJogador">
                                                <span>
                                                    Name:
                                                </span>
                                                <span>
                                                    Ronaldo 
                                                </span>
                                            </div>
                                            <div className="idadeJogador">
                                                <span>
                                                    Age:
                                                </span>
                                                <span>
                                                    28
                                                </span>
                                            </div>
                                        </div>
                                        <div className="paisJogador">
                                            <span>
                                                Nacionality:
                                            </span>
                                            <span>
                                                Brasil
                                            </span>
                                        </div>
                                    </div>


                                    <div className="jogadores">
                                        <div className="jogador">
                                            <div className="nomeJogador">
                                                <span>
                                                    Name:
                                                </span>
                                                <span>
                                                    Ronaldo
                                                </span>
                                            </div>
                                            <div className="idadeJogador">
                                                <span>
                                                    Age:
                                                </span>
                                                <span>
                                                    18
                                                </span>
                                            </div>
                                        </div>
                                        <div className="paisJogador">
                                            <span>
                                                Nacionality:
                                            </span>
                                            <span>
                                                Brasil
                                            </span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>  
                </form>
            </div>
        </Container>
    )
}

export default Cadastro;
