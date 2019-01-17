import React from 'react'
import Header from './markdown-editor.header'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
    <section className='editor'>
        <Header {...props} />
        <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />  
        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
        {/* {value} */}
    </section>
)

export default MarkdownEditor