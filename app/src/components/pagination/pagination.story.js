import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from './index';

const stories = storiesOf('Pagination', module)
    
stories.add('without props', () => (
    <Pagination />
))

stories.add('with props 5', () => (
    <Pagination total={5} activePage={1} />
))

stories.add('with props 7', () => (
    <Pagination total={7} activePage={5} />
))

stories.add('with props 15', () => (
    <Pagination total={15} activePage={8} />
))

stories.add('with props 15 and link', () => (
    <Pagination total={15} activePage={8} pageLink='http://mypage.com/page/%page%' />
))