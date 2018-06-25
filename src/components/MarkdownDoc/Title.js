import React from 'react';
import styled from 'styled-components'
import { media } from '../../utils/theme';

const Wrapper = styled.h1`
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #3a3a3a;
`

const MarkdownTitle = ({ title }) => <Wrapper>{title}</Wrapper>;

export default MarkdownTitle;
