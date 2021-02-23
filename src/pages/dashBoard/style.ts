import styled from "styled-components";

export const DashBoardPage = styled.div`
background:#8C52E5;
    .main-board{
        background:#8C52E5;
        margin: 0;
        display: block;
        label{
            color:#9B9B9B;
        }
        .balance-infos{
            display: flex;
            justify-content:space-between;
            min-height: 250px;
            flex-wrap:wrap;
            border-radius: 10px;
            margin-left: 140px;
                .account, .credit{
                    display:flex;
                    text-align:left;
                    flex-direction:column;
                    justify-content:center;
                    padding:50px;
                    border-radius: 10px;
                    background: white;
                    margin: 8px;
                    width: 48%;
                    .account-balance, .credit-balance{
                        display: block;
                        margin: 40px 0;
                    }
                    .account-balance{
                        h2:nth-child(5){
                            color:#68DE5A;
                        }
                    }
                    .credit-balance{
                        h2:nth-child(2){
                            color:#1783E7;
                        }
                        h2:nth-child(5){
                            color:#68DE5A;
                        }
                    }
                }
            }
        }
        .last-sent{
            overflow:auto;
            padding:50px;
            border-radius: 10px;
            background: white;
            height: 500px;
            margin-top: -10px;
            overflow:auto;
            
            div{
                margin: 10px 0;
            }
            .historic{
                margin-top: 40px;
                display: flex;
                justify-content:space-between;
            }
        }
        
    }
    
    .main-message{
        display:flex;
        justify-content: space-between;
        align-items:center;
        div{
            margin: 0;
            svg{
                height: 50px;
                width: 50px;
                padding: 5px;
                border-radius: 100px;
                background:#68DE5A;
                color:#8C52E5;
            }
        }
    }
`

export const SideBar = styled.div`
        position: fixed;
        overflow-y:auto;
        overflow-x:hidden;
        top: 0;
        left: 0;
        z-index: 1;
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
    
`

export const Main = styled.div`
        background:#8C52E5;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 10em;
        overflow:auto;
        div{
            margin: 50px 150px;
            p{
                color:white;
            }
        }
        .eye-visible{
            display:flex;
            cursor:pointer;
            svg{
                margin-left: 15px;
            }
        }
        .date-ranges{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            flex-wrap:wrap;
            background:white;
            input[type=date]{
                margin-left: 10px;
                border: none;
                color: #333333;
                font-size: 15px;
                text-transform: uppercase;
                font-style:italic;
            }   
            .title-historic{
                display:flex;
                align-items:center;
                margin-right: auto;
            }
        }
`