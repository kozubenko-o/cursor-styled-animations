import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const SingStyle = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    background: black;
    padding-bottom: 1.5rem;
`;

export const FlexSpaceBetween = styled.div`
    width: 95%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: unset;
    margin-top: 0.5rem;
`;

export const FlexRight = styled.div`
    width: 90%;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
`;

export const URL = styled(Link)`
    font-size: 11px;
    color: #c0d8ff;
    text-decoration: none;
    &:after {
       color: #256ce1; 
    }
`;

export const CheckboxPosition = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: unset;
    margin-top: 15px;
`;

export const ImgLock = styled.div`
    background: red;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5px;
    & > img {
        width: 25px;
        height: 25px
    }
`;

export const Button = styled.button`
    
    width: 95%;
    padding: 0.5rem;
    margin-top: 5%;
    border-radius: 4px;
    background: #256ce1;
    color #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in out;
        background: #fff;
        color: #010606;
    }
`;

export const Message = styled.div`
    width: 95%;
    padding: 0.5rem;
    color: ${({color}) => color};
    text-align: center;
    top: 25px;
    height: 25px;
`;