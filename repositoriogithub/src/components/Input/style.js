import styled from "styled-components"

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px;

    input {
        background: transparent;
        border: 0;
        width: 100%;
        height: 62px;
        padding: 0 20px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.784);
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: rgb;
    }
`
