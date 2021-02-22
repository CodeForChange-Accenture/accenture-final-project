import styled from "styled-components";
import Rect from "../../../img/Rectangle-8.png";

export const Container = styled.div`
  background-image: url(${Rect});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 11%;

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
    max-width: 440px;
  }
`