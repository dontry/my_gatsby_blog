import React from 'react'
import styled from 'styled-components'

const Meta = styled.span`
    margin-right: 2rem;
`

const MarkdownMeta = ({meta}) => {
  const  {date, tags} = meta;
  return (
    <div>
        <Meta>{date}</Meta>
    </div>
  )
}

export default MarkdownMeta
