import styled, { css } from 'styled-components';

const googleButton = css`
    background-color: #4285f4;
    color:  white;
    border: none;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const invertButton = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const regularButton = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;


const getStyle = props => {
    if( props.isGoogleSignIn ){
        return googleButton;
    }

    return props.inverted ? invertButton : regularButton;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getStyle}
`