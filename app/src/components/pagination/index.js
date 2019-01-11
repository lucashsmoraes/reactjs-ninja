import React from 'react'
import pagination from '../../utils/pagination'
import Page from './page'

const Pagination = ({total, activePage, pageLink, onClick}) => (
    <ul>
        {pagination({total, activePage}).map((page, index) => (
            <li key={index} style={activePage === page ? {color: 'red'} : null }> 
             <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick}/> 
            </li>
        ))}
    </ul>
)

Pagination.defaultProps = {
    pageLink: '',
    activePage: 1
}



export default Pagination