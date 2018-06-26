import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished';

const Button = styled.button`
    display: inline-block;
    height: 38px;
    padding: 0 30px;
    color: ${props => props.theme.colors.primaryBlue};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.primaryBlue};
    cursor: pointer;
    box-sizing: border-box;
    &:hover, &:focus {
        color: ${props => lighten(0.2, props.theme.colors.primaryBlue)};
        border-color: ${props => lighten(0.2, props.theme.colors.primaryBlue)};
    }
`

export default Button;

