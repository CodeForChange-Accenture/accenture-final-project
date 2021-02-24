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
            margin: 0px 140px;
                .account, .credit{
                    display:flex;
                    text-align:left;
                    flex-direction:column;
                    justify-content:space-around;
                    padding:50px;
                    border-radius: 10px;
                    background: white;
                    margin:0px 4px;
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
            margin: 40px 145px;
            div{
                margin: 10px 0;
            }
            .historic{
                margin-top: 40px;
                display: flex;
                justify-content:space-between;
            }
        }
        .icon-center{
            display: flex;
            align-items: center;

            svg{
                margin-right: 8px;
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
    
    @media screen and (max-width: 758px) {
        .main-message {
            display:block;
            font-size: 10px;
            margin:5px 20px !important;
            p{
            margin-bottom: 20px;
            }
            div{
                svg{
                height: 30px;
                width: 30px;
                }
            }
        }
        .main-board{
        background:#8C52E5;
        margin: 0;
        display: block;
        label{
            color:#9B9B9B;
        }
        .balance-infos{
            margin: 20px;
                .account, .credit{
                    font-size: 10px;
                    margin:10px 4px;
                    width: 100%;
                }
            }
        }
        .last-sent{
            overflow:auto;
            margin: 20px;
            font-size: 8px;
            .date-ranges{
                input[type=date]{
                font-size: 7px;
                }
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
    @media screen and (max-width: 758px) {
        background: #63dc3f;
        width: 6em;
        img{
            margin: 0;
            width: 100%;
        }
        div{
            height: 3em;
            width: 3em;
            padding: 10px;
            margin: 20px;
            p{
                display:none;
            }
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
        .main-message{
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
        @media screen and (max-width: 758px) {
            left: 6em;
        }
`