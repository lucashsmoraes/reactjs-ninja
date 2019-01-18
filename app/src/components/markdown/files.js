import React from 'react'

const files = {
    '123': '# Título 1',
    '234': '# Título 2'
}

const handleOpenfile = (fileId) => () =>  {
    console.log(fileId)
}

const Files = () => (
    <div className='files-list-container'>
        <h2>Files</h2>
        <ul>
            {Object.keys(files).map((fileId) => (
                <li>
                <button onClick={handleOpenfile(fileId)}>{fileId}</button>
            </li>
            ))}            
        </ul>
    </div>

)

export default Files