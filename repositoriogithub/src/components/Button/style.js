import styled from "styled-components"

export const ButtonContainer = styled.button`
    background-color: #fafafa;
    border: 1px solid transparent;
    border-radius: 20px;
    height: 35px;
    width: 80%;
    margin: 20px;
    cursor: pointer;
    font-weight: bold;
    
    &: hover {
        background-color: green;
        outline: none;
    }
`    