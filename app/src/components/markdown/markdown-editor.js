import React from 'react'
import Header from './markdown-editor.header'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenfile, ...props }) => (
    <section className='editor'>
        <Header {...props} handleChange={handleChange} />
        <Files files={files} handleOpenfile={handleOpenfile} />
        <textarea value={value} onChange={handleChange('value')} autoFocus ref={textareaRef} />  
        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
        {/* {value} */}
    </section>
)

export default MarkdownEditor