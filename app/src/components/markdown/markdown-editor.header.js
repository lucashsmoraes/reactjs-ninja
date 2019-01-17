import React from 'react'

const MarkdownEditorHeader = ({ isSaving }) => (
    <header className='editor-header'>
        <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    </header>
)

export default MarkdownEditorHeader