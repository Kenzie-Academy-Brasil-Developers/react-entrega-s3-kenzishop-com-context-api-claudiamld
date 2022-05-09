import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: #eae2b7;
    box-shadow: 5px 5px 15px 5px #A6A6A6;
    h1{
        margin-left: 60px;
    }
    button{
        cursor: pointer;
        background-color: #eae2b7;
        border: none;
        margin-right: 80px;
        font-size: 16px;
        font-weight: bold;
        :hover{
            color: #A6A6A6;
        }
    }
`