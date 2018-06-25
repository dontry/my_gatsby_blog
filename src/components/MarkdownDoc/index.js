import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Meta from './Meta'
import Body from './Body'
import { media } from '../../utils/theme';

const Wrapper = styled.div`
    min-height: 700px;
    ${media.lessThan("small")`
        min-height: 400px;
    `}
`

const MarkdownDoc = ({title, date, html, meta}) => (
    <Wrapper>
        <Title title={title} />
        <Meta meta={meta} />
        <Body html={html} />
    </Wrapper>
)

export default MarkdownDoc;