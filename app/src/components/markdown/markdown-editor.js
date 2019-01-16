import React from 'react'

const MarkdownEditor = ({value, handleChange, getMarkup}) => (
    <div className='editor'>
        <textarea name='textarea' value={value} onChange={handleChange} autoFocus />
        <div className='view' dangerouslySetInnerHTML={ getMarkup() } >
            {/* {value} */}
        </div>
        
    </div>
)

export default MarkdownEditor