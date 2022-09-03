import styled from "styled-components";

export const InputStyle = styled.input`
    width: ${({width}) => width + '%'};
    padding: 0.5rem;
    margin-top: ${({marginTop}) => marginTop + '%'};
    border: ${({borderColor}) => '2px solid' + borderColor};
    &:active {
        border: ${({borderColor}) => '2px solid ' + borderColor};
    }
`;