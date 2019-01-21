import React from 'react'
import Button from '../button'
import SaveMessage from '../saveMessage/saveMessage'

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate }) => (
    <header className='editor-header'>
        <input type="text" value={title} />
        <SaveMessage isSaving={isSaving} />
        <Button onClick={handleCreate} kind='success'>
            Criar Novo!
        </Button>
        <Button onClick={handleRemove} kind='danger'>
            Remove!
        </Button>

    </header>

)

export default MarkdownEditorHeader