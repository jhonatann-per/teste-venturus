import Styled from 'styled-components';

export const Container = Styled.div`

    textarea,
    input{
        outline-color:#90327E;
    }
    .cadastro{
        width:95vw;
        height:95vh;
        margin: 50px 25px 50px 25px;
        font-size:15px;
        border-radius:10px;
    }
    .painelCadastro{
        height:100%;
        border-radius:10px;
        background-color:white;
    }
    .top{
        height:400px;
        max-width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        justify-content:space-between;
        padding:3% 10% 3% 10%;
    }
    .meio{
        max-height:80%;
        max-width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        justify-content:space-between;
        padding:3% 10% 3% 10%;
    }
    .tabela1{
        height:35vh;
        width:40%;
    }
    .tabela2{
        height:35vh;
        width:40%;
        position:absolute:
        bottom:0;
    }
    .tabela3{
        height:70vh;
        width:40%;
        background:white;
    }
    .tabela4{
        width:40%;
        background:white;
        margin:0 0 218px 0;
    }
    .linha{
        height:2px;
        background-color:#EEEEEE;
    }
    .site{
        width:100%;
        height:35px;
        border-radius:2px;
        margin: 5px 0 35px 0;
        font-size:15px;
        border:1px solid #EAEAEA;
    }
    .nome{
        margin:5px 0 15px 0;
        width:100%;
        height:35px;
        border-radius:2px;
        font-size:15px;
        border:1px solid #EAEAEA;
    }

    .descricao{
        margin: 5px 0 0 0;
        min-height:60%;
        min-width:100%;
        max-height:60%;
        max-width:100%;
        border-radius:2px;
        border:1px solid #EAEAEA;
    }
    .campo{
        height:62vh;
        width:100%;
        position:relative;
        margin: 20px 0 0 0;
        background-image: linear-gradient(to bottom, #B03B7C, #90327E, #732B80);
        border-radius:2px;
    }
    .posicoes{
        width: 100%;
        height: 100%;
    }
    .estiloSalvar{
       display:flex;
       align-items:center;
       justify-content:center;
       margin-top:20px;
       color:#F0E4EE;
    }
    .botaoSalvar{
        cursor:pointer;
        padding:5px 50% 5px 50%;
        border-radius:2px;
        text-align:center;
        text-decoration:none;
        background-image: linear-gradient(to bottom, #B03B7C, #90327E, #732B80);
        color:#F0E4EE;
    }
    .linhaDoCampo{
        height:1px;
        width:100%;
        position:absolute;
        top:50%;
        background-color:white;
    }
    .bola{
        height:100px;
        width:100px;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        border-radius:50%;
        border:1px solid white;
    }
    --Padding: 17px;
    .bolasAtacante{
        padding:var(--Padding);
        display:flex;
        justify-content:space-between;
    }
    .bolasArtilheiro{
        padding:var(--Padding);
        display:flex;
        justify-content:space-between;
    }
    .bolasMeia{
        padding:var(--Padding);
        display:flex;
        justify-content: space-between;
    }
    .bolasVolante{
        padding:var(--Padding);
        display:flex;
        justify-content: space-between;
    }
    .bolaZagueiro{
        padding:var(--Padding);
        display:flex;
        justify-content: center;
    }
    .bolaJogador{
        cursor:pointer;
        height: 60px;
        width: 60px;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        font-size:30px;
        color:white;
        border-radius:50%;
        background-color: rgba(255, 255, 255, 0.3);
        transition:.2s;
    }
    .bordaBola{
        height:110%;
        width:110%;
        position:absolute;
        border-radius:50%;
        border:1px dashed white;
    }
    .opcaoTime{
        height:25px;
        width: 100px;
        margin: 0 0 0 15px;
        border: 1px solid #ECECEC;
    }
    .titulo{ 
        padding:25px;
        color:#633D93;
    }
    .tags{
        margin:19px 0 15px 0;
        min-width:100%;
        min-height:30%;
        max-width:100%;
        max-height:30%;
        border-radius:2px;
        font-size:15px;
        border:1px solid #EAEAEA;
    }
    .buscarJogador{
        margin:5px 0 15px 0;
        width:100%;
        height:25px;
        border-radius:2px;
        font-size:15px;
        border:1px solid #EAEAEA;
    }
    
    .nomeJogador span:nth-child(1){
        margin-right:10px;
    }
    .nomeJogador span:nth-child(2){
        color:red;
    }
    .idadeJogador{ 
        position:absolute;
        right:12%;
        margin:15px 0 12px 0;
    }
    .idadeJogador span:nth-child(1){ 
        margin-right:10px;
    }
    .idadeJogador span:nth-child(2){ 
        color:red;
    }
    .paisJogador{
        margin-top:5px;
    }
    .paisJogador span:nth-child(1){
       margin-right:10px;
    }
    .paisJogador span:nth-child(2){
       color:red
    }
    .enviarCampo{
        margin: 20px 0 0 0;
        width:100%;
        height:35px;
        border-radius:2px;
        color:#F6EFF5;
        transition:.3s;
        border: 1px solid #00000000;
        background-color:#8A317E;
    }
    .jogadores{
        height:60px;
        width: 100%;
        color: black;
        margin:10px 0 5px 0;
        padding:5px;
        font-size:15px;
        border-radius:2px;
        transition:.3s;
        background-image: linear-gradient(to bottom, #FDFDFD, #F0F0F0, #E6E6E6);
        border: 1px solid #EFEFEF;
    }
    .jogador{
        position:relative;
        display:flex;
        align-items:center;
    }    
    .enviarCampo:hover{
        cursor:pointer;
        border: 1px solid #8A317E;
    }
    .radioBt{
        margin:15px 10px 10px 15px;
    }
    .tituloTabela{
        color:black;
        font-weight:bold;
    }

    .tituloCadastro{
        margin-top:50px;
        font-size:25px;
        display:flex;
        justify-content:center;
        font:bold;
        color:#A0A0A0;
    }
    .tituloCadastro1{
        margin-top:50px;
        font-size:25px;
        display:flex;
        justify-content:center;
        font:bold;
        color:#A0A0A0;
    }

  @media (max-width:985px){
    .campo{
        height: 90%;
    }
    .idadeJogador{
        margin: 45px 50px 0px 0px;
    }
  }
  @media (max-width:870px){
    .campo{
          height:70%;
      }
    .bolaJogador{
        height: 20%;
        width: 20%;
      }
    .idadeJogador{
        margin: 35px 0 0 0;
      }
  }
  @media (max-width: 730px){
    .idadeJogador{
        margin: 1px 5px 0 0;
        }
  }
  @media (max-width:645px){
      .top{
        height: 670px;
        display:flex;
        flex-direction:column;
      }
      .meio{
        display:flex;
        flex-direction:column-reverse;
      }
      .tituloCadastro{
        margin-bottom: 15px;
      }
      .tituloCadastro1{
        margin-top: 5px;
        margin-bottom: 30px;
      }
      .tabela1{
        width: 75%;
      }
      .tabela2{
        width: 75%;
        margin: 0 0 70px 0;
      }
      .tabela3{
        width: 75%;
        margin-top: 30px;
      }
      .tabela4{
        width: 75%;
      }
      .campo{
        height: 80%;
      }
      .bolaJogador{
        width: 15%;
      }
      .idadeJogador{
        margin: 0 45px 0 0;
      }
  }
  @media (max-width:460px){
      .tabela1{
        width: 90%;
      }
      .tabela2{
        width: 90%;
      }
      .tituloCadastro1{
        margin-top: 45px;
      }
      .tabela3{
          width:90%;
      }
      .tabela4{
          width:90%;
      }
      .idadeJogador{
        margin: 0 20px 0 0;
      }
      .campo{
        height: 65%;
      }
      .cadastro{
        margin:0px 0px 0px 20px;
      }
  }

`;
