import React from 'react'

const Pagination = ({total, activePage}) => {
   return Array.from({length: total}, (_, i) => i + 1)
}

export default Pagination