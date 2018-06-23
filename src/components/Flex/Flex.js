import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    flex-grow: ${props => props.grow || 0};
    flex-shrink: ${props => props.shrink || 1};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
`

export default Flex;