import styled from "styled-components";

export const Container = styled.div`
  background-color: #8C52E5;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 11%;
  justify-content: space-between;

  h2{
    color: #FFFFFF;
    font-size: 42px;
    line-height: 49px;
    padding-bottom: 36px;
  }

  p{
    color: #FFFFFF;
    font-size: 23px;
    line-height: 27px;
    max-width: 420px;
  }
  
  .sectionRight{
    display: flex;

    p{
      color: #68DE5A;
      font-size: 186px;
      line-height: 218px;
    }

  }
  @media screen and (max-width: 1024px){
    padding: 40;
    flex-direction: column;    
    justify-content: center;
    
    .sectionRight{
      p{
        font-size: 150px; 
      }
    }
  }
 `