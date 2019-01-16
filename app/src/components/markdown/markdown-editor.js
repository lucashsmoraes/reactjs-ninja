import React from 'react'

const MarkdownEditor = ({value, count,handleChange}) => (
    <div className='editor'>
        <textarea name='textarea' value={value} onChange={handleChange} />
        <div className='view'>
            {value}
            <div><h2>Count caracteres: {count}</h2></div>
        </div>
        
    </div>
)

export default MarkdownEditor