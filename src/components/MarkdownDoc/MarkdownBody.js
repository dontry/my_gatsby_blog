import React from 'react'

const MarkdownBody = ({content}) => (
    <div dangerouslySetInnerHTML={{__html: content}} />
)

export default MarkdownBody;