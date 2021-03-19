import Styled from 'styled-components';

export const Container = Styled.div`
    
    .header{
        display:flex;
        position:relative;
        justify-content:space-between;
        padding: 16px;
        width: 100vw;
        margin:0 ;
        z-index:5;
        top: 0px;
        left:0px;
        background-image: linear-gradient(to right, #C00E4F, #AA155C, #8A206E);
    }
    .logo{
        color:white;
        font-size:25px;
    }
    .usuario{
        color:#E9D4E3;
        margin-right:50px;
        font-size:23px
       
    }
    @media (max-width:460px){
        .usuario{
            margin: 0 20px 0 25px;
            }
    }
`;