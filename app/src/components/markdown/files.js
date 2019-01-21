import React from 'react'


const Files = ({ files, handleOpenfile}) => (
    <div className='files-list-container'>
        <h2>Files</h2>
        <ul>
            {Object.keys(files).map((fileId) => (
                <li key={fileId}>
                <button onClick={handleOpenfile(fileId)}>{files[fileId].title}</button>
            </li>
            ))}            
        </ul>
    </div>

)

export default Files