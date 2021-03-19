import Styled from 'styled-components';


export const Container = Styled.div`
    .blocos{
        display:flex;
        justify-content:center;
        margin: 50px 25px 50px 25px;
        color: #654094;
        font-size:15px;
    }
    .contemBloco2{
        height:800px;
        width:50%;
    }
    .bloco1{
        height:80vh;
        width:47%;
        background-color: white;
        border-radius:15px;
    }
    .bloco2{
        height:400px;
        width:92%;
        margin-left:55px;
        padding:10px 10px 10px 0;
        background-color: white;
        display:flex;
        flex-direction:column;
        border-radius:15px;
        box-shadow:0 0 20px #00000019;
    }
    .bloco3{
        position:relative;
        height: 275px;
        width: 94%;
        margin: 10px 10px 0 54px;
        display:flex;
        border-radius:15px;
        background-image: linear-gradient(to bottom,#BA3D7B,#933781,#642E86)
    }
    .bloco3bg{
        opacity:30%;
    }
    .bola{
        height:60px;
        width:60px;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        border-radius:50%;
        border:1px solid white;
    }
    .linhaDoCampo{
        height:100%;
        width:1px;
        position:absolute;
        left:50%;
        background-color:white;
    }
    .contemNomeDescricao{
        width:100%;
        height:50px;
    }
    .timeTituloNome{
        margin: 25px 0 0 8px;
    }
    .TituloTabela2{
        margin:0 65px 0 20px;
        color:black;
        font-weight:bold;
    }
    .TituloTabela3{
        margin: 0 0 0 50px;
        color:black;
        font-weight:bold;
    }
    .linhaDoTime{
        height:35px;
        width:1px;
        margin:-22px 0 0 155px;
        background-color:#E6E6E6;
    }
    .time1{
        width:97%;
        height:45px;;
        margin:0 0 0 10px;
        color:#4F4F4F;
        background:white;
        font-weight:bold;
        border-radius:3px;
        display:flex;
    }
    .linhaTime{
        height:1px;
        background-color:#F2F2F2;
    }
    .timeDescricao{
        margin:-17px 0 0 154px;
    }
    .timeNome{
        margin:13px 0 0 0;
    }
    .tabelaJogador{
        width:50%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    .ordemJogador{
        text-align:center;
        font-size:25px;
        color:white;
    }
    .fotoJogador{
        height:100px;
        width:100px;
        border-radius:50%;
        background:white;
        border:3px solid #8A0A78;
    }
    .HeaderBloco1{
        height:100px;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }  
    .Titulo{
        margin: 20px;
    }
    .adicionar{
        height:55px;
        width:55px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        border-radius:10px;
        margin-right:5%;
        font-size:40px;
        color:white;
        background-image: linear-gradient(to bottom, #AA155C, #8A206E);
        box-shadow: 0 0 20px #AA155C00;
        transition:.3s;
    }
    .adicionar:hover{
        height:60px;
        width:60px;
        cursor:pointer;
        box-shadow: 0 10px 20px #AA155C69;
    }
    .linha{
        height:2px;
        background-color:#EEEEEE;
    }


    .tabelas{
        display:flex;
    }
    .Tabela{
        height:95%;
        width:50%;
        margin-top:20px;
        display:flex;
        flex-direction:column;
    }
    .CorpoTabela{
        height:auto;
        width:93%;
        display:flex;
        align-items:center;
        flex-direction:column;
        margin: 10px 15px 15px 13px;
        background:#E9E3E8;
        position:relative;
        float: right;
        border-radius:10px;
    }
    input[type="radio"] {
      display: none;
    }
    #Tb11:checked ~ .botaoTb11{
      border: 1px solid #C00E4F;
    }
    #Tb12:checked ~ .botaoTb12{
      border: 1px solid #C00E4F;
    }
    #Tb13:checked ~ .botaoTb13{
      border: 1px solid #C00E4F;
    }
    #Tb14:checked ~ .botaoTb14{
      border: 1px solid #C00E4F;
    }
    #Tb15:checked ~ .botaoTb15{
      border: 1px solid #C00E4F;
    }

    #Tb21:checked ~ .botaoTb21{
      border: 1px solid #C00E4F;
    }
    #Tb22:checked ~ .botaoTb22{
      border: 1px solid #C00E4F;
    }
    #Tb23:checked ~ .botaoTb23{
      border: 1px solid #C00E4F;
    }
    #Tb24:checked ~ .botaoTb24{
      border: 1px solid #C00E4F;
    }
    #Tb25:checked ~ .botaoTb25{
      border: 1px solid #C00E4F;
    }



    .txtBotaoTb1{
        position:absolute;
        left:5%;
    }
    .numeroBotaoTb1{
        position:absolute;
        right:5%;
        font-weight:bold;
    }
    .txtBotaoTb2{
        position:absolute;
        left:5%;
    }
    .numeroBotaoTb2{
        position:absolute;
        right:5%;
        font-weight:bold;
    }


    --AlturaBotao: 44px;
    --LarguraBotao: 97%;
    --CorTexto: black;
    .botaoTb11{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        margin-top:5px;
        font-size:15px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb11:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }


    .botaoTb12{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb12:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }



    .botaoTb13{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb13:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }
    
    .botaoTb14{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb14:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }

    .botaoTb15{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        margin-bottom:5px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb15:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }


    .botaoTb21{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        margin-top:5px;
        font-size:15px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb21:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }


    .botaoTb22{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb22:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }



    .botaoTb23{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb23:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }
    
    .botaoTb24{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb24:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }

    .botaoTb25{
        height: var(--AlturaBotao);
        width: var(--LarguraBotao);
        color: var(--CorTexto);
        margin:2px;
        margin-bottom:5px;
        display:flex;
        align-items:center;
        border-radius:5px;
        transition:.3s;
        background-color:white;
        border: 1px solid #00000000;
    }
    .botaoTb25:hover{
        cursor:pointer;
        border: 1px solid #C00E4F;
    }


    .h3{
        font-size:25px;
        position:relative;
        display:flex;
    }
    .TituloTabela{
        margin-left:5%;
        color:black;
        font-weight:bold;
    }
    @media (max-width:1055px){
        .ordemJogador{
            font-size:20px;
        }
        .fotoJogador{
            height:70px;
            width:70px;
        }
        .bloco3{
            height: 23%;
        }
    }
    @media (max-width:925px){
        .botaoTb11{
            position:relative;
            flex-direction:column;
        }
        .botaoTb12{
            position:relative;
            flex-direction:column;
        }
        .botaoTb13{
            position:relative;
            flex-direction:column
        }
        .botaoTb14{
            position:relative;
            flex-direction:column;
        }
        .botaoTb15{
            position:relative;
            flex-direction:column;
        }
        .botaoTb21{
            position:relative;
            flex-direction:column;
        }
        .botaoTb22{
            position:relative;
            flex-direction:column;
        }
        .botaoTb23{
            position:relative;
            flex-direction:column;
        }
        .botaoTb24{
            position:relative;
            flex-direction:column;
        }
        .botaoTb25{
            position:relative;
            flex-direction:column;
        }
        .numeroBotaoTb1{
            position:absolute;
            left:5%;
            bottom:5%;
        }
        .numeroBotaoTb2{
            position:absolute;
            left:5%;
            bottom:5%;
        }
    }
    @media (max-width: 720px){
        .numeroBotaoTb1{
            display:none;
        }
        .numeroBotaoTb2{
            display:none;
        }
        .blocos{
            display:flex;
            align-items:center;
            flex-direction:column;
        }
        .bloco1{
            height: 65vh;
            width: 100%;
        }
        .bloco2{
            width:100%;
        }
        .contemBloco2{
            width: 98%;
            margin: 17px 116px 0 0;
        }
        .bloco3{
            height: 40%;
            margin: 15px 0px 0 63px;
            width: 100%;
        }
    }
    @media (max-width: 420px){
        .bloco3{
            height: 30%;
        }
    }

`;