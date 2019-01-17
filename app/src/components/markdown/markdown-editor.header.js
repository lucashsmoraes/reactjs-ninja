import React from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove }) => (
    <header className='editor-header'>
        <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
        <button className='button-remove' onClick={handleRemove}>Remover</button>
    </header>
    
)

export default MarkdownEditorHeader