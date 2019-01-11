import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from './index';

const stories = storiesOf('Pagination', module)
    
stories.add('without props', () => (
    <Pagination />
))

stories.add('with total 5 and activePage 1', () => (
    <Pagination total={5} activePage={1} />
))

stories.add('with total 7 and activePage 5', () => (
    <Pagination total={7} activePage={5} />
))

stories.add('with total 8 and activePage 8', () => (
    <Pagination total={8} activePage={8} />
))

stories.add('with total 9, activePage 4 and page Link', () => (
    <Pagination total={9} activePage={4} pageLink='http://mypage.com/page/%page%' />
))

stories.add('with callback', () => (
    <Pagination total={15} activePage={8} pageLink='http://mypage.com/page/%page%' onClick={(page) => {
        window.alert(page)    
    }} />
))