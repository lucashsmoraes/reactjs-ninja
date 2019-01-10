import React from 'react'
import './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

// Search.defaultProps = {
//   handleSearch: 'lucashsmoraes'
// }

export default Search