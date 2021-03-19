import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from './style';

import Header from '../../components/Header';

const Home = () => {
    return( 
        <Container>
            <Header/>
            <div className='blocos'>
                    <div className="bloco1">
                        <div className="HeaderBloco1">
                            <h1 className="Titulo">My Teams</h1>
                            <Link to="/Cadastro" className="adicionar">
                                    +
                            </Link>
                        </div>
                        <p><hr className="linha"/></p>
                        <div className="contemNomeDescricao">
                            <div className="tabelaTituloNome">
                                <div className="timeTituloNome">
                                    <span className="TituloTabela2">Name</span>
                                    <span className="TituloTabela3">Description</span>
                                    <div className="linhaDoTime"></div>
                                </div>
                            </div>
                        </div>
                                <p><hr className="linha"/></p>
                        <div className="meusTimes">
                            <div className="time1">
                                <div className="nomeDescricao">
                                    <div className="timeNome">
                                        <span className="nomeTime">Barcelona</span>
                                    </div>
                                    <div className="timeDescricao">
                                        <span className="descricaoTime">Barcelona Squad</span>
                                    </div>
                                </div>
                            </div>
                            <p><hr className="linhaTime"/></p>


                            <div className="time1">
                                <div className="nomeDescricao">
                                    <div className="timeNome">
                                        <span className="nomeTime">Real Madrid</span>
                                    </div>
                                    <div className="timeDescricao">
                                        <span className="descricaoTime">Real Madrid Squad</span>
                                    </div>
                                </div>
                            </div>
                            <p><hr className="linha"/></p>


                            <div className="time1">
                                <div className="nomeDescricao">
                                    <div className="timeNome">
                                        <span className="nomeTime">Milan</span>
                                    </div>
                                    <div className="timeDescricao">
                                        <span className="descricaoTime">Milan Squad</span>
                                    </div>
                                </div>
                            </div>
                            <p><hr className="linha"/></p>

                            
                            <div className="time1">
                                <div className="nomeDescricao">
                                    <div className="timeNome">
                                        <span className="nomeTime">Liverpool</span>
                                    </div>
                                    <div className="timeDescricao">
                                        <span className="descricaoTime">Liverpool Squad</span>
                                    </div>
                                </div>
                            </div>
                            <p><hr className="linha"/></p>


                            <div className="time1">
                                <div className="nomeDescricao">
                                    <div className="timeNome">
                                        <span className="nomeTime">Bayern Munich</span>
                                    </div>
                                    <div className="timeDescricao">
                                        <span className="descricaoTime">Bayern Munich Squad</span>
                                    </div>
                                </div>
                            </div>
                            <p><hr className="linha"/></p>


                            <div className="time1">
                                <div className="nomeDescricao">
                                    <div className="timeNome">
                                        <span className="nomeTime">Lazio</span>
                                    </div>
                                    <div className="timeDescricao">
                                        <span className="descricaoTime">Lazio Squad</span>
                                    </div>
                                </div>
                            </div>
                            <p><hr className="linha"/></p>


                        </div>
                    </div>
                <div className="contemBloco2">
                    <div className="bloco2">
                        <h1 className="Titulo">Top 5</h1>
                        <p><hr className="linha"/></p>
                        <div className="tabelas">
                            <div className="Tabela">
                                <span className="TituloTabela">lowest avg age</span>
                                <div className="CorpoTabela"> 

                                    <input name="tb1" className="radioTabela1" type="radio" id="Tb11"/>
                                    <label className="botaoTb11" htmlFor="Tb11">
                                        <span className="txtBotaoTb1">
                                            Inter Milan
                                        </span>
                                        <span className="numeroBotaoTb1">
                                            31.9
                                        </span>
                                    </label>

                                    <input name="tb1" type="radio" className="radioTabela2"  id="Tb12"/>
                                    <label className="botaoTb12" htmlFor="Tb12">
                                        <span className="txtBotaoTb1">
                                            APOEL Nicosia
                                        </span>
                                        <span className="numeroBotaoTb1">
                                            31.7
                                        </span>
                                    </label>

                                    <input name="tb1" type="radio" className="radioTabela3"  id="Tb13"/>
                                    <label className="botaoTb13" htmlFor="Tb13">
                                        <span className="txtBotaoTb1">
                                            AC Milan
                                        </span>
                                        
                                        <span className="numeroBotaoTb1">
                                            31.6
                                        </span>
                                    </label>

                                    <input name="tb1" type="radio" className="radioTabela4"  id="Tb14"/>
                                    <label className="botaoTb14" htmlFor="Tb14">
                                        <span className="txtBotaoTb1">
                                            Besiktas JK
                                        </span>
                                        <span className="numeroBotaoTb1">
                                            31.4
                                        </span>
                                    </label>

                                    <input name="tb1" type="radio" className="radioTabela5" id="Tb15"/>
                                    <label className="botaoTb15" htmlFor="Tb15">
                                        <span className="txtBotaoTb1">
                                            Olympiacos Piraeus
                                        </span>
                                        <span className="numeroBotaoTb1">
                                            31.3
                                        </span>
                                    </label>

                                </div>
                            </div>
                            <div className="Tabela">
                                <span className="TituloTabela">Highest avg age</span>
                                <div className="CorpoTabela">

                                    <input name="tb2" className="radioTabela1" type="radio" id="Tb21"/>
                                    <label className="botaoTb21" htmlFor="Tb21">
                                        <span className="txtBotaoTb2">
                                            Calgirls Vinius
                                        </span>
                                        <span className="numeroBotaoTb2">
                                            21.1
                                        </span>
                                    </label>

                                    <input name="tb2" type="radio" className="radioTabela2"  id="Tb22"/>
                                    <label className="botaoTb22" htmlFor="Tb22">
                                        <span className="txtBotaoTb2">
                                            Arsenal FC
                                        </span>
                                        <span className="numeroBotaoTb2">
                                            21.6
                                        </span>
                                    </label>

                                    <input name="tb2" type="radio" className="radioTabela3"  id="Tb23"/>
                                    <label className="botaoTb23" htmlFor="Tb23">
                                        <span className="txtBotaoTb2">
                                            Ajax Amsterdam
                                        </span>
                                        <span className="numeroBotaoTb2">
                                            22.0
                                        </span>
                                    </label>

                                    <input name="tb2" type="radio" className="radioTabela4"  id="Tb24"/>
                                    <label className="botaoTb24" htmlFor="Tb24">
                                        <span className="txtBotaoTb2">
                                            FC Nantes
                                        </span>
                                        <span className="numeroBotaoTb2">
                                            22.1
                                        </span>
                                    </label>

                                    <input name="tb2" type="radio" className="radioTabela5" id="Tb25"/>
                                    <label className="botaoTb25" htmlFor="Tb25">
                                        <span className="txtBotaoTb2">
                                            CSKA Moscow
                                        </span>
                                        <span className="numeroBotaoTb2">
                                            22.5
                                        </span>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bloco3">
                        <div className="bloco3bg">
                            <div className="linhaDoCampo"></div>
                            <div className="bola"></div>
                        </div>
                        <div className="tabelaJogador">
                            <span className="ordemJogador">Most picked player</span>
                            <div className="fotoJogador"></div>
                        </div>
                        <div className="tabelaJogador">
                            <span className="ordemJogador">Lest picked player</span>
                            <div className="fotoJogador"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default Home;