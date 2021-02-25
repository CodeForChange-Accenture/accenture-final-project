import styled from "styled-components";

export const Container = styled.div`
  background-color: #EAEAEA;
  min-height: 100vh;
  padding: 56px;
  display: flex;
  flex-direction: row;

  section {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
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
    padding-left: 7%;
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
  @media screen and (max-width: 1024px){
    flex-direction: column;
    padding: 24px;
    margin-left: 0;

    section {
      padding-top: 32px;
      padding-bottom: 24px;
      justify-content: center;
      align-items: center;
      

      h2{
        font-size: 24px;
        line-height: 30px;
      }  

      p{
        font-size: 16px;
        line-height: 30px;
        margin: 0;
      }

    .sectionLeft{
      margin: 0;

      p{
      margin-left: 0;
      }
    }

    .sectionRight{
      padding-left: 0;

      img{
        width: 280px;
      }
    }
  }
}
`
