import Styled from 'styled-components'

export const Container = Styled.div`
  background-color:#A5A5F5A5;

  height:100vh;
  width:100vw;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  input{
    padding:10px;
    font-size:20px;
    outline:none;
  }
  textarea{
    height:100px;
    width:250px;
    padding:10px;
    margin-top:10px;
    font-size:15px;
    outline:none;
  }
  button{
    height:30px;
    width:90px;
    margin:10px;
    border-radius:5px;
    font-size:20px;
    cursor:pointer;
    color:white;
    outline:none;
    background-color:#B03B7C;
  }
  span{
    animation: 1s linear; 
  }
  @keyframe fadeIn {

  }
`;