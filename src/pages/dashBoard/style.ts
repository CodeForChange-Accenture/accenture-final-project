import styled from "styled-components";

export const DashBoardPage = styled.div`
background:#8C52E5;
    .side-bar{
        position: fixed;
        overflow-y:auto;
        overflow-x:hidden;
        top: 0;
        left: 0;
        background: #63dc3f;
        height: 100vh;
        width: 10em;
        img{
            margin: 15px;
        }
        div{
            cursor: pointer;
            color: white;
            background: #8C52E5;
            border-radius: 10px;
            height: 6em;
            width: 6em;
            padding: 10px;
            margin: 20px 35px;
            p{
                font-size: 14px;
                font-weight: bold;
                text-align:left;
                margin-top: 25px;
            }
        }
    }
    .main{        
        background:#8C52E5;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 10em;
        div{
            margin: 50px 150px;
            p{
                color:white;
            }
        }
        .main-board{
            background:#8C52E5;
            margin: 0;
            display: flex;
            flex-wrap:wrap;
            .balance-infos{                
                border-radius: 10px;
                display: flex;
                flex-wrap:wrap;
                min-height: 200px;
                background: white;
            }
            .last-sent{
                padding:50px;
                border-radius: 10px;     
                background: white;   
                min-height: 400px;
                width: 100%;
            }
        }
    }
` 