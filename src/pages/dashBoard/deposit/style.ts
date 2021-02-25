import styled from "styled-components";

export const DashBoardDeposit = styled.div`
background:white;
height: 300px;
border-radius: 10px;
padding: 20px;
margin: 40px 145px;

    p{
    color:black !important;
    }
    div{
        margin:-10px 0;
        form{
                input{
                    display:block;
                    border: none;
                    font-size: 20px;
                    font-weight: 500;
                    text-align:left;
                    width: 100%;
                    margin: 25px 0 30px 0;
                    border-bottom: 2px solid #9B9B9B;
                }
                button{
                    cursor: pointer;
                    border: none;
                    border-radius: 30px;
                    padding: 5px 10px;
                    width: 200px;
                    text-align: left;
                    transition: 0.5s;
                    color: #8C52E5;
                    font-size: 20px;
                    font-weight: 300;
                    border: 1px solid #8C52E5;
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
    }
    @media screen and (max-width: 758px) {
        padding: 10px;
        margin: 20px;
        height: 180px;
        width: 86%;
            div{
                form{
                        input{
                            font-size: 10px;
                            font-weight: 500;
                            width: 90%;
                            margin: 12px 0 25px 0;
                        }
                        button{
                            padding: 5px 10px;
                            width: 130px;
                            font-size: 10px;
                            font-weight: 300;
                            border: 1px solid #8C52E5;
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
        }
    }
`