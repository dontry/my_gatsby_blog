import React from 'react'
import styled from 'styled-components'
import Title from './MarkdownTitle'
import Meta from './MardownMeta'
import Body from './MarkdownBody'

const Wrapper = styled.div`
    min-height: 700px;
`

const MarkdownDoc = ({title, date, html, meta}) => (
    <Wrapper>
        <Title title={title} />
        <Meta meta={meta} />
        <Body content={html} />
    </Wrapper>
)

export default MarkdownDoc;