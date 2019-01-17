import React from 'react'
import Header from './markdown-editor.header'

const MarkdownEditor = ({ value, handleChange, getMarkup, isSaving }) => (
    <section className='editor'>
        <Header isSaving={isSaving} />
        <textarea name='textarea' value={value} onChange={handleChange} autoFocus />  
        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
        {/* {value} */}
    </section>
)

export default MarkdownEditor