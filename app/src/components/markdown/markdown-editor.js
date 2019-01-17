import React from 'react'
import Header from './markdown-editor.header'

const MarkdownEditor = ({ value, isSaving, handleChange, getMarkup }) => (
    <section className='editor'>
        <Header isSaving={isSaving} />
        <textarea value={value} onChange={handleChange} autoFocus />  
        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
        {/* {value} */}
    </section>
)

export default MarkdownEditor