import React from 'react'

const SaveMessage = ({ isSaving }) => (
    isSaving !== null && isSaving !== undefined && (
        <p className='save-message'>
            {isSaving ? 'Salvando...' : 'Salvo!'}
        </p>
    )
)

export default SaveMessage