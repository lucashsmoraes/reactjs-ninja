import React from 'react'
import Header from './markdown-editor.header'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
    <section className='editor'>
        <Header {...props} />
        <Files />
        <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />  
        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
        {/* {value} */}
    </section>
)

export default MarkdownEditor