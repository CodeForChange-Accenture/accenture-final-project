import styled from "styled-components";

export const DashBoardPlan = styled.div`
background:white;
height: 300px;
border-radius: 10px;
padding: 30px;
overflow:auto;
    div{
    margin: 0;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;
    p{
    color:black !important;
    }
    section{
        min-width: 100%;
        border: 2px solid #9B9B9B;
        border-radius:10px;
        padding: 10px;
        margin: 8px 8px;
    }
}
`