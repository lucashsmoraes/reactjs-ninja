import React from 'react'
import pagination from '../../utils/pagination'
import Page from './page'

const Pagination = ({total, activePage, pageLink, onClick}) => (
    <ul>
        {pagination({total, activePage}).map((page, index) => (
            <li key={index}> 
             <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick}/> 
            </li>
        ))}
    </ul>
)

Pagination.defaultProps = {
    pageLink: ''
}



export default Pagination