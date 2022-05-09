import styled from 'styled-components'

export const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    max-width: 250px;
    :hover{
        box-shadow: 5px 5px 15px 5px #7A7A7A;
    }
    img{
        max-width: 200px;
        min-height: 300px;
        max-height: 300px;
    }
    button{
        height: 35px;
        width: 190px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        background-color: #eae2b7;
        border-radius: 5px;
        box-shadow: 3px 3px 8px 3px #A6A6A6;
        margin-bottom: 10px;
        :hover{
            background-color: #ffc300;
            color: #343a40;
        }
    }
`