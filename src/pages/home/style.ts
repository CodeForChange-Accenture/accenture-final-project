import styled from "styled-components";
import bgImage from "../../img/happy.png";

export const HomePage = styled.div`
    overflow-x:hidden;
    .home {
        background-color: #8C52E5;
        background-image: url(${bgImage});
        background-repeat: no-repeat;
        background-position: bottom;
        min-height:100vh;
    }

    .logo-gama{
        padding-top: 40px;
        padding-left: 40px;
        margin-bottom: 20px;
    }
    .middle-div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 80px;
        .access-div{
            flex: 0;
            color: white;
            font-size: 20px;
            h2{
                margin-bottom: 25px;
            }
            button{
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 250px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                border: 2px solid #fff; 
                font-size: 20px;
                font-weight: 300;
                display:flex;
                justify-content: space-between;
                align-items:center;

                transition: .4 ease-in;
                transition-property: background-color, color, border-color;

                &:hover{
                    background-color: transparent;
                    color: #fff;
                    border-color: #fff;
                }
            }
        }
        .signup-div{
            background: white;
            border-radius: 15px;
            padding: 20px;
            padding-top: 24px;
            flex: 0;
            min-width: 380px;
            
            div{
                padding: 0 20px;
            }
            form{
                padding: 20px;

                input{
                display:block;
                    border: none;
                    font-size: 14px;
                    line-height: 14px;
                    padding-bottom: 8px;
                    font-weight: 500;
                    text-align:left;
                    width: 100%;
                    margin-bottom: 25px;
                    border-bottom: 1px solid #666;
                }
            }
            
            h4{
                font-size: 25px;
            }

            button{
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 100%;
                text-align: left;
                transition: 0.5s;
                color: #fff;
                font-size: 14px;
                font-weight: 300;
                margin-top: 20px;
                display:flex;
                justify-content: space-between;
                align-items:center;
                background: #68DE5A;
                outline: none;
                transition: 0.5s;
                :hover{
                    transition: 0.5s;
                    background: #4ea543;
                }

        }
    }

    .form-error {
        font-size: 10px;
        color: red;
    }
}

@media screen and (max-width: 1024px){
    justify-content: center;
    padding-left: 0;
    .middle-div{
        flex-direction: column;
        justify-content: center;
        padding: 40px;
        margin: 0;

        .signup-div{
            min-width: auto;
            width: 100%;  
        }
    }
    .access-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 48px;
    }
}


`