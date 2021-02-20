import styled from "styled-components";

export const Container = styled.div`
    background-color: #8C52E5;
    height: 100%;
    min-height: 100vh;
`

export const FormLogin = styled.div`
background-color: #8C52E5;
background-repeat: no-repeat;
background-position: bottom;
min-height:100vh;
    img{
        margin: 40px;
    }
form{
    background: #FBFBFB;
    border-radius: 8px;
    padding: 24px 40px 40px 40px;
    margin: auto;
    max-width: 25%;
    
    h3{
        text-align: center;
        margin: 25px 0px;
    }

    p{
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        margin: 15px 0px;
        color: #8C52E5;
    }
    a{
        text-decoration: none;
        
    }

    input{
        width: 100%;
        font-size: 12px;
        margin-bottom: 32px;
        color: #878686;
        background: transparent;
        border: none;
        border-bottom: 1px solid #878686;
        padding-bottom: 8px;
        outline: none;
    }
    button{
        font-family: Roboto;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        background: #68DE5A;
        border-radius: 20px;
        border: none;
        padding: 12px 28px;
        width: 100%;
        display:flex;
        justify-content: space-between;
        cursor: pointer;
        outline: none;
        transition: 0.5s;
            :hover{
                transition: 0.5s;
                background: #4ea543;
            }
        }
        
    }

`