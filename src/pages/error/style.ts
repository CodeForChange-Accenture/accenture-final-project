
import styled from "styled-components";


export const ErrorStyle = styled.div`
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
    text-decoration:none;

    svg#Triangle{
        margin:0% 50%; 
    }

    a{
        text-decoration:none;
    }  

    h3{
        text-align: center;
        color: #8C52E5;
        margin: 30px 0px;
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