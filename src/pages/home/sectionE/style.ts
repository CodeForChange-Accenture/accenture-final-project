import styled from "styled-components";

export const Container = styled.div`
  background-color: #EAEAEA;
  min-height: 100vh;
  display: flex;
  padding: 0 11%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .sectionLeft {
    
    h2{
      max-width: 350px;
      color: #000000;
      font-size: 42px;
      line-height: 49px;
      margin-bottom: 15px;
    }

    p{
      max-width: 420px;
      color: #000000;
      font-weight: 300;
      font-size: 14px;
      line-height: 30px;
    } 

  }

  .sectionRight {
    max-width: 440px;
  }
  @media screen and (max-width: 1024px){
    flex-direction: column;
  }
  `