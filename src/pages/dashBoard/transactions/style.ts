import styled from "styled-components";

export const DashBoardTransaction = styled.div`
background:white;
height: 300px;
border-radius: 10px;
padding:20px;
margin: 40px 145px;
overflow:auto;
    p{
    color:black;
    }
    .transaction-main{
        display:flex;
        justify-content:space-around;
        margin:-10px 0;
        padding:0;
        flex-wrap:wrap;
        form{
            margin: 10px;
            width: 30vw;
            input{
                background:transparent;
                display:block;
                border: none;
                font-size: 20px;
                font-weight: 500;
                text-align:left;
                width: 100%;
                padding: 20px 0 0 0;
                border-bottom: 2px solid #9B9B9B;
            }
            button{
                cursor: pointer;
                border: none;
                border-radius: 30px;
                padding: 5px 10px;
                width: 350px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                border: 1px solid #8C52E5;
                margin: 15px 0 0 0;
                    &:hover{
                        background: #68DE5A;
                    }
            }
            input[type=date]{
                color: #333333;
                text-transform: uppercase;
                font-style:italic;
            } 
        }
        .transaction-credit{
            input{
                padding: 35px 0 0 0;
            }
        }
    }
    @media screen and (max-width: 858px) {
    background:white;
    height: 300px;
    border-radius: 10px;
    padding:10px;
    margin: 20px;
    overflow:auto;
    font-size: 10px;
    width: 90%;
        .transaction-main{
            form{
                input{
                    background:transparent;
                    font-size: 10px;
                    border-bottom: 2px solid #9B9B9B;
                }
                button{
                    width: 150px;
                    text-align: left;
                    font-size: 11px;
                }
            }
        }
    }
`