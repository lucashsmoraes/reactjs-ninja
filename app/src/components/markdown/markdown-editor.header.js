import React from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
    <header className='editor-header'>
        <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
        <button className='button-create' onClick={handleCreate}>Criar novo</button>
        <button className='button-remove' onClick={handleRemove}>Remover</button>
    </header>
    
)

export default MarkdownEditorHeader