import React from 'react'
import Button from '../button'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
    <header className='editor-header'>
        {isSaving !== null && (
            <p className='save-message'>
                {isSaving ? 'Salvando...' : 'Salvo!'}
            </p>
        )}
        <Button onClick={handleCreate} kind='success'>
            Criar Novo!
        </Button>
        <Button onClick={handleRemove} kind='danger'>
            Remove!
        </Button>

    </header>

)

export default MarkdownEditorHeader