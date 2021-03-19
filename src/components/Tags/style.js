import Styled from 'styled-components';

export const Container = Styled.div`
  .dropdown-content {
    position: absolute;
    margin-top:70px;
    background-color: #f1f1f1;
    width:auto;
    max-width:500px;
    border-radius:10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: -2;
    opacity:0;
    overflow: hidden;
    transition:.3s;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .tag:hover .dropdown-content {
    opacity:100%;
    z-index:1;
  }

  .tags-input {
    margin-top:3%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 48px;
    max-width: 100%;
    padding: 0 8px;
    border: 1px solid #EAEAEA;
    border-radius: 6px;
    &:focus-within {
      border: 1px solid #B03B7C;
    }
    input {
      flex: 1;
      border: none;
      height: 46px;
      font-size: 14px;
      padding: 4px 0 0 0;
      width:100%;
      &:focus {
        outline: transparent;
      }
    }
  }

  #tags {
    max-width:100%;
    max-height:130px;
    overflow-y:auto;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    border-radius:10px;
    border:1px solid #EAEAEA;
    margin: 8px 0 0 0;
  }

  .tag {
    width: auto;
    max-width:60%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: #B03B7C;
    .tag-title {
      margin-top: 3px;
      max-width:90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tag-close-icon {
      display: block;
      min-width: 16px;
      min-height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 14px;
      margin-left: 8px;
      color: #B03B7C;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
    }
  }
`;
