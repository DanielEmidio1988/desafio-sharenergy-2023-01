import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #BB2649;
    color: #fff;
    height: 20vh;
    width: 100%;
`

export const MainMenu = styled.div`
    display: flex;
    height: 30%;
    padding-top: 2vh;
    
    div:first-child{
        width: 40%;
        padding-left: 4vw;

    }
    
    div:last-child{
        width:60%;
        

        span{
            height: 100%;
            padding-right: 2vw;
        }

        span:hover{    
            cursor:pointer;
            color: #000;
        }

    }

    img{
        border-radius: 50%;
        width: 50px;
    }
    
    `

export const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    height: 70%;

    span{
        color: #F06091;
    }
`