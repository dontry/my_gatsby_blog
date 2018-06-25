import React from 'react'

const MarkdownBody = ({html}) => (
    <div dangerouslySetInnerHTML={{__html: html}} />
)

export default MarkdownBody;