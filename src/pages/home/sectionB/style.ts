import styled, {css} from "styled-components";

export const Container = styled.div`
  background-color: #EAEAEA;
  min-height: 100vh;
  padding: 56px;
  display: flex;
  flex-direction: row;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 70px;
    
    h2{
      font-size: 34px;
      line-height: 40px;
    }

    p{
      font-size: 21px;
      line-height: 25px;
      max-width: 270px;
    }

  }

  .sectionLeft{
    background: #000000;

    h2{
      color: #68DE5A;
      text-align: center;
    }

    p{
      color: #68DE5A;
      margin-left: 100px;
    }

  }

  .sectionRight{
    background: #F8F8F8;
    padding-left: 100px;
    display: flex;

    h2{
      color: #1D1D1D;
      margin-bottom: 25px;
      
    }

    img{
      width: 340px;
      margin-bottom: 28px;
    }
    p{
      color: #1D1D1D;
    }

  }
`
